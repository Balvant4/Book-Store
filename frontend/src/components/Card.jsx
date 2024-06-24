import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl p-6 max-w-screen overflow-x-hidden">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-5 py-3 cursor-pointer">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
