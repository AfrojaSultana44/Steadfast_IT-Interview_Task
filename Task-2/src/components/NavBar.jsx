import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-10 px-5">
        <div
          onClick={handleNav}
          className="block md:hidden hover:cursor-pointer"
        >
          {!nav && <FaBars size={24} />}
        </div>
        <div>
          <h3 className="text-black font-bold text-2xl">Electronic Shop</h3>
        </div>

        <ul
          className={`hidden md:flex justify-between items-center gap-8 text-[#3a3a3a] font-semibold text-[16px]`}
        >
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

        <div className="hidden md:hidden">
          <AiOutlineSearch size={24} />
        </div>

        <div className="block md:hidden">
          <FaCartShopping size={24} />
        </div>
      </div>

      {nav && <MobileMenu nav={nav} handleNav={handleNav} />}
    </div>
  );
};

export default NavBar;
