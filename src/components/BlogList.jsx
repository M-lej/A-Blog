import React, { useContext, useState } from "react";
import { BlogContext } from "../context/BlogContext";
import { useAuth } from "../firebase/AuthContext";

function BlogList() {
  const { blogs, editBlog, deleteBlog, addComment } = useContext(BlogContext);
  const { currentUser } = useAuth();
  const [editPost, setEditPost] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [comment, setComment] = useState("");

  const handleEdit = (id, title, content) => {
    setEditPost(id);
    setNewTitle(title);
    setNewContent(content);
  };

  const handleSave = (id) => {
    editBlog(id, newTitle, newContent, currentUser.email);
    setEditPost(null);
    setNewTitle("");
    setNewContent("");
  };

  const handleDelete = (id) => {
    deleteBlog(id, currentUser.email);
  };

  const handleAddComment = (id) => {
    if (comment) {
      addComment(id, comment, currentUser.email);
      setComment("");
    }
  };

  return (
    <div className="blogBox">
      <h2>Blog Posts</h2>
      {blogs.map((blog) => (
        <div className="blogPost" key={blog.id}>
          {editPost === blog.id ? (
            <div>
              <input
                className="newPostInput"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                className="newPostInput"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
              <button
                className="editDeleteBtn"
                onClick={() => handleSave(blog.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              {currentUser ? (
                <div>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <p className="author">Author: {blog.author}</p>

                  {currentUser.email === blog.author && (
                    <div>
                      <button
                        className="editDeleteBtn"
                        onClick={() =>
                          handleEdit(blog.id, blog.title, blog.content)
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="editDeleteBtn"
                        onClick={() => handleDelete(blog.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h3>{blog.title}</h3>
                  <p>{blog.content}</p>
                  <p className="author">Author: {blog.author}</p>
                </div>
              )}
            </div>
          )}
          <div className="comments">
            <h4>Comments</h4>
            {blog.comments.map((comment, index) => (
              <p key={index}>
                <strong>{comment.username}</strong>: {comment.text}
              </p>
            ))}
            <div className="commentForm">
              <input
                type="text"
                placeholder="Add a comment"
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="addCommentBtn"
                onClick={() => handleAddComment(blog.id)}
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
