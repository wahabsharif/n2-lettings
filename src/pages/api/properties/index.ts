import { IncomingForm } from "formidable";
import path from "path";
import pool from "../../../lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { ResultSetHeader } from "mysql2";
import fs from "fs";

// Set the API body parser to handle form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Function to sanitize the image file name
const sanitizeFileName = (filename: string | null): string => {
  if (!filename) {
    throw new Error("File name is missing or invalid");
  }

  const extension = path.extname(filename); // Extract the file extension
  const baseName = path.basename(filename, extension); // Extract the base name without extension

  return (
    baseName
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]+/g, "") + // Remove non-alphanumeric characters except hyphens
    extension.toLowerCase()
  ); // Add the lowercase extension back
};

// Define the type for fields
type PropertyFields = {
  title?: string;
  slug?: string;
  price?: string;
  units?: string;
  property_type?: string;
  property_status?: string;
  beds?: string;
  baths?: string;
  description?: string;
  images?: []; // Adjust type if needed
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    /**
     * GET API
     * Fetches a single property by ID or all properties if no ID is provided.
     */
    case "GET": {
      const { id } = req.query;

      try {
        if (id) {
          // Fetch single property
          const [rows] = await pool.query(
            "SELECT * FROM properties WHERE id = ?",
            [id]
          );
          const property = Array.isArray(rows) ? rows[0] : null;

          if (!property) {
            res.status(404).json({ error: "Property not found" });
            return;
          }

          res.status(200).json(property);
        } else {
          // Fetch all properties
          const [rows] = await pool.query("SELECT * FROM properties");
          const properties = Array.isArray(rows) ? rows : [];
          res.status(200).json(properties);
        }
      } catch (error) {
        res.status(500).json({ error: "Error fetching properties" });
      }
      break;
    }

    /**
     * POST API
     * Creates a new property with fields and optional image uploads.
     */
    case "POST": {
      const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), "public", "uploads"),
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(500).json({ error: "Error parsing form data" });
          return;
        }

        const {
          title,
          slug,
          price,
          units,
          property_type,
          property_status,
          beds,
          baths,
          description,
        } = fields as PropertyFields;

        if (
          !title ||
          !slug ||
          !price ||
          !units ||
          !property_type ||
          !property_status ||
          !beds ||
          !baths ||
          !description
        ) {
          res.status(400).json({ error: "Missing required fields" });
          return;
        }

        try {
          // Handle image file(s)
          const images = files.images
            ? Array.isArray(files.images)
              ? files.images
              : [files.images]
            : [];

          const imagePaths = images.map((image: any) => {
            const sanitizedFileName = sanitizeFileName(image.originalFilename);
            const filePath = `/uploads/${sanitizedFileName}`;
            fs.renameSync(
              image.filepath,
              path.join(process.cwd(), "public", filePath)
            );
            return filePath;
          });

          // Insert new property into the database
          const [result] = await pool.query<ResultSetHeader>(
            "INSERT INTO properties (title, slug, price, units, property_type, property_status, beds, baths, images, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
              title,
              slug,
              price,
              units,
              property_type,
              property_status,
              beds,
              baths,
              JSON.stringify(imagePaths),
              description,
            ]
          );

          res.status(201).json({
            id: result.insertId,
            message: "Property created successfully",
          });
        } catch (error) {
          res.status(500).json({ error: "Error creating property" });
        }
      });
      break;
    }

    /**
     * PATCH API
     * Updates an existing property by ID.
     */
    case "PATCH": {
      const { id } = req.query;

      if (!id) {
        res.status(400).json({ error: "Property ID is required for update" });
        return;
      }

      const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), "public", "uploads"),
        keepExtensions: true,
      });

      form.parse(req, async (err, fields, files) => {
        if (err) {
          res.status(500).json({ error: "Error parsing form data" });
          return;
        }

        const updateFields: Record<string, string | string[]> = {};
        const {
          title,
          slug,
          price,
          units,
          property_type,
          property_status,
          beds,
          baths,
          description,
        } = fields as PropertyFields;

        if (title) updateFields.title = title;
        if (slug) updateFields.slug = slug;
        if (price) updateFields.price = price;
        if (units) updateFields.units = units;
        if (property_type) updateFields.property_type = property_type;
        if (property_status) updateFields.property_status = property_status;
        if (beds) updateFields.beds = beds;
        if (baths) updateFields.baths = baths;
        if (description) updateFields.description = description;

        if (files.images) {
          const images = Array.isArray(files.images)
            ? files.images
            : [files.images];
          const imagePaths = images.map((image: any) => {
            const sanitizedFileName = sanitizeFileName(image.originalFilename);
            const filePath = `/uploads/${sanitizedFileName}`;
            fs.renameSync(
              image.filepath,
              path.join(process.cwd(), "public", filePath)
            );
            return filePath;
          });
          updateFields.images = JSON.stringify(imagePaths);
        }

        try {
          const updateKeys = Object.keys(updateFields);
          if (updateKeys.length === 0) {
            res.status(400).json({ error: "No fields to update" });
            return;
          }

          const updateQuery = `UPDATE properties SET ${updateKeys
            .map((key) => `${key} = ?`)
            .join(", ")} WHERE id = ?`;

          const result = await pool.query(updateQuery, [
            ...Object.values(updateFields),
            id,
          ]);

          if ((result[0] as ResultSetHeader).affectedRows === 0) {
            res
              .status(404)
              .json({ error: "Property not found or not updated" });
            return;
          }

          res.status(200).json({ message: "Property updated successfully" });
        } catch (error) {
          res.status(500).json({ error: "Error updating property" });
        }
      });
      break;
    }

    /**
     * DELETE API
     * Deletes a property by ID.
     */
    case "DELETE": {
      const { id } = req.query;

      if (!id) {
        res.status(400).json({ error: "Property ID is required for delete" });
        return;
      }

      try {
        const result = await pool.query("DELETE FROM properties WHERE id = ?", [
          id,
        ]);

        if ((result[0] as ResultSetHeader).affectedRows === 0) {
          res.status(404).json({ error: "Property not found" });
          return;
        }

        res.status(200).json({ message: "Property deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Error deleting property" });
      }
      break;
    }

    default:
      res.status(405).json({ error: `Method ${method} Not Allowed` });
      break;
  }
}

// GET / api / properties

// GET /api/properties?id=<propertyId>

// POST /api/properties
// {
//   title
// slug
// price
// units
// property_type
// property_status
// beds
// baths
// description
// (Optional) images as file uploads.
// }

// PATCH /api/properties?id=<propertyId>

// DELETE /api/properties?id=<propertyId>
