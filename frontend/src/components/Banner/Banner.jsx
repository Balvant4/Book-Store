import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#a5f3fc] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <BannerCard />
          <div>
            <h1 className="text-5xl font-bold md:w-8/12">
              Buy and sell your books for the best prices
            </h1>
            <p className="py-6 md:w-8/12 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <input
              type="search"
              placeholder="Search a book"
              name="search"
              id="search"
              className="px-2 py-2 outline-none rounded-s-sm"
            />
            <button className=" bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in divide-purple-200 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
