import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
const Logo = () => {
  return (
    <div className="logo">
      <Tilt className=" Tilt">
        <div>
          <img alt="brain" className="logo-img" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
