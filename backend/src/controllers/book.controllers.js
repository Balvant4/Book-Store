import { asyncHandler } from "../utils/asyncHandler.js";
import { Book } from "../models/book.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createBook = asyncHandler(async (req, res) => {
  // Destructure book details from the request body
  const {
    bookTitle,
    autherName,
    imageUrl,
    category,
    bookDescription,
    bookPdfUrl,
    publishedDate,
    pages,
  } = req.body;

  // Check if any field is empty or contains only whitespace
  if (
    [
      bookTitle,
      autherName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
      publishedDate,
      pages,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required and must be strings");
  }

  // Check if a book with the same title or author already exists
  const existedBook = await Book.findOne({
    $or: [{ autherName }, { bookTitle }],
  });

  if (existedBook) {
    throw new ApiError(
      409,
      "Book with the same author name or book title already exists"
    );
  }

  // Create a new book entry in the database
  const book = await Book.create({
    bookTitle,
    autherName,
    imageUrl,
    category,
    bookDescription,
    bookPdfUrl,
    publishedDate, // Corrected to use the actual publishedDate value
    pages,
  });

  // Find the created book and exclude the bookPdfUrl field
  const createdBook = await Book.findById(book._id).select("-bookPdfUrl");

  if (!createdBook) {
    throw new ApiError(500, "Something went wrong while creating the book");
  }

  // Return a success response
  return res
    .status(201)
    .json(new ApiResponse(201, createdBook, "Book created successfully"));
});

export { createBook };
