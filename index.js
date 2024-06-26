import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import wordsRoute from "./routes/words.js";
import scoresRoute from "./routes/scores.js";
import words from "./utils/wordList.js";
import Word from "./models/Word.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

const insertWords = async () => {
  const wordDocuments = words.map((word) => ({ word }));
  try {
    await Word.deleteMany({});
    await Word.insertMany(wordDocuments);
    console.log("Words inserted");
  } catch (error) {
    console.error("Error inserting words", error);
  }
};

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/words", wordsRoute);
app.use("/api/scores", scoresRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8085, async () => {
  await connect();
  await insertWords(); // Insert words when the server starts
  console.log("Server running");
});
