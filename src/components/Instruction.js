import React from "react";
import test from "../images/test.png";

const Instruction = () => {
  return (
    <div className="instruction-container">
      <div className="instruction-text">
        <p className="text-medium">
          Click a category above to see the beautiful pictures!
        </p>
      </div>
      <div className="collage-container">
        <img className="collage" src={test} alt="" />
        <img className="collage" src={test} alt="" />
      </div>
    </div>
  );
};

export default Instruction;
