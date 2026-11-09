import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Flysty Electronics</h4>
          <p>Quality gadgets, great prices, and genuine warranty.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li><Link to="/">Track Order</Link></li>
            <li><Link to="/">Warranty</Link></li>
            <li><Link to="/">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Account</h4>
          <ul>
            <li><Link to="/login">Login / Sign up</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Flysty Electronics. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;