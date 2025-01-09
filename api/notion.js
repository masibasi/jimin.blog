import axios from "axios"; // axios 가져오기

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { databaseId } = req.body;

  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from Notion:", error.message);
    res.status(500).json({ error: "Failed to fetch data from Notion" });
  }
}
