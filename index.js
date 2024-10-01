import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import Product from "./models/Product.js";

import connectDB from "./config/db.js";

const port = 5001;

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to buyit");
});

// Route to fetch all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Route to fetch the top 20 products
// Route to fetch the top 20 products sorted by date
app.get("/products/top", async (req, res) => {
  try {
    // Fetch the top 20 products sorted by date (latest first)
    const topProducts = await Product.find().sort({ date: -1 }).limit(20);
    res.status(200).json(topProducts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Route to add a new product
app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body); // Create a new product instance from the request body
    await newProduct.save(); // Save the product to the database
    res.status(201).json(newProduct); // Respond with the created product
  } catch (error) {
    res.status(400).json({ message: "Error adding product", error });
  }
});

// Route to search products by productName
app.get("/products/search", async (req, res) => {
  const { productName } = req.query; // Get the productName from the query parameter

  if (!productName) {
    return res
      .status(400)
      .json({ message: "Please provide a product name to search." });
  }

  try {
    // Use a case-insensitive search for product names
    const products = await Product.find({
      productName: { $regex: productName, $options: "i" },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
