import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { items, removeFromCart, changeQty, totalItems, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <section className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add a product to see it here.</p>
        <Link to="/products" className="cart-btn">
          Start shopping
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2 className="cart-title">Shopping Cart ({totalItems})</h2>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p className="cart-item-feature">{item.feature}</p>
                <p className="cart-item-price">
                  KES {item.price.toLocaleString()}
                </p>
              </div>

              <div className="cart-qty">
                <button onClick={() => changeQty(item.id, -1)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => changeQty(item.id, 1)}>+</button>
              </div>

              <p className="cart-line-total">
                KES {(item.price * item.qty).toLocaleString()}
              </p>

              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
                aria-label="Remove"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="cart-summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="cart-summary-row total">
            <span>Total</span>
            <span>KES {totalPrice.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="cart-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;