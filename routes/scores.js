import express from "express";
import { saveScore, getTopScores } from "../controller/score.js";

const router = express.Router();

// Route to save score
router.post("/save-score", saveScore);

// Route to get top scores
router.get("/top-scores", getTopScores);

export default router;
