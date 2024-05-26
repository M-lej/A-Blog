import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "Guest" });

  const register = (username, password) => {
    if (users.find((user) => user.username === username)) {
      alert("Username already taken");
      return false;
    }
    setUsers([...users, { username, password }]);
    alert("Registration successful");
    return true;
  };

  const login = (username, password) => {
    const registeredUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (registeredUser) {
      setUser({ username });
    } else {
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setUser({ username: "Guest" });
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
