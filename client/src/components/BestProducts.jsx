import React from "react";
import first from "../assests/images/heroSection/1.jpg";
const BestProducts = () => {
  return (
    <div className="max-w-[1400px] max-h-[25%] mx-auto text-3xl  my-10">
      {/* top headers */}
      <div className="mx-auto text-center">
        {/* header */}
        <div className=" text-[#832729]  sm:text-4xl md:text-5xl md:p-4 my-2 md:my-4">
          Best Product
        </div>
        <div className="p-3 text-xl text-black/40   md:text-3xl sm:my-3 md:my-5">
          {" "}
          Customers satisfaction has been our greatest policy
        </div>
        {/* border */}
        <div className="border-t-[2px] border-[#832729] w-full" />
      </div>

      <div className="grid my-6 w-[80%] mx-auto relative sm:grid-cols-2 sm:max-w-[1400px] sm-my-5 md:my-10">
        {/* first photo */}
        <div className="">
          <img
            alt="best photo"
            src={first}
            className="w-full h-full  mx-auto  object-cover"
          />
        </div>
        {/* overlay */}

        <div className="w-full h-full mx-auto text-[#CB8161] bg-yellow-500 relative">
          <div classname="text-[12px]">WE ARE TO MAKE YOU HAPPY</div>
          <div className="text-3xl">Elevate Your Style</div>
          <div className="text-3xl "> EMBRACE BRILLIANCE</div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
