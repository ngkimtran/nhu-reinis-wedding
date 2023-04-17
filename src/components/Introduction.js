import React from "react";
import intro_pic from "../images/intro_pic_official.JPG";
import Headline from "./Headline";

const Introduction = () => {
  return (
    <div className="intro-content">
      <img className="intro-img" src={intro_pic} alt="" />
      <div className="intro-text">
        <Headline>
          You are invited to join us for our wedding celebration on
        </Headline>
        <p className="text-large">JUNE 25, 2023</p>
        <p className="text-medium">in Nha Trang, Vietnam</p>
      </div>
    </div>
  );
};

export default Introduction;
