// backend/server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Placeholder route
testimonials = [
  { name: "Client A", feedback: "Great work!" },
  { name: "Client B", feedback: "Very professional." },
];

app.get("/", (req, res) => {
  res.send("Volt Creative Lab API is running");
});

// Contact form route (placeholder)
app.post("/api/contact", (req, res) => {
  // Here you would save to MongoDB
  res.status(200).json({ message: "Contact form received", data: req.body });
});

// Example: Get testimonials
app.get("/api/testimonials", (req, res) => {
  res.json(testimonials);
});

// MongoDB connection (placeholder URI)
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/voltcreativelab";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
