import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-10 px-5">
      <div className="block lg:hidden">
        <FaBars size={24} />
      </div>
      <div>
        <h3 className="text-black font-bold text-2xl">Electronic Shop</h3>
      </div>

      <ul className="hidden lg:flex justify-between items-center gap-12 text-[#3a3a3a] font-semibold text-[16px]">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Sign up</a>
        </li>
        <li>
          <a href="">Log in</a>
        </li>
        <li>
          <a href="">
            <AiOutlineSearch size={24} />
          </a>
        </li>
        <li>
          <a href="">
            <FaCartShopping size={24} />
          </a>
        </li>
      </ul>

      <div className="hidden md:block lg:hidden">
        <AiOutlineSearch size={24} />
      </div>

      <div className="block lg:hidden">
        <FaCartShopping size={24} />
      </div>
    </div>
  );
};

export default NavBar;
