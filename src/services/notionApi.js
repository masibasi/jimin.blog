export const fetchPosts = async () => {
  const response = await fetch("/api/notion", {
    // 반드시 '/api/notion'으로 수정
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      databaseId: "94f8a741c0af438c85a104b5958335e7", // 데이터베이스 ID
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("Error response:", errorData);
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  const data = await response.json();

  return data.results.map((page) => {
    const properties = page.properties || {};
    const cover = page.cover;

    return {
      id: page.id,
      title: properties.Name?.title[0]?.plain_text || "Untitled",
      content: properties.Content?.rich_text[0]?.plain_text || "No content available",
      date: properties.Date?.date?.start || "No date provided",
      image: cover?.file?.url || cover?.external?.url || "default-image-url.jpg",
    };
  });
};
