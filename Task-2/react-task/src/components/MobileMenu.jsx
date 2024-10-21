import React from "react";
import { IoCloseSharp } from "react-icons/io5";


const MobileMenu = ({ nav, handleNav }) => {
  return (
    <div className="w-full bg-white md:hidden absolute top-0 left-0 p-8 h-[100vh] overflow-y-auto">
      <div onClick={handleNav} className="flex justify-end hover:text-red-400 hover:cursor-pointer">
        {nav && <IoCloseSharp size={24} />}
      </div>
      <ul
        className={`flex flex-col justify-center items-center gap-4 text-[#3a3a3a] font-semibold text-[16px]`}
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
      </ul>
    </div>
  );
};

export default MobileMenu;
