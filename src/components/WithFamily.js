import React from "react";
import pic_1 from "../images/family/IMG_2302.JPG";
import pic_2 from "../images/family/IMG_2316.JPG";

const WithFamily = () => {
  return (
    <div className="picture-list-container">
      <div className="picture-list-grid">
        <img className="gallery-img" src={pic_1} alt="" />
        <img className="gallery-img" src={pic_2} alt="" />
      </div>
    </div>
  );
};

export default WithFamily;
