import express from "express";
import Word from "../models/Word.js";

const router = express.Router();

// Route to get all words
router.get("/", async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

export default router;
