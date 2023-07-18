import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";

import first from "../assests/images/heroSection/1.jpg";
import second from "../assests/images/heroSection/2.jpg";
import third from "../assests/images/heroSection/3.jpg";
import fourth from "../assests/images/heroSection/4.jpg";
import fifth from "../assests/images/heroSection/5.jpg";
import seven from "../assests/images/heroSection/7.jpg";

const ShopByCategory = () => {
  const list = [
    {
      id: 1,
      src: first,
      name: "Gold Coins",
      ancor: "Explore",
    },
    {
      id: 2,
      src: second,
      name: "Earrings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: third,
      name: "Pendants",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fourth,
      name: "Finger Rings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fifth,
      name: "Mangal Sutra",
      ancor: "Explore",
    },
    {
      id: 1,
      src: seven,
      name: "Neckware",
      ancor: "Explore",
    },
    {
      id: 1,
      src: third,
      name: "Neckware",
      ancor: "Explore",
    },
  ];
  return (
    <div className="w-max-[1400px] my-10">
      {/* top headers */}
      <div className="mx-auto text-center">
        {/* header */}
        <div className=" text-[#832729] font-semibold sm:text-4xl md:text-5xl md:p-4 my-2 md:my-4">
          Shop By Category
        </div>
        <div className="p-3 text-xl  md:text-3xl sm:my-3 md:my-5">
          {" "}
          Browse through your favorite categories. We've got them all!
        </div>
        {/* border */}
        <div className="border-t-[2px] border-[#832729] w-full" />
      </div>
      {/* products grid */}
      <div className=" grid grid-cols-2 gap-3 sm:gap-5 md:gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-7 xl:gap-7 mx-auto">
        {list.map(({ id, src, name }) => (
          <div
            key={id}
            className="w-full my-3 sm:my-4 md:my-5 px-2 sm:p-3 md:p-4"
          >
            {/* image */}
            <img alt={name} src={src} className="w-full object-cover" />
            {/* label for img products */}
            <div className="w-full  flex flex-col justify-center items-start bg-black/5 ">
              <h3 className="pt-2 text-center text-[#832729] text-lg sm:text-2xl  font-semibold">
                {name}
              </h3>
              <div className="text-center w-full flex items-center justify-end">
                <div className="text-black/50">Detail</div>
                <ArrowLongRightIcon className="w-[50px] h-[40px] text-blue-600 pt-2" />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
