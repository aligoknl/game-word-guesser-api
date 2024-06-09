import express from "express";
import { getWords, getRandomWord, validateWord } from "../controller/word.js";
const router = express.Router();

// Route to get all words
router.get("/all-words", getWords);

// Route to get a random word
router.get("/random-word", getRandomWord);

// Router to validate the word is valid
router.post("/validate", validateWord);

export default router;
