import React, { useState } from "react";
import "./Login.scss";

function Login() {
  // State to manage user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can send the data to your backend for authentication
    if (email !== "" && password !== "") {
      // You can send the data to your backend for authentication
    }
  };

  return (
    <div className="screen-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autocomplete="new-password"
            />
          </div>
          <button type="submit">Login</button>
          <p className="helper-text">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
