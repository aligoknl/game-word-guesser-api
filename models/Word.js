import mongoose from "mongoose";

const WordsSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Word", WordsSchema);
