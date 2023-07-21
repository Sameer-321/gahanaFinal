import React, { useState } from "react";
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

  return (
    <div className=" w-full">
      <div className="w-full flex justify-between items-center px-5 top-0 z-30 bg-black/10">
        {/* left part */}
        <div className="  flex items-center justify-start ">
          <img
            className="w-[50px] h-[50px] object-cover"
            alt="logo"
            src={require("../assests/images/logon.png")}
          />
          <h1
            className="text-[#832729]    z-10
                       text-xl md:text-xl lg:text-3xl   md:ml-4"
          >
            Trinetra Jewellers
          </h1>
        </div>

        {/* midpart */}
        <div>
          <ul className="h-full lg:gap-6   hidden md:flex md:items-center ">
            {navLinks.map(({ id, name, link }) => (
              <li
                onClick={() => console.log(`navigate to ${link}`)}
                key={id}
                className={
                  name == "Home"
                    ? "uppercase font-semibold cursor-pointer hover:shadow-lg duration-300 text-[#832729] md:m-1 md:text-xs "
                    : "uppercase cursor-pointer hover:shadow-lg duration-300 text-black/70 p-1 lg:m-1 lg:mx-2 md:text-xs"
                }
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/* right part */}
        <div className="hidden md:gap-3 md:flex  items-center justify-center md:text-sm lg:text-lg">
          {/* after login */}
          {/* <MagnifyingGlassIcon
          size={30}
          className="w-6 h-6 m-2 hover:bg-black/30 rounded-full cursor-pointer "
        />
        <UserIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <HeartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <ShoppingCartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" /> */}
          <MagnifyingGlassIcon
            size={30}
            className="w-6 h-6 lg:m-2 hover:bg-black/30 rounded-full cursor-pointer "
          />
          <button className="text-[#832729] font-semibold md:text-sm lg:text-lg ">
            Login
          </button>
          <button className=" rounded-md px-1 lg:px-3 lg:py-1 sm:m-3 bg-[#832729] md:text-center text-white">
            Sign Up
          </button>
        </div>

        {/* mobile menu */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden w-7 h-7   cursor-pointer"
        >
          <Bars3Icon />
        </div>

        {/* mobile menu */}
        <div
          onClick={() => setNav(!nav)}
          className={
            nav
              ? "overflow-y-hidden absolute top-0 left-0 ease-in duration-200 bg-black/30 w-[70vw] h-[100vh] "
              : "absolute top-0 left-[-100%] ease-in duration-500"
          }
        />

        <div
          className={
            nav
              ? "overflow-x-hidden overflow-y-hidden absolute top-0 right-0 h-[100vh] ease-in duration-300 w-[30vw] bg-white z-20"
              : "hidden"
            // : "overflow-x-hidden absolute top-0 right-[-30vh] h-screen ease-out duration-500  overflow-y-hidden "
          }
        >
          <XMarkIcon
            onClick={() => setNav(false)}
            className="w-6 h-6 absolute top-2  right-2 hover:bg-black/40
                     rounded-full cursor-pointer"
          />
          <a href="/" className="bg-gray-600 font-bold">
            Logo
          </a>
          <div className="w-full flex justify-center mt-9  ">
            <UserIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
            <HeartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
            <ShoppingCartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
          </div>
          <ul className=" flex flex-col mx-auto mt-3 text-start">
            {navLinks.map(({ id, name, link }) => (
              <li
                onClick={() => console.log(`navigate to ${link}`)}
                key={id}
                className="uppercase text-sm  cursor-pointer hover:shadow-lg
                         duration-300 rounded-lg text-[#832729] my-2 p-1
                         focus:bg-blue-700"
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
