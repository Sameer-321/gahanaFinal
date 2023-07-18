import React from "react";
import second from "../assests/images/heroSection/2.jpg";
import third from "../assests/images/heroSection/3.jpg";
import fourth from "../assests/images/heroSection/4.jpg";
import fifth from "../assests/images/heroSection/5.jpg";
import seven from "../assests/images/heroSection/7.jpg";
const TopSeller = () => {
  const images = [
    {
      id: 1,
      alt: "a",
      style:
        "relative w-[300px] h-[150px] sm:w-full sm:h-full mx-auto md:row-span-2 md:col-span-2",
      img: second,
    },
    {
      id: 2,
      alt: "b",
      style:
        "relative w-[300px] h-[150px] sm:w-full sm:h-full mx-auto md:col-span-2 ",
      img: third,
    },
    {
      id: 3,
      alt: "c",
      style:
        "relative w-[300px] h-[150px] sm:w-full sm:h-full mx-auto md:row-span-2 md:col-span-2",
      img: fourth,
    },
    {
      id: 4,
      alt: "d",
      style:
        "relative w-[300px] h-[150px] sm:w-full sm:h-full mx-auto md:col-span-1",
      img: fifth,
    },
    {
      id: 5,
      alt: "e",
      style:
        "relative w-[300px] h-[150px] sm:w-full sm:h-full mx-auto sm:col-span-2 md:col-span-1",
      img: seven,
    },
  ];
  return (
    <div className="w-full px-4 mx-auto my-10 text-3xl  ">
      {/* top bar */}
      <div className="text-center">
        {/* header */}
        <h1 className="text-[#832729] font-semiboldsm:text-4xl md:text-5xl md:p-4 my-2 md:my-4 ">
          Top Seller
        </h1>

        <p className="p-3 text-xl  md:text-3xl">
          Check out the products that our customers love the most
        </p>
        {/* border */}
      </div>
      <div className="border-t-[1px] border-red-500 my-3" />

      {/* grid images */}
      {/* className="grid min-w-[200px] min-h-[100px] sm:max-h-[600px] sm:max-w-[1400px] 
                       gap-4 p-6 mx-auto my-10 sm:grid-cols-2 sm:grid-rows-3 
                       md:grid-rows-2 md:grid-cols-6 " */}
      <div
        className="grid min-w-[200px] min-h-[100px] sm:max-h-[600px] sm:max-w-[1400px] 
                       gap-4 smp-6 mx-auto my-10 sm:grid-cols-2 sm:grid-rows-3 
                       md:grid-rows-2 md:grid-cols-6 "
      >
        {images.map(({ id, alt, style, img }) => (
          <div className={style}>
            <img
              key={id}
              alt={alt}
              src={img}
              className=" w-[300px] h-[150px] mx-auto sm:w-full sm:h-full object-cover"
            />
            <div className=" w-[300px] h-[150px] sm:w-full sm:h-full absolute bg-black/30 top-0  index-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
