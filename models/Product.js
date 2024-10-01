import mongoose from "mongoose";

// Define the vendor schema
const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  vendorPrice: {
    type: Number,
    required: true,
  },
});

// Define the product schema
const productSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now, // Takes the current date
  },
  productName: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  vendorDetails: [vendorSchema], // Array of vendor details
  L1Price: {
    type: Number,
    required: true,
  },
  GST: {
    type: Number,
    required: true,
  },
  grossValue: {
    type: Number,
    required: true,
  },
  usdPrice: {
    type: Number,
    required: true,
  },
  remarks: {
    type: String,
    required: false,
  },
});

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
