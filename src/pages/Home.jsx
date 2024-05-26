import React, { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword,
  doSignOut,
} from "../firebase/auth";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { userLoggedIn } = useAuth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(email);
    console.log(password);
    setIsSigningIn(true);
    await doCreateUserWithEmailAndPassword(email, password);
  };

  const onSubmit1 = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(email);
    console.log(password);
    setIsSigningIn(true);
    await doSignInWithEmailAndPassword(email, password);
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();
    doSignOut();
  };

  return (
    <div className="homeBox">
      <div>
        <h2 className="homeTitle">Log in</h2>
        <p className="homeText">hejhej</p>
        <form className="homeLogin">
          <input
            className="homeInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
          <button className="homeButton" onClick={onSubmit1}>
            Log in
          </button>
          <button className="homeButton" onClick={onSubmit2}>
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
// function Home() {
//   const { user, register, login, logout } = useContext(UserContext);
//   const [isRegister, setIsRegister] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = () => {
//     if (register(username, password)) {
//       setIsRegister(false);
//       setUsername("");
//       setPassword("");
//     }
//   };

//   const handleLogin = () => {
//     login(username, password);
//     setUsername("");
//     setPassword("");
//   };

//   return (
//     <div>
//       <h1>Home</h1>
//       {user.username === "Guest" ? (
//         <div>
//           {isRegister ? (
//             <div>
//               <h2>Register</h2>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//               <button onClick={handleRegister}>Register</button>
//               <button onClick={() => setIsRegister(false)}>Go to Login</button>
//             </div>
//           ) : (
//             <div>
//               <h2>Login</h2>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//               <button onClick={handleLogin}>Login</button>
//               <button onClick={() => setIsRegister(true)}>
//                 Go to Register
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <p>Welcome, {user.username}</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
