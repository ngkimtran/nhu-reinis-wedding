import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import placeholder from "../images/placeholder.jpg";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Header />
      <div className="gallery-container">
        <img className="gallery-img" src={placeholder} alt="" />
        <img className="gallery-img" src={placeholder} alt="" />
        <img className="gallery-img" src={placeholder} alt="" />
        <img className="gallery-img" src={placeholder} alt="" />
        <img className="gallery-img" src={placeholder} alt="" />
        <img className="gallery-img" src={placeholder} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
