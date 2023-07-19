import React from "react";
import first from "../assests/images/heroSection/2.jpg";
const Hero = () => {
  const list = [{}, {}];

  return (
    <div className="w-[vw] h-[80vh] relative">
      {/* overlay */}

      <div className="bg-black/10 absolute top-0 left-0 w-full h-full">
        {/* content for overlay */}
        {/* <div className="absolute  left-0  top-[50%] z-10 text-5xl sm:text-6xl md:text-7xl">
          Content for the Overlay{" "}
        </div> */}
      </div>

      {/* image */}
      <img className="w-full h-full" src={first} alt="hero img" />
    </div>
  );
};

export default Hero;
