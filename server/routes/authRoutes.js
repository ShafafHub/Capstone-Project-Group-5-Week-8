import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Signup route working" });
});

router.post("/signin", (req, res) => {
  res.json({ message: "Signin route working" });
});

export default router;