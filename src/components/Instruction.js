import React from "react";
import collage_1 from "../images/collage-1.png";
import collage_2 from "../images/collage-2.png";

const Instruction = () => {
  return (
    <div className="instruction-container">
      <div className="instruction-text"></div>
      <div className="collage-container">
        <img className="collage" src={collage_1} alt="" />
        <img className="collage" src={collage_2} alt="" />
      </div>
    </div>
  );
};

export default Instruction;
