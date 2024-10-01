import mongoose from "mongoose";
import connectDB from "./config/db.js"; // Adjust this path as necessary
import Product from "./models/Product.js"; // Adjust this path as necessary

const seedData = async () => {
  // Connect to the database
  await connectDB();

  // Dummy data with remarks
  const products = [
    {
      productName: "Product A",
      specification: "Specification for Product A",
      customerName: "Customer 1",
      vendorDetails: [
        { vendorName: "Vendor 1", vendorPrice: 100 },
        { vendorName: "Vendor 2", vendorPrice: 120 },
      ],
      L1Price: 90,
      GST: 18,
      grossValue: 106.2,
      usdPrice: 12,
      remarks: "Initial launch with promotional pricing.", // Remarks for Product A
      quantity: 40, // Quantity for Product D
    },
    {
      productName: "Product B",
      specification: "Specification for Product B",
      customerName: "Customer 2",
      vendorDetails: [
        { vendorName: "Vendor 3", vendorPrice: 200 },
        { vendorName: "Vendor 4", vendorPrice: 210 },
      ],
      L1Price: 180,
      GST: 36,
      grossValue: 216.6,
      usdPrice: 24,
      remarks: "Good sales potential in Q3.", // Remarks for Product B
      quantity: 40, // Quantity for Product D
    },
    {
      productName: "Product C",
      specification: "Specification for Product C",
      customerName: "Customer 3",
      vendorDetails: [
        { vendorName: "Vendor 5", vendorPrice: 300 },
        { vendorName: "Vendor 6", vendorPrice: 310 },
      ],
      L1Price: 270,
      GST: 54,
      grossValue: 324.6,
      usdPrice: 36,
      remarks: "Requires further market research.", // Remarks for Product C
      quantity: 40, // Quantity for Product D
    },
  ];

  // Clear existing products
  await Product.deleteMany({});

  // Insert the data into the database
  try {
    await Product.insertMany(products);
    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Run the seed function
seedData();
