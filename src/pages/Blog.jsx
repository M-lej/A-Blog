import React, { useContext } from "react";
import BlogList from "../components/BlogList";
import { BlogContext } from "../context/BlogContext";

function Blog() {
  const { blogPosts, editBlogPost, deleteBlogPost, addComment } =
    useContext(BlogContext);

  return (
    <div className="blogBox">
      <h1 className="blogTitle">Blog</h1>
      <div className="blogList">
        <BlogList
          blogPosts={blogPosts}
          editBlogPost={editBlogPost}
          deleteBlogPost={deleteBlogPost}
          addComment={addComment}
        />
      </div>
    </div>
  );
}

export default Blog;
