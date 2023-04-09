import React from "react";
import placeholder from "../images/placeholder.jpg";
import Headline from "./Headline";

const Introduction = () => {
  return (
    <div className="intro-content">
      <img className="intro-img" src={placeholder} alt="" />
      <div className="intro-text">
        <Headline>
          You are invited to join us for our wedding celebration on
        </Headline>
        <p className="text-large">JUNE 23, 2023</p>
        <p className="text-medium">in Nha Trang, Vietnam</p>
      </div>
    </div>
  );
};

export default Introduction;
