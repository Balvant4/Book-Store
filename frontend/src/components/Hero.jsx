import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div className="hero md:py-20 bg-base-200 md:px-20">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="banner.jpg"
              className="w-full sm:w-2/3 md:w-full lg:max-w-sm rounded-lg shadow-2xl mb-6 lg:mb-0"
            />
            <div>
              <h1
                className="md:text-4xl text-3xl font-bold"
                style={{ lineHeight: "1.2" }}
              >
                Hello, welcomes here to learn something new everday!!!
              </h1>
              <p className="py-6 pr-20">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary mt-4">Secondary</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
