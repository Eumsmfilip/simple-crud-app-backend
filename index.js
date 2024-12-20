const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const router = require("./routes/product.route.js");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/products", router);

mongoose
  .connect(
    "mongodb+srv://admin:45453429filipe@bookenddb.vtsab.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BookendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Methods

// get all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json({ products });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// get product by id
// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     if(!product){
//       res.status(500).json({message: "Product not found in the database."});
//     }
//     res.status(200).json({ product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// post product
// app.post("/api/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//     console.log(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// update product
// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found." });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// delete a product
// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found." });
//     }
//     res.status(200).json({ message: "Product deleted from database." });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
