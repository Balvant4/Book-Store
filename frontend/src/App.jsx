import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";

const App = () => {
  return (
    <div className=" h-screen w-full bg-white">
      <Navbar />
      <Hero />
      <Freebook />
      <Footer />
    </div>
  );
};

export default App;
