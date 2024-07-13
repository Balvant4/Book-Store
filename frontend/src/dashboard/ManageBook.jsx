import React, { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  const fetchBooks = () => {
    axios("http://localhost:5000/api/books/allbooks")
      .then((res) => setAllBooks(res.data.data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/books/delete/${id}`
      );
      if (response.status === 200) {
        alert("Data deleted successfully");
        fetchBooks(); // Re-fetch the books after successful deletion
      } else {
        console.log("Unexpected response", response);
      }
    } catch (error) {
      console.error("Data not deleted", error);
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-2xl font-bold">Manage Your Books</h2>
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={book._id}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.autherName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>${book.pages}</Table.Cell>
              <Table.Cell className=" flex items-center gap-6">
                <Link
                  to={`/admin/dashboard/edit-book/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                >
                  Edit
                </Link>
                <Button
                  onClick={() => handleDelete(book._id)}
                  className=" bg-red-600 rounded"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBook;
