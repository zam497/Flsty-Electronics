import { Link } from "react-router-dom";
import {
  FiHeadphones,
  FiBatteryCharging,
  FiWatch,
  FiZap,
  FiSpeaker,
  FiPackage,
} from "react-icons/fi";
import "./Categories.css";

const categories = [
  { name: "Earbuds", icon: <FiHeadphones /> },
  { name: "Power Banks", icon: <FiBatteryCharging /> },
  { name: "Smartwatches", icon: <FiWatch /> },
  { name: "Chargers", icon: <FiZap /> },
  { name: "Speakers", icon: <FiSpeaker /> },
  { name: "Accessories", icon: <FiPackage /> },
];

function Categories() {
  return (
    <section className="categories-section">
      <h3>Shop by Category</h3>

      <div className="category-grid">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products?category=${encodeURIComponent(cat.name)}`}
            className="category-card"
          >
            <span className="category-icon">{cat.icon}</span>
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;