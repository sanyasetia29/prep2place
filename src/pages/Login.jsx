
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const enteredUsername = username.trim();

    if (!enteredUsername || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: enteredUsername,
          password,
        }),
      });

      const data = await response.json();

      console.log("Backend login response:", data);

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid username or password.");
        return;
      }

      if (!data.user || !data.user.username || !data.user.role) {
        setError("Username or role missing from backend response.");
        return;
      }

      const loggedInUser = {
        ...data.user,
        username: String(data.user.username).trim(),
        role: String(data.user.role).trim().toLowerCase(),
        course: String(data.user.course || "").trim().toUpperCase(),
      };

      if (!["admin", "student"].includes(loggedInUser.role)) {
        setError(`Invalid role received from backend: ${loggedInUser.role}`);
        return;
      }

      // Save the logged-in user's details for the Planner.
      localStorage.setItem(
        "prep2place-username",
        loggedInUser.username.toLowerCase()
      );

      if (loggedInUser.role === "student") {
        localStorage.setItem("prep2place-course", loggedInUser.course);
      } else {
        localStorage.removeItem("prep2place-course");
      }

      // Notify other components that the logged-in user has changed.
      window.dispatchEvent(new Event("prep2place-user-changed"));

      // Save authenticated user in App.jsx.
      onLogin(loggedInUser);

      const destination =
        loggedInUser.role === "admin" ? "/admin" : "/home";

      console.log("Login role:", loggedInUser.role);
      console.log("Login course:", loggedInUser.course);
      console.log("Redirecting to:", destination);

      navigate(destination, { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError("Backend connection failed. Please check the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Login to continue your placement preparation.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
