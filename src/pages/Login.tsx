import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../server/axiosInstance";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/auth/login/", {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("authToken", response.data.token);
      navigate("/protected");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
