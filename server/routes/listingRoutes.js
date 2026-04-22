import express from "express";
import Listing from "../models/Listing.js";

const router = express.Router();

// GET all listings
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
