import React, { useContext } from "react";
import { cartContext } from "../App";

export const Cards = ({ filteredProducts, viewMore }) => {
  const { addToCart } = useContext(cartContext);

  const viewMoreHandle = viewMore
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center">
      {viewMoreHandle.map((item) => {
        return (
          <div key={item.id} className="w-full h-full">
            <img
              src={item.image}
              className="hover:scale-105 transition-all w-full delay-100"
              alt=""
            />
            <h5 className="my-3">{item.title}</h5>
            <div className="flex justify-between items-center">
              <span className=" text-gray-400 flex gap-6">
                {item.category} <h5>$ {item.price} </h5>
              </span>
              <button
                className=" border bg-amber-300 rounded-xl p-2"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
