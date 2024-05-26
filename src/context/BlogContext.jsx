import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the first post",
      author: "Jane Doe",
      comments: [],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post",
      author: "Joe Doe",
      comments: [],
    },
  ]);

  const addBlog = (title, content, author) => {
    setBlogs([
      ...blogs,
      { id: Date.now(), title, content, author, comments: [] },
    ]);
  };

  const editBlog = (id, newTitle, newContent, author) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id && blog.author === author
          ? { ...blog, title: newTitle, content: newContent }
          : blog
      )
    );
  };

  const deleteBlog = (id, author) => {
    setBlogs(blogs.filter((blog) => blog.id !== id || blog.author !== author));
  };

  const addComment = (blogId, commentText, username) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === blogId
          ? {
              ...blog,
              comments: [...blog.comments, { text: commentText, username }],
            }
          : blog
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, editBlog, deleteBlog, addComment }}
    >
      {children}
    </BlogContext.Provider>
  );
};
