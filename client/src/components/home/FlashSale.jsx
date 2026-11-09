import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { useProducts } from "../../context/ProductsContext";
import "./FlashSale.css";

function getTimeLeft() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(end - new Date(), 0);
  return {
    h: Math.floor(diff / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n) => String(n).padStart(2, "0");

function FlashSale() {
  const { products } = useProducts();
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const flashItems = products.filter((p) => p.flash);

  if (flashItems.length === 0) return null;

  return (
    <section className="flash">
      <div className="flash-head">
        <h3>⚡ Flash Sale</h3>

        <div className="countdown">
          <span>Ends in</span>
          <b>{pad(time.h)}</b>:<b>{pad(time.m)}</b>:<b>{pad(time.s)}</b>
        </div>

        <Link to="/products" className="see-all">
          See all
        </Link>
      </div>

      <div className="flash-grid">
        {flashItems.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default FlashSale;