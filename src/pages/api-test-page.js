import axios from "axios";
import React, { useState, useEffect } from "react";

const ApiTestPage = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null);

  const axiosTest = async (name) => {
    try {
      // const response = await axios.get(`http://localhost:8080/hello-world/path-variable/${name}`);
      const response = await axios.get(`http://localhost:8080/guest-book`);
      setMessage(response.data.message); // Assuming `message` is the response field
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  return (
    <div>
      <h1>Items List</h1>
      {/* display message */}
      <p>{message}</p>
      {error}
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => axiosTest(text)}>AXIOS TEST</button>
    </div>
  );
};

export default ApiTestPage;
