import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section style={{ textAlign: "center", padding: "60px 16px" }}>
      <p
        style={{
          fontSize: "96px",
          fontWeight: 800,
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        404
      </p>

      <h2 style={{ fontSize: "26px", margin: "16px 0 8px" }}>
        Page not found
      </h2>

      <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
        The page you're looking for doesn't exist or has moved.
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          background: "var(--accent)",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "8px",
          fontWeight: 700,
        }}
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;