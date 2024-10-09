import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { cartContext } from "../App";

const Cart = () => {
  const { closeCart } = useContext(cartContext);
  const { cart } = useContext(cartContext);
  const { removeCart } = useContext(cartContext);
  return (
    <div className=" fixed z-10 right-0 top-0 h-full bg-yellow-100 w-1/2">
      <button onClick={closeCart} className=" text-black p-4 inline ">
        <FaBars />
      </button>
      {cart.map((item) => {
        return (
          <div className="items-center flex gap-4 mb-4">
            <img src={item.image} className=" w-10" alt="" />
            <span> {item?.title} </span>
            <span>{item.price}</span>
            <button
              onClick={() => removeCart(item)}
              className="border-2 border-black"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
