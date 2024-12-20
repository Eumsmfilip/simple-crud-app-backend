const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const router = require("./routes/product.route.js");
const app = express();
require("dotenv").config();

const dbConnect = process.env.DB_CONNECT;
const port = process.env.PORT;

app.use(express.json());

app.use("/api/products", router);

mongoose
  .connect(
    dbConnect
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
