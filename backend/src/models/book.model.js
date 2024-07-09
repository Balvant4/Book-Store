import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
      trim: true,
    },
    autherName: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bookDescription: {
      type: String,
    },
    bookPdfUrl: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
