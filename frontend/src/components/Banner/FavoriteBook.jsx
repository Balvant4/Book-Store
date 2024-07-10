import React, { useEffect, useState } from "react";
import BookCard from "../BookCards/BookCard";

//fetchbook from the server
const fetchBooks = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/books/allbooks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return null;
  }
};

const FavoriteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      if (data && Array.isArray(data.data)) {
        setBooks(data.data);
      } else {
        console.error("Books data is not an array:", data?.data);
      }
    };
    getBooks();
  }, []);

  return (
    <div>
      <BookCard books={books} headline="Best Seller Book" />
    </div>
  );
};

export default FavoriteBook;
