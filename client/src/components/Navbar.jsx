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
    <div className="w-full flex justify-between  top-0 z-30  bg-black/10">
      {/* left part */}
      <h1
        className="text-[#ce181b] text-center font-bold shadow-lg rounded-md z-10
                       text-5xl lg:text-6xl  flex flex-col m-3"
      >
        GAHANA
      </h1>
      {/* <div className="md:flex hidden ">
        <MagnifyingGlassIcon
          size={30}
          className="w-9 h-9 m-3 hover:bg-black/30 rounded-full cursor-pointer "
        />
        <h1
          className="text-[#ce181b] text-center font-bold shadow-lg rounded-md z-10
                       text-5xl lg:text-6xl  flex flex-col m-3"
        >
          GAHANA
        </h1>
      </div> */}

      {/* midpart */}
      <div>
        <ul className="h-full pb-2   hidden md:flex md:items-end ">
          {navLinks.map(({ id, name, link }) => (
            <li
              onClick={() => console.log(`navigate to ${link}`)}
              key={id}
              className={
                name == "Home"
                  ? "uppercase font-semibold cursor-pointer hover:shadow-lg duration-300 text-[#832729] m-1 mx-2 "
                  : "uppercase cursor-pointer hover:shadow-lg duration-300 text-black/70 m-1 mx-2 "
              }
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      {/* right part */}
      <div className="hidden md:flex m-2 p-3">
        <MagnifyingGlassIcon
          size={30}
          className="w-6 h-6 m-2 hover:bg-black/30 rounded-full cursor-pointer "
        />
        <UserIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <HeartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <ShoppingCartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
      </div>

      {/* mobile menu */}
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden w-10 h-10 m-6 cursor-pointer"
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
        <ul className=" flex flex-col mx-auto mt-3 text-center">
          {navLinks.map(({ id, name, link }) => (
            <li
              onClick={() => console.log(`navigate to ${link}`)}
              key={id}
              className="uppercase text-sm  cursor-pointer hover:shadow-lg 
                         duration-300 rounded-lg text-[#832729] my-2 p-3
                         focus:bg-blue-700"
            >
              {name}
            </li>
          ))}
        </ul>
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
