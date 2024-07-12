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

    pages,
  });

  // Find the created book and exclude the bookPdfUrl field
  const createdBook = await Book.findById(book._id);

  if (!createdBook) {
    throw new ApiError(500, "Something went wrong while creating the book");
  }

  // Return a success response
  return res
    .status(201)
    .json(new ApiResponse(201, createdBook, "Book created successfully"));
});

// get all books from the database
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  return res
    .status(200)
    .json(new ApiResponse(200, books, "Books fetched successfully"));
});

// update book
const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    bookTitle,
    autherName,
    imageUrl,
    category,
    bookDescription,
    bookPdfUrl,

    pages,
  } = req.body;

  //validation the input data

  if (
    [
      bookTitle,
      autherName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,

      pages,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All filds are required");
  }

  // update book
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    {
      bookTitle,
      autherName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,

      pages,
    },
    { timestamps: true }
  );

  if (!updatedBook) {
    throw new ApiError(404, "Book not found");
  }

  //return a success response

  return res
    .status(200)
    .json(new ApiResponse(404, "Book updated successfully"));
});

// delete book
const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;

  //Find the book by id and delete
  const deletedBook = await Book.findByIdAndDelete(id);

  if (!deletedBook) {
    throw new ApiError(404, "Book not found");
  }

  // return a success response
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Book deleted successfully"));
});

// get one book
const getOneBook = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Find the book by ID
  const findOneBook = await Book.findById(id);

  // If the book is not found, throw an error
  if (!findOneBook) {
    throw new ApiError(404, "Book not found");
  }

  // Return a success response with the found book data
  return res
    .status(200)
    .json(new ApiResponse(200, "Book found successfully", findOneBook));
});

// find data by category
const getBooksByCategory = asyncHandler(async (req, res) => {
  const { category } = req.params;

  // Find books by category
  const books = await Book.find({ category });

  if (books.length === 0) {
    throw new ApiError(404, `No books found in category '${category}'`);
  }

  // Return a success response
  return res
    .status(200)
    .json(new ApiResponse(200, books, `Books in category '${category}'`));
});
export {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
  getBooksByCategory,
  getOneBook,
};
