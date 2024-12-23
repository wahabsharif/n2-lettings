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

    const [existingTokens] = await pool.query<User[]>(
      "SELECT * FROM user_tokens WHERE user_id = ? AND expires_at > NOW()",
      [user.id]
    );

    if (existingTokens.length > 0) {
      return res.status(200).json({
        message: "Login successful with an existing valid token",
        user: { ...user },
        token: existingTokens[0].token,
      });
    }

    const tokenExpiry = new Date();
    tokenExpiry.setHours(tokenExpiry.getHours() + 1);

    await pool.query(
      "INSERT INTO user_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
      [user.id, token, tokenExpiry]
    );

    res.status(200).json({
      message: "Login successful",
      user: { ...user, password: undefined },
      token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
