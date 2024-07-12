import React from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookCard = ({ books, headline }) => {
  return (
    <div className="py-10 font-sans">
      <h1 className="flex justify-center text-5xl pb-5">{headline}</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {books.map((data, index) => (
          <div
            key={index}
            className="card flex-col bg-base-100 w-96 shadow-xl m-4"
          >
            <figure>
              <div>
                <img className=" h-60 " src={data.imageUrl} alt="" />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.bookTitle}</h2>
              <p className="flex gap-1">
                Auther Name :{" "}
                <h1 className=" text-red-500 font-bold"> {data.autherName} </h1>
              </p>
              <h1>Price : {data.pages}</h1>
              <div className="card-actions justify-between">
                <div className=" px-[10px] py-2 rounded-full bg-red-700 cursor-pointer">
                  <h1 className=" uppercase flex flex-row items-center gap-2 text-white">
                    <FaCartShopping className=" text-2xl" />
                    add to cart
                  </h1>
                </div>
                <div className=" px-[10px] border-2 py-2 rounded-full border-[#573ba3] cursor-pointer">
                  <h1 className=" uppercase flex flex-row items-center gap-2 text-[#573ba3]">
                    <FaHeart className=" text-2xl" />
                    add to wish
                  </h1>
                </div>
              </div>
            </div>
            <div className=" flex justify-center pb-5">
              <Link to={``}>
                <button className=" text-white text-[1rem] px-3 rounded py-2 bg-[#4f7296]">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
