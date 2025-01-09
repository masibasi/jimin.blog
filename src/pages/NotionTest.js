import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/notionApi";

const NotionTest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
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
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
          {post.image && <img src={post.image} alt="Post" style={{ width: "100%" }} />}
        </div>
      ))}
    </div>
  );
};

export default NotionTest;
