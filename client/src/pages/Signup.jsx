import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setMessage("The two passwords do not match.");
      return;
    }

    setMessage("Sign-up will start working once we connect the backend.");
  };

  return (
    <section className="auth">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p className="auth-sub">Join Flysty Electronics</p>

        <label>
          Full name
          <input type="text" required placeholder="Your full name" />
        </label>

        <label>
          Email
          <input type="email" required placeholder="you@example.com" />
        </label>

        <label>
          Password
          <input
            type="password"
            required
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm password
          <input
            type="password"
            required
            placeholder="Type the password again"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </label>

        <button type="submit" className="auth-btn">
          Create account
        </button>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </section>
  );
}

export default Signup;