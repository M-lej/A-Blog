import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

function Navbar() {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/newpost">New Post</Link>
        </li>

        {currentUser ? (
          <li className="user">{currentUser.email}</li>
        ) : (
          <li className="user"></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
