import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is my first blog post.",
      author: "John Doe",
      comments: [],
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is my second blog post.",
      author: "Jane Doe",
      comments: [],
    },
  ]);

  const addBlogPost = (title, content, author) => {
    setBlogPosts([
      ...blogPosts,
      { id: blogPosts.length + 1, title, content, author, comments: [] },
    ]);
  };

  const editBlogPost = (id, updatedPost) => {
    setBlogPosts(
      blogPosts.map((post) => (post.id === id ? updatedPost : post))
    );
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
  };

  const addComment = (postId, username, comment) => {
    setBlogPosts(
      blogPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, { username, comment }],
          };
        }
        return post;
      })
    );
  };

  return (
    <BlogContext.Provider
      value={{
        blogPosts,
        addBlogPost,
        editBlogPost,
        deleteBlogPost,
        addComment,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
