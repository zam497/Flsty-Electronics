import Hero from "../components/home/Hero";
import Benefits from "../components/home/Benefits";
import Categories from "../components/home/Categories";
import FlashSale from "../components/home/FlashSale";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";
import "./Home.css";

function Home() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <Hero />
      <Benefits />
      <Categories />
      <FlashSale />

      <h3 style={{ margin: "32px 0 16px", fontSize: "22px" }}>
        Featured Products
      </h3>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "var(--danger)" }}>{error}</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

export default Home;