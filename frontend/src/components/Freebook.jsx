import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookslist from "../../public/bookslist.json";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";

const Freebook = () => {
  const filterData = bookslist.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false, // Add this line to hide arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false, // Ensure arrows are hidden on larger screens as well
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false, // Ensure arrows are hidden on medium screens as well
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Ensure arrows are hidden on smaller screens as well
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
