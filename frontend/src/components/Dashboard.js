import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "./Navbar";

function Dashboard() {

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  const createPost = async () => {
    await API.post("/posts", post);
    fetchPosts();
  };

  return (
    <div>
      <Navbar />

      <div className="main-layout">

        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <h3>Menu</h3>
          <p>🏠 Home</p>
          <p>📄 My Posts</p>
          <p>👥 Groups</p>
        </div>

        {/* CENTER FEED */}
        <div className="feed">

          <div className="post-box">
            <input placeholder="Title"
              onChange={(e) => setPost({...post, title: e.target.value})}/>
            <input placeholder="What's on your mind?"
              onChange={(e) => setPost({...post, content: e.target.value})}/>
            <button onClick={createPost}>Post</button>
          </div>

          {posts.map(p => (
            <div className="post-card" key={p.id}>
              <h3>{p.title}</h3>
              <p>{p.content}</p>
              <div className="post-actions">
                <span>👍 Like</span>
                <span>💬 Comment</span>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h3>Profile</h3>
          <p>👤 User</p>
          <p>📌 Welcome to StudentCollab</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;