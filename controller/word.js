import Word from "../models/Word.js";

export const getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
