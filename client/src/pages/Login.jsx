import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Login will start working once we connect the backend.");
  };

  return (
    <section className="auth">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        <p className="auth-sub">Log in to your Flysty account</p>

        <label>
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input type="password" required placeholder="Your password" />
        </label>

        <button type="submit" className="auth-btn">
          Log in
        </button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;