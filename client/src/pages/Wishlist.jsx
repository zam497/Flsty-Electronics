import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { ids } = useWishlist();
  const saved = products.filter((p) => ids.includes(p.id));

  if (saved.length === 0) {
    return (
      <section style={{ textAlign: "center", padding: "60px 16px" }}>
        <h2 style={{ fontSize: "26px", marginBottom: "8px" }}>
          Your wishlist is empty
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
          Tap the heart on a product to save it here.
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
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2 style={{ fontSize: "26px", marginBottom: "16px" }}>
        My Wishlist ({saved.length})
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {saved.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Wishlist;