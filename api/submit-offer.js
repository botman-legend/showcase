import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, query } = req.body;

    await sql`INSERT INTO offers (email, query, created_at) VALUES (${email}, ${query}, NOW())`;

    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
