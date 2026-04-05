import React, { useState } from "react";
import API from "../services/api";

function Register() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleRegister = async () => {
    await API.post("/users", user);
    alert("User Registered!");
    window.location.href = "/";
  };

  return (
    <div className="login-container">
      <h2>Register</h2>

      <input placeholder="Username"
        onChange={(e) => setUser({...user, username: e.target.value})}/>

      <input type="password" placeholder="Password"
        onChange={(e) => setUser({...user, password: e.target.value})}/>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;