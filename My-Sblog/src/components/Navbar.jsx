import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

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
        {user.username !== "Guest" && <li className="user">{user.username}</li>}
      </ul>
    </nav>
  );
}

export default Navbar;
