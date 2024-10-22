import React, { useState } from "react";

const data = [
  {
    id: 1,
    image: "/images/tripod.png",
    title: "Flex Tripod",
    price: 50.48,
    rating: 4.99,
    category: "stand",
    description: "Worldwide shifting available. Buyers protection possible!",
  },
  {
    id: 2,
    image: "/images/mic.png",
    title: "Sony Microphone",
    price: 120.25,
    rating: 4.99,
    category: "microphone",
    description: "Worldwide shifting available. Buyers protection possible!",
  },
  {
    id: 3,
    image: "/images/drone.png",
    title: "Drone DS4",
    price: 980.75,
    rating: 4.99,
    category: "drone",
    description: "Worldwide shifting available. Buyers protection possible!",
  },
  {
    id: 4,
    image: "/images/camera.png",
    title: "Canon Camera",
    price: 1800.8,
    rating: 4.99,
    category: "camera",
    description: "Worldwide shifting available. Buyers protection possible!",
  },
];

const useProductList = () => {
  const [products, setProducts] = useState(data);

  const productFilterHandler = (value) => {
    if (value.category || value.price) {
      const newFilterProduct = products.filter((item) => {
        const lowerCaseCategory = item.category.toLocaleLowerCase();
        const lowerCaseCategoryValue = value.category.toLocaleLowerCase();

        return (
          item.price == value.price ||
          lowerCaseCategory === lowerCaseCategoryValue
        );
      });

      setProducts([...newFilterProduct]);
    } else {
      setProducts([...data]);
    }
  };

  return { products, productFilterHandler };
};

export default useProductList;
