import React from "react";
import intro_pic from "../images/intro_pic.jpg";
import kick_test_2 from "../images/kick_test_2.jpg";

const WithFriends = () => {
  return (
    <div className="picture-list-container">
      <div className="picture-list-grid">
        <img className="gallery-img" src={intro_pic} alt="" />
        <img className="gallery-img" src={kick_test_2} alt="" />
      </div>
    </div>
  );
};

export default WithFriends;
