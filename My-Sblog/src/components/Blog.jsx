import React, { useContext } from "react";
import BlogList from "./BlogList";
import { BlogContext } from "../context/BlogContext";

function Blog() {
  const { blogPosts, editBlogPost, deleteBlogPost, addComment } =
    useContext(BlogContext);

  return (
    <div>
      <h1>Blog</h1>
      <BlogList
        blogPosts={blogPosts}
        editBlogPost={editBlogPost}
        deleteBlogPost={deleteBlogPost}
        addComment={addComment}
      />
    </div>
  );
}

export default Blog;
