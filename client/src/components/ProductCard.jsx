import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, image, feature, price, oldPrice, rating, reviews, badge } =
    product;
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(id);

  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  const handleHeart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
  };

  return (
    <Link to={`/products/${id}`} className="pcard">
      <div className="pcard-image">
        {badge && <span className="pcard-badge">{badge}</span>}

        <button
          onClick={handleHeart}
          aria-label="Add to wishlist"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "none",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
            color: liked ? "#ef4444" : "#6b7280",
            zIndex: 2,
          }}
        >
          <FiHeart style={{ fill: liked ? "#ef4444" : "none" }} />
        </button>

        <img src={image} alt={name} />
        <span className="pcard-rating">
          {rating} <span className="star">★</span>{" "}
          <span className="muted">({reviews})</span>
        </span>
      </div>

      <div className="pcard-body">
        <h3>{name}</h3>
        {feature && <p className="pcard-feature">{feature}</p>}
        <p className="pcard-price">
          <b>KES {price.toLocaleString()}</b>
          {oldPrice && (
            <>
              <s>KES {oldPrice.toLocaleString()}</s>
              <span className="pcard-discount">-{discount}%</span>
            </>
          )}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;