import Word from "../models/Word.js";

export const getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export const getRandomWord = async (req, res) => {
  try {
    const count = await Word.countDocuments();
    const random = Math.floor(Math.random() * count);
    const word = await Word.findOne().skip(random);
    res.status(200).json(word);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch a random word" });
  }
};
