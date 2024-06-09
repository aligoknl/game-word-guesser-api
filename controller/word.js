import axios from "axios";
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

export const validateWord = async (req, res) => {
  const { word } = req.body;
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (response.data && response.data.length > 0) {
      res.status(200).json({ valid: true });
    } else {
      res.status(200).json({ valid: false });
    }
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.title === "No Definitions Found"
    ) {
      res.status(200).json({ valid: false });
    } else {
      res.status(500).json({ error: "Failed to validate word" });
    }
  }
};
