import Score from "../models/Score.js";

export const saveScore = async (req, res) => {
  const { username, score } = req.body;

  if (score > 0) {
    try {
      const newScore = new Score({ username, score });
      await newScore.save();
      res.status(201).json(newScore);
    } catch (error) {
      res.status(500).json({ error: "Failed to save score" });
    }
  } else {
    res.status(400).json({ message: "Score must be greater than zero" });
  }
};

export const getTopScores = async (req, res) => {
  try {
    const topScores = await Score.find().sort({ score: -1 }).limit(10);
    res.status(200).json(topScores);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top scores" });
  }
};
