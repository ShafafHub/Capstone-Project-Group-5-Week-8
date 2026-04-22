import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
      default: [],
    },

    location: String,
    distance: String,
    dates: String,
    price: String,
    rating: String,
    favorite: Boolean,
    badge: String,
  },
  { timestamps: true }
);

export default mongoose.model("Listing", listingSchema);
