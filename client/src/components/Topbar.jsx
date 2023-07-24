import { PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
} from "../assests/icons-svg/socialMedia";
const Topbar = () => {
  return (
    <div className="px-2 md:px-9 border-b-[1px] border-black/18">
      <div className="w-full flex  justify-between">
        {/* left */}
        <div className="flex justify-between items-center gap-2 lg:gap-3  md:py-2 text-black/75 hover:text-black cursor-pointer">
          <PhoneIcon className="w-5 h-5  " />
          <p className="">+977 9841965587/ 014356265</p>
        </div>

        {/* right */}
        <div className="flex items-center justify-between gap-8">
          <div className="cursor-pointer hover:bg-black/30 rounded-md">
            <TiktokIcon h="25" w="25 " />
          </div>
          <div className="cursor-pointer hover:bg-black/30 rounded-md">
            <InstagramIcon h="25" w="25 " />
          </div>
          <div className="cursor-pointer hover:bg-black/30 rounded-md">
            <FacebookIcon h="25" w="25 " />
          </div>

          {/* <YoutubeIcon /> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "SHOP",
    link: "/",
  },
  {
    id: 3,
    name: "Product",
    link: "/",
  },
  {
    id: 4,
    name: "our customers",
    link: "/",
  },
];
