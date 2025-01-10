import React, { useEffect, useState } from "react";
import { fetchNotionData } from "../services/notionApi";

const NotionTest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchNotionData();
        console.log("Fetched Posts:", data); // 데이터 확인
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error.message);
      }
    };

    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.properties.Name.title[0].plain_text}</h2>
          <p>{post.content}</p>
          <p>{post.created_time}</p>
          {post.cover && <img src={post.cover.file.url} alt="Post" style={{ width: "20%" }} />}
        </div>
      ))}
    </div>
  );
};

export default NotionTest;
