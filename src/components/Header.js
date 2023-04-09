import React from "react";
import Navbar from "./Navbar";
import divider from "../images/divider.png";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <img className="divider" src={divider} alt="" />
    </div>
  );
};

export default Header;
