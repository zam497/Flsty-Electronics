import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function OrderSuccess() {
  const { clearCart } = useCart();
  const location = useLocation();
  const order = location.state;

  useEffect(() => {
    if (order) clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!order) {
    return (
      <section style={{ textAlign: "center", padding: "60px 16px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "8px" }}>
          No order to show
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
          Place an order and your confirmation will appear here.
        </p>
        <Link
          to="/products"
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "8px",
            fontWeight: 700,
          }}
        >
          Start shopping
        </Link>
      </section>
    );
  }

  return (
    <section style={{ textAlign: "center", padding: "60px 16px" }}>
      <div
        style={{
          fontSize: "72px",
          color: "var(--accent)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FiCheckCircle />
      </div>

      <h2 style={{ fontSize: "28px", margin: "16px 0 8px" }}>
        Thank you for your order!
      </h2>

      <p style={{ color: "var(--muted)", marginBottom: "6px" }}>
        Your order number is
      </p>
      <p style={{ fontSize: "24px", fontWeight: 800, marginBottom: "8px" }}>
        {order.orderNumber}
      </p>
      <p style={{ marginBottom: "16px" }}>
        Total: <b>KES {order.total.toLocaleString()}</b>
      </p>

      <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
        We'll contact you shortly to confirm your delivery.
      </p>

      <Link
        to="/products"
        style={{
          display: "inline-block",
          background: "var(--accent)",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "8px",
          fontWeight: 700,
        }}
      >
        Continue shopping
      </Link>
    </section>
  );
}

export default OrderSuccess;