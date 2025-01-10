const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const databaseId = process.env.NOTION_DATABASE_ID;

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    res.status(200).json(response.results);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ error: "Failed to fetch data from Notion" });
  }
}
