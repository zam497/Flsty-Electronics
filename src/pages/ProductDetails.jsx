import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section>
        <h2>Product not found</h2>
        <Link to="/products" className="back-link">
          ← Back to products
        </Link>
      </section>
    );
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section>
      <Link to="/products" className="back-link">
        ← Back to products
      </Link>

      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h2>{product.name}</h2>

          <p className="details-rating">
            <span className="star">★</span> {product.rating} ({product.reviews}{" "}
            reviews)
          </p>

          <p className="details-feature">{product.feature}</p>

          <p className="details-price">
            <b>KES {product.price.toLocaleString()}</b>
            {product.oldPrice && (
              <>
                <s>KES {product.oldPrice.toLocaleString()}</s>
                <span className="details-discount">-{discount}%</span>
              </>
            )}
          </p>

          <button className="details-btn" onClick={handleAdd}>
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;