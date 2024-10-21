import React, { useState } from "react";
import Product from "./Product";

const Card = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "../public/images/tripod.png",
      title: "Flex Tripod",
      price: 50.48,
      rating: 4.99,
      description: "Worldwide shifting available. Buyers protection possible!",
    },
    {
      id: 2,
      image: "../public/images/mic.png",
      title: "Microphone",
      price: 120.25,
      rating: 4.99,
      description: "Worldwide shifting available. Buyers protection possible!",
    },
    {
      id: 3,
      image: "../public/images/drone.png",
      title: "Drone",
      price: 980.75,
      rating: 4.99,
      description: "Worldwide shifting available. Buyers protection possible!",
    },
    {
      id: 4,
      image: "../public/images/camera.png",
      title: "Camera",
      price: 1800.8,
      rating: 4.99,
      description: "Worldwide shifting available. Buyers protection possible!",
    },
  ]);
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5 py-20">
      <h1 className="text-center text-[#3a3a3a] text-[28px] font-semibold">
        Popular Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[30px]">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Card;
