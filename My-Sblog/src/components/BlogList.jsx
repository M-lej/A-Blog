import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";

function BlogList() {
  const { blogPosts, editBlogPost, deleteBlogPost, addComment } =
    useContext(BlogContext);
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    addComment(postId, user.username, comment);
    setComment("");
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>
            <strong>Author:</strong> {post.author}
          </p>
          <button onClick={() => editBlogPost(post)}>Edit</button>
          <button onClick={() => deleteBlogPost(post.id)}>Delete</button>

          <h4>Comments</h4>
          {post.comments.map((commentObj, index) => (
            <p key={index}>
              <strong>{commentObj.username}:</strong> {commentObj.comment}
            </p>
          ))}
          <form onSubmit={(e) => handleCommentSubmit(e, post.id)}>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment"
              required
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
