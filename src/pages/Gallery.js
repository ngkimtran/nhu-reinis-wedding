import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import intro_pic from "../images/intro_pic.jpg";
import kick_test_2 from "../images/kick_test_2.jpg";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Header />
      <div className="gallery-container">
        <img className="gallery-img" src={intro_pic} alt="" />
        <img className="gallery-img" src={kick_test_2} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
