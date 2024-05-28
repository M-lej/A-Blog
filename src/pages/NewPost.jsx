import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const { addBlog } = useContext(BlogContext);
  const { currentUser, getUser } = useAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getUser) {
      addBlog(title, content, currentUser.email);
      setTitle("");
      setContent("");
      navigate("/blog");
    } else {
      alert("You must be logged in to create a post.");
    }
  };

  return (
    <div className="newPostBox">
      <h2 className="newPostTitle">Create a New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="newPostInput"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="newPostContent"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="newPostBtn">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default NewPost;
