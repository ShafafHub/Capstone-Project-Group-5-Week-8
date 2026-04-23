import mongoose from "mongoose";
import Listing from "./models/Listing.js";

// فقط عکس‌های خانه (پایدار)
const houseImages = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
  "https://images.unsplash.com/photo-1448630360428-65456885c650",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
];

// برای هر listing چند عکس متفاوت بگیر
const getImages = (i) => [
  houseImages[i % houseImages.length],
  houseImages[(i + 1) % houseImages.length],
  houseImages[(i + 2) % houseImages.length],
  houseImages[(i + 3) % houseImages.length],
  houseImages[(i + 4) % houseImages.length],
];

const cities = [
  "Paris",
  "London",
  "New York",
  "Tokyo",
  "Dubai",
  "Berlin",
  "Rome",
  "Madrid",
  "Toronto",
  "Istanbul",
  "Sydney",
  "Amsterdam",
  "Lisbon",
  "Vienna",
  "Prague",
];

const categoriesList = [
  "Caves",
  "Cabins",
  "Amazing views",
  "Top cities",
  "Luxe",
  "Containers",
  "Trending",
  "New",
  "Historical homes",
  "Earth homes",
  "Boats",
  "Beachfront",
  "OMG!",
  "Tiny homes",
  "National parks",
  "Lake",
];

const data = Array.from({ length: 130 }, (_, i) => ({
  images: getImages(i),

  category: categoriesList[i % categoriesList.length],
  location: cities[i % cities.length],
  distance: `${Math.floor(Math.random() * 9000)} km away`,
  dates: "Apr. 19 – 24",
  price: `$${100 + Math.floor(Math.random() * 900)} CAD`,
  rating: (4 + Math.random()).toFixed(2),
  favorite: Math.random() > 0.5,
  badge: Math.random() > 0.7 ? "Guest favourite" : "",
}));

async function seed() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");

    console.log("MongoDB connected");

    await Listing.deleteMany();
    await Listing.insertMany(data);

    console.log("130 listings inserted successfully");

    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

seed();
