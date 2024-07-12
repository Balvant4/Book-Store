import { useState } from "react";
import axios from "axios";
import { Button, Textarea, Label, Select, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Programming",
    "Science",
    "Fantasy",
    "Horror",
    "Bibliography",
    "AutoBibliography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children-Book",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectBookCategories, setSelectBookCategories] = useState(
    bookCategories[0]
  );
  const [formData, setFormData] = useState({
    bookTitle: "",
    autherName: "",
    imageUrl: "",
    pages: "",
    bookDescription: "",
    bookPdfUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChandSelectValue = (event) => {
    setSelectBookCategories(event.target.value);
  };

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const {
      bookTitle,
      autherName,
      imageUrl,
      pages,
      bookDescription,
      bookPdfUrl,
    } = formData;

    const bookObj = {
      bookTitle,
      autherName,
      imageUrl,
      category: selectBookCategories,
      bookDescription,
      pages,
      bookPdfUrl,
    };

    console.log(bookObj);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/books/add",
        bookObj,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Book uploaded successfully");

      console.log("Book uploaded successfully:", response.data);

      // Reset the form after successful upload
      event.target.reset(); // Reset the form
      setFormData({
        // Reset state values
        bookTitle: "",
        autherName: "",
        imageUrl: "",
        pages: "",
        bookDescription: "",
        bookPdfUrl: "",
      });
      setSelectBookCategories(bookCategories[0]); // Reset category selection
    } catch (error) {
      console.error("Error uploading book:", error);
    }
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>
      <form
        onSubmit={handleBookSubmit}
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
              value={selectBookCategories}
              onChange={handleChandSelectValue}
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

export default UploadBook;
