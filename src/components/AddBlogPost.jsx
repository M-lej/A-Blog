import React, { useState, useEffect } from "react";

function AddBlogPost({ addBlogPost, editingPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setAuthor(editingPost.author);
    } else {
      setTitle("");
      setContent("");
      setAuthor("");
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlogPost(title, content, author);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="addpost">
      <h2>{editingPost ? "Edit" : "Add"} Blog Post</h2>
      <form className="addpostForm" onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">{editingPost ? "Update" : "Add"} Post</button>
      </form>
    </div>
  );
}

export default AddBlogPost;
