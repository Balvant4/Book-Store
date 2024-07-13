import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Textarea, Label, Select, TextInput } from "flowbite-react";
import axios from "axios";
import { baseUrl, bookCategories } from "../utils/dashboard/categories";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bookTitle: "",
    autherName: "",
    imageUrl: "",
    category: bookCategories[0],
    bookDescription: "",
    bookPdfUrl: "",
    pages: "",
  });

  // Fetch book details when the component mounts
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/books/onebooks/${id}`);
        setFormData(response.data.data); // Populate the form with fetched data
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    const {
      bookTitle,
      autherName,
      imageUrl,
      pages,
      bookDescription,
      bookPdfUrl,
      category,
    } = formData;

    const bookObj = {
      bookTitle,
      autherName,
      imageUrl,
      category,
      bookDescription,
      pages,
      bookPdfUrl,
    };

    try {
      const response = await axios.put(
        `${baseUrl}/books/update/${id}`,
        bookObj
      );
      if (response.status === 200) {
        alert("Data Edited Successfully");
        navigate("/admin/dashboard/manage");
      } else {
        console.log("Unexpected response", response);
      }
    } catch (error) {
      console.error("Error editing book", error);
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit the book</h2>
      <form
        onSubmit={handleEdit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Name" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              value={formData.bookTitle}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="autherName" value="Author Name" />
            </div>
            <TextInput
              id="autherName"
              name="autherName"
              type="text"
              placeholder="Author Name"
              required
              value={formData.autherName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Book Image URL"
              required
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="pages" value="Pages" />
            </div>
            <TextInput
              id="pages"
              name="pages"
              type="number"
              placeholder="Pages"
              required
              value={formData.pages}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              name="bookDescription"
              placeholder="Write your book description.."
              required
              rows={4}
              value={formData.bookDescription}
              onChange={handleChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputstate" value="Book Categories" />
            </div>
            <Select
              id="inputstate"
              name="category"
              className="w-full rounded"
              value={formData.category}
              onChange={handleChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Book PDF URL"
            required
            value={formData.bookPdfUrl}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="mt-5 bg-[#0E7490]">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
