import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] relative">
      {/* overlay */}

      <div className="bg-black/30 absolute top-0 left-0 w-full h-full">
        {/* content for overlay */}
        <div className="absolute  left-0  top-[50%] z-10 text-5xl sm:text-6xl md:text-7xl">
          Content for the Overlay{" "}
        </div>
      </div>

      {/* image */}
      <img
        className="w-full h-full object-cover"
        src="https://i0.wp.com/www.blog1.trymintly.com/wp-content/uploads/2022/05/1647819891_new-project-22.jpeg?w=900&ssl=1"
        alt="hero img"
      />
    </div>
  );
};

export default Hero;
