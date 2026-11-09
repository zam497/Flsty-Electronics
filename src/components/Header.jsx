import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./Header.css";

const categories = [
  "Earbuds",
  "Power Banks",
  "Smartwatches",
  "Chargers",
  "Speakers",
  "Accessories",
];

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { count } = useWishlist();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <div className="topbar">Free delivery on orders above a set amount</div>

      <header className="header">
        <div className="header-main">
          <Link to="/" className="logo">
            FLYSTY<span>.</span>
          </Link>

          <form className="search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search earbuds, power banks, watches..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <FiSearch />
            </button>
          </form>

          <div className="header-actions">
            <Link to="/login" className="icon-link" aria-label="Account">
              <FiUser />
            </Link>
            <Link to="/wishlist" className="icon-link" aria-label="Wishlist">
              <FiHeart />
              {count > 0 && <span className="badge">{count}</span>}
            </Link>
            <Link to="/cart" className="icon-link" aria-label="Cart">
              <FiShoppingCart />
              {totalItems > 0 && <span className="badge">{totalItems}</span>}
            </Link>
          </div>
        </div>

        <nav className="categories">
          <div className="categories-inner">
            <Link to="/products">All Products</Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/products?category=${encodeURIComponent(cat)}`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;