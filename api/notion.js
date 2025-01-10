import axios from "axios";

export default async function handler(req, res) {
  console.log("Axios version:", require("axios").version); // Axios 버전 출력

  if (!process.env.NOTION_API_KEY) {
    return res.status(500).json({ error: "NOTION_API_KEY is missing" });
  }

  res.status(200).json({ message: "Axios is working!" });

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { databaseId } = req.body;

  if (!process.env.NOTION_API_KEY) {
    console.error("Environment variable NOTION_API_KEY is missing");
    return res.status(500).json({ error: "NOTION_API_KEY is not set" });
  }

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

    console.log("Notion API response:", response.data); // 응답 디버깅
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from Notion:", error.message); // 에러 디버깅
    console.error("Error response:", error.response?.data || "No response data");
    res.status(500).json({ error: "Failed to fetch data from Notion" });
  }
}
