import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    if (nav) {
      // Lock the scroll when `nav` is true
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when `nav` is falser
      document.body.style.overflow = "auto";
    }
  }, [nav]);
  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 md:px-6 top-0 z-20 bg-black/0">
        {/* leftside */}
        <div className="m-3">
          {/* logos and name */}
          <div className="flex items-center gap-1 ">
            {/* nav items */}
            <img
              alt="logo"
              src={require("../assests/images/logofinal.png")}
              className="w-[70px] h-[70px]"
            />
            <div className="text-[#832729] text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Trinetra Jewellers
            </div>
          </div>
        </div>

        <div>
          <ul className="h-full gap-2 lg:gap-6   hidden md:flex md:items-center ">
            {navLinks.map(({ id, name, link }) => (
              <li
                onClick={() => console.log(`navigate to ${link}`)}
                key={id}
                className={
                  name == "Home"
                    ? "uppercase font-semibold cursor-pointer hover:shadow-lg duration-300 text-[#832729] md:m-1 text-sm lg:text-base   "
                    : "uppercase cursor-pointer hover:shadow-lg duration-300 text-black/70 p-1 lg:m-1 lg:mx-2 text-sm lg:text-base  "
                }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/* right side */}
        <div>
          <div className="hidden md:flex gap-4 lg:gap-8 text-black/80 hover:text-black ">
            <div>
              <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer hover hover:shadow-md" />
            </div>
            <UserIcon className="w-6 h-6" />
            <ShoppingCartIcon className="w-6 h-6" />
          </div>
        </div>
        {/* mobile menu */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden w-7 h-7   cursor-pointer mr-3 sm:mr-5 text-black/80"
        >
          <Bars3Icon />
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "overflow-x-hidden overflow-y-hidden absolute top-0 right-0 h-[100vh] ease-in duration-300 w-[80vw]  bg-white z-20"
              : "hidden"
            // : "overflow-x-hidden absolute top-0 right-[-30vh] h-screen ease-out duration-500  overflow-y-hidden "
          }
        >
          <div className="flex justify-between mx-6 mt-6 mb-6 ">
            <img
              className="w-[90px] h-[90px] object-cover  mt-5"
              alt="logo"
              src={require("../assests/images/logofinal.png")}
            />
            <XMarkIcon
              onClick={() => setNav(false)}
              className="w-9 h-9  hover:bg-black/90 text-black/40
                     rounded-full cursor-pointer mt-7"
            />
          </div>
          <div className="mt-[80px] justify-center items-center flex  gap-12 text-black/80 hover:text-black border-y-2 py-2 ">
            <div>
              <MagnifyingGlassIcon className="w-8 h-8 cursor-pointer hover hover:shadow-lg" />
            </div>
            <UserIcon className="w-8 h-8" />
            <ShoppingCartIcon className="w-8 h-8" />
          </div>

          {/*x <div className="w-full flex justify-center mt-9  ">
            <UserIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
            <HeartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
            <ShoppingCartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
          </div> */}
          <ul className=" flex flex-col mx-auto mt-12 ml-5 text-start ">
            {navLinks.map(({ id, name, link }) => (
              <li
                onClick={() => console.log(`navigate to ${link}`)}
                key={id}
                className={
                  name === "Home"
                    ? "uppercase text-xl  cursor-pointer hover:shadow-lg  duration-300 rounded-lg text-[#832729] my-9  px-3 "
                    : "uppercase text-xl  cursor-pointer hover:shadow-lg  duration-300 rounded-lg text-black/60 my-9 px-3 "
                }

                // className={
                //   name == "Home"
                //     ? "uppercase font-semibold cursor-pointer hover:shadow-lg duration-300 text-[#832729] md:m-1 md:text-xs "
                //     : "uppercase cursor-pointer hover:shadow-lg duration-300 text-black/80 p-1 lg:m-1 lg:mx-2 md:text-xs"
                // }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

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
