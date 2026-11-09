import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const slides = [
  {
    badge: "BEST SELLER",
    title: "Fast M100 Power Bank",
    text: "22.5W fast charging, built for all-day power.",
    link: "/products?category=Power%20Banks",
    image: "/images/product1.jpeg",
  },
  {
    badge: "NEW ARRIVAL",
    title: "GL12pro Earbuds",
    text: "Premium HD sound quality in your ears.",
    link: "/products?category=Earbuds",
    image: "/images/product3.jpeg",
  },
  {
    badge: "WIRELESS",
    title: "F100 Magnetic Power Bank",
    text: "Fast wireless charging that snaps onto your phone.",
    link: "/products?category=Power%20Banks",
    image: "/images/product2.jpeg",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <span className="hero-badge">{slide.badge}</span>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
          <div className="hero-buttons">
            <Link to={slide.link} className="btn">
              Shop Now
            </Link>
            <Link to="/products" className="btn btn-outline">
              View All
            </Link>
          </div>
        </div>

        <img
          src={slide.image}
          alt={slide.title}
          style={{
            maxWidth: "45%",
            maxHeight: "320px",
            objectFit: "contain",
            borderRadius: "12px",
            flexShrink: 0,
          }}
        />
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "12px",
        }}
      >
        {slides.map((s, i) => (
          <span
            key={s.title}
            onClick={() => setCurrent(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              background: i === current ? "var(--accent)" : "#d1d5db",
            }}
          />
        ))}
      </div>
    </>
  );
}

export default Hero;