import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import listingRoutes from "../routes/listingRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/listings", listingRoutes);

// connect DB
mongoose
  .connect("mongodb://127.0.0.1:27017/airbnb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
