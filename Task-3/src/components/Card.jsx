import React, { useState } from "react";
import Product from "./Product";
import useProductList from "../hooks/useProductList";

const Card = () => {
  const { products, productFilterHandler } = useProductList();

  const [searchValue, setSearchValue] = useState({
    category: "",
    price: 0,
  });

  const searchValueHandler = (event) => {
    setSearchValue((prev)=>({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const clearSearchHandler = (event) => {
    setSearchValue({ category: "", price: 0 });
  };

  return (
    <div
      id="product-container"
      className="w-full max-w-[1200px] mx-auto px-5 py-20"
    >
      <h1 className="text-center text-[#3a3a3a] text-[28px] font-semibold">
        Popular Collection
      </h1>
      <div className="my-3 py-2 flex flex-wrap items-center gap-3">
        <input
          type="text"
          value={searchValue.category}
          name="category"
          onChange={searchValueHandler}
          className="w-[45%] sm:w-1/4 border border-gray-500 p-4 rounded-full"
          placeholder="Search product by category"
        />
        <input
          type="number"
          value={searchValue.price}
          name="price"
          onChange={searchValueHandler}
          className="w-[45%] sm:w-1/4 border border-gray-500 p-4 rounded-full"
          placeholder="Search product by price"
        />
        <button
          onClick={() => productFilterHandler(searchValue)}
          className="px-8 py-4 bg-green-400 text-white font-bold text-xl rounded-full"
        >
          Search
        </button>
        <button
          onClick={() => {
            clearSearchHandler();
            productFilterHandler("");
          }}
          className="px-8 py-4 bg-rose-400 text-white font-bold text-xl rounded-full"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[30px]">
        {products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Card;
