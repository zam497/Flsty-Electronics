import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { items, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("mobile");

  if (items.length === 0) {
    return (
      <section className="checkout-empty">
        <h2>Nothing to check out</h2>
        <p>Your cart is empty.</p>
        <Link to="/products" className="checkout-btn">
          Start shopping
        </Link>
      </section>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-success");
  };

  return (
    <section>
      <h2 className="checkout-title">Checkout</h2>

      <form className="checkout-layout" onSubmit={handleSubmit}>
        <div className="checkout-form">
          <h3>Delivery details</h3>

          <label>
            Full name
            <input type="text" required placeholder="Your full name" />
          </label>

          <label>
            Phone number
            <input type="tel" required placeholder="07XX XXX XXX" />
          </label>

          <label>
            Email (optional)
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Town / City
            <input type="text" required placeholder="Where should we deliver?" />
          </label>

          <label>
            Delivery address
            <textarea
              required
              rows="3"
              placeholder="Street, building, landmark"
            />
          </label>

          <h3>Payment method</h3>

          <div className="payment-options">
            <label className={payment === "mobile" ? "pay selected" : "pay"}>
              <input
                type="radio"
                name="payment"
                checked={payment === "mobile"}
                onChange={() => setPayment("mobile")}
              />
              Mobile Money (M-Pesa)
            </label>

            <label className={payment === "card" ? "pay selected" : "pay"}>
              <input
                type="radio"
                name="payment"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              Card
            </label>

            <label className={payment === "cod" ? "pay selected" : "pay"}>
              <input
                type="radio"
                name="payment"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Pay on delivery
            </label>
          </div>
        </div>

        <div className="checkout-summary">
          <h3>Your order</h3>

          {items.map((item) => (
            <div className="checkout-line" key={item.id}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>KES {(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}

          <div className="checkout-line total">
            <span>Total ({totalItems} items)</span>
            <span>KES {totalPrice.toLocaleString()}</span>
          </div>

          <button type="submit" className="checkout-btn">
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
}

export default Checkout;