import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Navbar() {
  const { user, login, logout } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    login(username);
    setUsername("");
  };

  return (
    <nav>
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
      </ul>
      <div>
        {user.username === "Guest" ? (
          <>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <button onClick={handleLogin}>Login</button>
          </>
        ) : (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
