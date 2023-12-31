import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import "../Forms.scss";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/auth";

function Login() {
  const { authError } = useSelector(({ auth }) => auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (email !== "" && password !== "") {
      dispatch(signIn({ email, password }, navigate, setLoading));
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
              placeholder={"Enter your email"}
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
              placeholder={"Enter your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="error-text">{authError}</div>
          <button type="submit" disabled={loading}>
            Login
          </button>
          <p className="helper-text">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
