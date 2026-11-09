import { FiTruck, FiShield, FiCreditCard, FiRefreshCw } from "react-icons/fi";
import "./Benefits.css";

const benefits = [
  {
    icon: <FiTruck />,
    title: "Fast Delivery",
    text: "Quick shipping to your door",
  },
  {
    icon: <FiShield />,
    title: "Genuine Warranty",
    text: "Original products guaranteed",
  },
  {
    icon: <FiCreditCard />,
    title: "Secure Payment",
    text: "Card and mobile money",
  },
  {
    icon: <FiRefreshCw />,
    title: "Easy Returns",
    text: "Hassle-free return policy",
  },
];

function Benefits() {
  return (
    <section className="benefits">
      {benefits.map((b) => (
        <div className="benefit" key={b.title}>
          <span className="benefit-icon">{b.icon}</span>
          <div>
            <h4>{b.title}</h4>
            <p>{b.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;