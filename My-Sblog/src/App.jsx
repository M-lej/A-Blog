import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NewPost from "./pages/NewPost";
import { BlogProvider } from "./context/BlogContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <BlogProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/newpost" element={<NewPost />} />
            </Routes>
          </div>
        </Router>
      </BlogProvider>
    </UserProvider>
  );
}

export default App;
