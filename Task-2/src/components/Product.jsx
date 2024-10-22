import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Product = ({ product }) => {
  const { image, title, price, rating, description } = product;
  return (
    <div className="bg-[rgb(255,255,255)] px-[17px] py-[15px] rounded-[5px] shadow-lg">
      <div>
        <img className="w-full h-full" src={image} alt={title} />
      </div>
      <div>
        <h3 className="text-[#18191f] text-[28px] font-medium">{title}</h3>
        <h4 className="text-[rgba(0,0,0,0.87)] text-2xl font-medium my-[6px]">
          ${price}
        </h4>
      </div>
      <div className="flex gap-2 items-center">
        <span className="flex text-[#fb8200]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </span>
        <span className="text-[#5e6366] text-[14px] font-bold">{rating}</span>
      </div>
      <div>
        <p className="text-[#787885] font-bold text-[14px]">{description}</p>
      </div>
    </div>
  );
};

export default Product;
