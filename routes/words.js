import express from "express";
import { getWords, getRandomWord } from "../controller/word.js";
const router = express.Router();

// Route to get all words
router.get("/words", getWords);

router.get("/random-word", getRandomWord);

export default router;
