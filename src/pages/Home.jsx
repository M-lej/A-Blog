import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthContext";

const Home = () => {
  const { createUser, loginUser, logOut, currentUser, getUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(getUser);

  useEffect(() => {
    console.log(user);
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUser(email, password);
    setUser(getUser());
  };

  const onSubmit1 = async (e) => {
    console.log(user);
    e.preventDefault();

    await loginUser(email, password);
    setUser(getUser());
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      setUser(getUser());
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div className="homeBox">
      <div>
        {isRegister ? (
          <div>
            <h2>Register</h2>
            <form className="homeLogin">
              <input
                className="homeInput"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username"
              />
              <input
                className="homeInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button className="homeButton" onClick={onSubmit}>
                Register
              </button>
              <button
                className="homeButton"
                onClick={() => setIsRegister(false)}
              >
                Go to Login
              </button>
            </form>
          </div>
        ) : (
          <div>
            {loggedIn ? (
              <div>
                <h2>Logged in</h2>
                <button className="homeButton" onClick={onSubmit2}>
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <h2>Login</h2>
                <form className="homeLogin">
                  <input
                    className="homeInput"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Username"
                  />
                  <input
                    className="homeInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button className="homeButton" onClick={onSubmit1}>
                    Log in
                  </button>
                </form>
                <button
                  className="homeButton"
                  onClick={() => setIsRegister(true)}
                >
                  Go to Register
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;