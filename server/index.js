import express from "express";
import cors from "cors";
import fs from "fs";
import "dotenv/config";
import { connectDB } from "./db.js";
import { products } from "./data/products.js";

const app = express();
const PORT = process.env.PORT || 5000;
const ORDERS_FILE = new URL("./data/orders.txt", import.meta.url);

app.use(cors());
app.use(express.json());

function readOrders() {
  try {
    return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the Flysty server!" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.post("/api/orders", (req, res) => {
  const { customer = {}, items, payment } = req.body;

  const details = {
    name: String(customer.name || "").trim(),
    phone: String(customer.phone || "").trim(),
    email: String(customer.email || "").trim(),
    town: String(customer.town || "").trim(),
    address: String(customer.address || "").trim(),
  };

  if (!details.name || !details.phone || !details.town || !details.address) {
    return res.status(400).json({ message: "Missing delivery details" });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Your order has no items" });
  }

  const lines = [];

  for (const item of items) {
    const product = products.find((p) => p.id === Number(item.id));
    const qty = Math.floor(Number(item.qty));

    if (!product || !(qty >= 1)) {
      return res.status(400).json({ message: "Invalid item in order" });
    }

    lines.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty,
    });
  }

  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const orderNumber = "FL" + Math.floor(100000 + Math.random() * 900000);

  const order = {
    orderNumber,
    createdAt: new Date().toISOString(),
    customer: details,
    payment: String(payment || ""),
    items: lines,
    total,
    status: "New",
  };

  const orders = readOrders();
  orders.push(order);
  saveOrders(orders);

  res.status(201).json({ orderNumber, total });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});