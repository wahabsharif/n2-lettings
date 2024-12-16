import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import { ResultSetHeader } from "mysql2";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        const { id } = req.query;

        if (id) {
          const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
            id,
          ]);

          const user = Array.isArray(rows) ? rows : [];

          if (user.length === 0) {
            res.status(404).json({ error: "User not found" });
            return;
          }

          res.status(200).json(user[0]);
        } else {
          const [rows] = await pool.query("SELECT * FROM users");
          const users = Array.isArray(rows) ? rows : [];
          res.status(200).json(users);
        }
        break;

      case "POST":
        const {
          first_name,
          last_name,
          username,
          email,
          phone,
          role,
          password,
        } = req.body;

        if (
          !first_name ||
          !last_name ||
          !username ||
          !email ||
          !phone ||
          !role ||
          !password
        ) {
          res.status(400).json({ error: "Missing required fields" });
          return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await pool.query<ResultSetHeader>(
          "INSERT INTO users (first_name, last_name, username, email, phone, role, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [first_name, last_name, username, email, phone, role, hashedPassword]
        );

        res.status(201).json({
          id: result.insertId,
          message: "User created successfully",
        });
        break;

      case "PATCH":
        const { id: updateId } = req.query;
        if (!updateId) {
          res.status(400).json({ error: "User ID is required for update" });
          return;
        }

        const { password: newPassword, ...updateFields } = req.body;
        if (newPassword) {
          updateFields.password = await bcrypt.hash(newPassword, 10);
        }

        const updateKeys = Object.keys(updateFields);
        const updateValues = Object.values(updateFields);

        if (updateKeys.length === 0) {
          res.status(400).json({ error: "No fields to update" });
          return;
        }

        const updateQuery = `UPDATE users SET ${updateKeys
          .map((key) => `${key} = ?`)
          .join(", ")} WHERE id = ?`;

        await pool.query(updateQuery, [...updateValues, updateId]);

        res.status(200).json({ message: "User updated successfully" });
        break;

      case "DELETE":
        const { id: deleteId } = req.query;

        if (!deleteId) {
          res.status(400).json({ error: "User ID is required for deletion" });
          return;
        }

        await pool.query("DELETE FROM users WHERE id = ?", [deleteId]);
        res.status(200).json({ message: "User deleted successfully" });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
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
 * - GET /api/users
 * - POST /api/users
 * - PATCH /api/users?id=
 * - DELETE /api/users?id=
 */
