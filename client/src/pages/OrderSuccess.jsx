import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import { useCart } from "../context/CartContext";

function OrderSuccess() {
  const { clearCart } = useCart();
  const [orderNumber] = useState(
    () => "FL" + Math.floor(100000 + Math.random() * 900000)
  );

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ textAlign: "center", padding: "60px 16px" }}>
      <div style={{ fontSize: "72px", color: "var(--accent)", display: "flex", justifyContent: "center" }}>
        <FiCheckCircle />
      </div>

      <h2 style={{ fontSize: "28px", margin: "16px 0 8px" }}>
        Thank you for your order!
      </h2>

      <p style={{ color: "var(--muted)", marginBottom: "6px" }}>
        Your order number is
      </p>
      <p style={{ fontSize: "24px", fontWeight: 800, marginBottom: "16px" }}>
        {orderNumber}
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