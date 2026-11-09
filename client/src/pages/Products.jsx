import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

const controlStyle = {
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  fontSize: "14px",
};

function Products() {
  const { products, loading, error } = useProducts();
  const [params] = useSearchParams();
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState("");

  const category = params.get("category");
  const search = params.get("search");

  let filtered = products;

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search) {
    const word = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(word) ||
        p.feature.toLowerCase().includes(word) ||
        p.category.toLowerCase().includes(word)
    );
  }

  if (maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(maxPrice));
  }

  const sorted = [...filtered];
  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  const heading = search
    ? `Results for "${search}"`
    : category || "All Products";

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ fontSize: "26px" }}>{heading}</h2>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <input
            type="number"
            placeholder="Max price (KES)"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ ...controlStyle, width: "170px" }}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={controlStyle}
          >
            <option value="default">Sort by: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "var(--danger)" }}>{error}</p>}

      {!loading && !error && sorted.length === 0 && <p>No products found.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Products;