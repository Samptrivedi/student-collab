import React, { useState } from "react";
import API from "../services/api";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", user);

      localStorage.setItem("token", res.data);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <h1 className="app-title">StudentCollab</h1>
        <p className="subtitle">Connect • Share • Collaborate</p>

        <input
          placeholder="Username"
          onChange={(e) =>
            setUser({ ...user, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>

        <p className="register-text">
          New user?{" "}
          <span onClick={() => (window.location.href = "/register")}>
            Register here
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;