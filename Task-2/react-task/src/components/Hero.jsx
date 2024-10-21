import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5">
      <div className='bg-[url("/public/images/hero-img.avif")] bg-cover h-auto p-[50px] md:p-0 md:h-[400px] lg:h-[600px] rounded-xl flex justify-center items-center'>
        <div className="flex flex-col items-center">
          <h1 className="text-center text-[#3a3a3a] text-[28px] md:text-[52px] font-bold mb-4">
            Best Collection For <br />
            Influencer
          </h1>
          <div>
            <a href="">
              <button className="bg-[#e02c6d] text-[16px] font-bold text-[#ffffff] py-[10px] px-[24px] rounded-[41px] flex items-center gap-2">
                <span>Shop Now</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
