import { FaWhatsapp } from "react-icons/fa";

// Change this to your real WhatsApp number:
// country code + number, with no + sign, no spaces, no leading 0
const PHONE = "254700000000";
const MESSAGE = "Hello Flysty Electronics, I would like to ask about a product.";

function WhatsAppButton() {
  const link = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25d366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.25)",
        zIndex: 200,
      }}
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;