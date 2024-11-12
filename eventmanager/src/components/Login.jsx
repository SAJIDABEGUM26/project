// src/components/Login.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../App";

const Login = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login" >
      <h2>Login</h2>
      <div className="user-box"><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
      <div className="user-box"><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
      <button className="button1" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;