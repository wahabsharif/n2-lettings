import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { ResultSetHeader } from "mysql2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET": {
        const { id } = req.query;

        if (id) {
          // Get a single property by ID
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
          // Get all properties
          const [rows] = await pool.query("SELECT * FROM properties");
          const properties = Array.isArray(rows) ? rows : [];
          res.status(200).json(properties);
        }
        break;
      }

      case "POST": {
        const {
          title,
          slug,
          price,
          units,
          property_type,
          property_status,
          beds,
          images,
          description,
        } = req.body;

        if (
          !title ||
          !slug ||
          !price ||
          !units ||
          !property_type ||
          !property_status ||
          !beds ||
          !images ||
          !description
        ) {
          res.status(400).json({ error: "Missing required fields" });
          return;
        }

        const [result] = await pool.query<ResultSetHeader>(
          "INSERT INTO properties (title, slug, price, units, property_type, property_status, beds, images, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            title,
            slug,
            price,
            units,
            property_type,
            property_status,
            beds,
            JSON.stringify(images),
            description,
          ]
        );

        res.status(201).json({
          id: result.insertId,
          message: "Property created successfully",
        });
        break;
      }

      case "PATCH": {
        const { id } = req.query;
        if (!id) {
          res.status(400).json({ error: "Property ID is required for update" });
          return;
        }

        const { ...updateFields } = req.body;

        const updateKeys = Object.keys(updateFields);
        const updateValues = Object.values(updateFields);

        if (updateKeys.length === 0) {
          res.status(400).json({ error: "No fields to update" });
          return;
        }

        const updateQuery = `UPDATE properties SET ${updateKeys
          .map((key) => `${key} = ?`)
          .join(", ")} WHERE id = ?`;

        await pool.query(updateQuery, [...updateValues, id]);

        res.status(200).json({ message: "Property updated successfully" });
        break;
      }

      case "PUT": {
        const { id } = req.query;
        if (!id) {
          res.status(400).json({ error: "Property ID is required for update" });
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
          images,
          description,
        } = req.body;

        if (
          !title ||
          !slug ||
          !price ||
          !units ||
          !property_type ||
          !property_status ||
          !beds ||
          !images ||
          !description
        ) {
          res.status(400).json({ error: "Missing required fields" });
          return;
        }

        const [result] = await pool.query<ResultSetHeader>(
          "UPDATE properties SET title = ?, slug = ?, price = ?, units = ?, property_type = ?, property_status = ?, beds = ?, images = ?, description = ? WHERE id = ?",
          [
            title,
            slug,
            price,
            units,
            property_type,
            property_status,
            beds,
            JSON.stringify(images),
            description,
            id,
          ]
        );

        if (result.affectedRows === 0) {
          res.status(404).json({ error: "Property not found" });
          return;
        }

        res.status(200).json({ message: "Property updated successfully" });
        break;
      }

      case "DELETE": {
        const { id } = req.query;

        if (!id) {
          res
            .status(400)
            .json({ error: "Property ID is required for deletion" });
          return;
        }

        await pool.query("DELETE FROM properties WHERE id = ?", [id]);
        res.status(200).json({ message: "Property deleted successfully" });
        break;
      }

      default:
        res.setHeader("Allow", ["GET", "POST", "PATCH", "PUT", "DELETE"]);
        res.status(405).json({ error: `Method ${method} not allowed` });
        break;
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

/**
 * API URLs:
 * - GET /api/properties - Retrieve all properties or a specific property by ID
 * - POST /api/properties - Create a new property
 * - PATCH /api/properties?id= - Partially update a property by ID
 * - PUT /api/properties?id= - Fully update a property by ID
 * - DELETE /api/properties?id= - Delete a property by ID
 */
