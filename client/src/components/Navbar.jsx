import React from "react";
import {
  ChartBarIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-[100vw] flex justify-between ">
      {/* left part */}
      <div>
        <MagnifyingGlassIcon size={30} className="w-9 h-9 m-3" />
      </div>

      {/* midpart */}
      <div>
        <h1 className="text-[#832729] text-center font-bold text-5xl lg:text-6xl flex flex-col">
          GAHANA
        </h1>
        <ul className="flex">
          {navLinks.map(({ id, name, link }) => (
            <li
              onClick={() => console.log(`navigate to ${link}`)}
              key={id}
              className="uppercase cursor-pointer hover:shadow-lg duration-300 text-[#832729] m-1 p-2"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      {/* right part */}
      <div className="flex m-2 p-3">
        <UserIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <HeartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
        <ShoppingCartIcon className="w-6 h-6 m-2 hover:bg-black/30 cursor-pointer" />
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
    id: 1,
    name: "Product",
    link: "/",
  },
  {
    id: 1,
    name: "our customers",
    link: "/",
  },
];
