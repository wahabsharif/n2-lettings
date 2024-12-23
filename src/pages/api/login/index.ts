import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
}

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    if (method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      res.status(405).json({ error: `Method ${method} not allowed` });
      return;
    }

    const { username, password: inputPassword } = req.body;

    // Check if both username and password exist
    if (!username || !inputPassword) {
      res.status(400).json({ error: "Username and password are required" });
      return;
    }

    const [rows] = await pool.query<User[]>(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    const user = rows[0];

    if (!user) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(inputPassword, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid username or password" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Check if there's an existing valid token for the user
    const [existingTokens] = await pool.query(
      "SELECT * FROM user_tokens WHERE user_id = ? AND expires_at > NOW()",
      [user.id]
    );

    // If there's a valid token, return it and do not insert a new one
    if (existingTokens.length > 0) {
      return res.status(200).json({
        message: "Login successful with an existing valid token",
        user: { ...user },
        token: existingTokens[0].token, // Return the existing token
      });
    }

    // Store the new token in the database if no valid token exists
    const tokenExpiry = new Date();
    tokenExpiry.setHours(tokenExpiry.getHours() + 1); // Token expires in 1 hour

    await pool.query(
      "INSERT INTO user_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
      [user.id, token, tokenExpiry]
    );

    // Destructure to exclude the password
    const { password, ...userDetails } = user;

    res.status(200).json({
      message: "Login successful",
      user: userDetails,
      token: token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
