"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/context/cartContext";

export const SingleProduct = ({ data }) => {
  const id = data.id;
  const { cartobject, setcartobject } = useContext(CartContext);
  const [check, setcheck] = useState(false);
  const updateCheck = () => {
    cartobject.map((item) => {
      if (item.id === id) {
        setcheck(true);
      } else {
        return;
      }
    });
  };
  useEffect(() => {
    updateCheck();
  }, []);

  const handleClick = () => {
    cartobject.map((item) => {
      if (item.id === id) {
        setcheck(true);
      } else {
        return;
      }
    });

    if (check == false) {
      data.qty = 1;
      setcartobject((prev) => [...prev, data]);
      setcheck(true);
    } else {
      const newList = cartobject.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        return item;
      });
      setcartobject((prev) => newList);
    }
  };

  return (
    <div className="max-w-[400px] max-h-[400px] flex overflow-hidden flex-col justify-center shadow-md p-3 rounded-2xl">
      <img
        alt=""
        className="rounded-2xl max-h-1/2 h-[70%] object-cover"
        src={data.img}
      />
      <div className="text-lg flex justify-center flex-col items-center">
        <h4>{data.name}</h4>
        <span>${data.price}</span>
        <button
          onClick={handleClick}
          type="button"
          className="text-white bg-gray-900 hover:bg-black focus:ring-4 focus:outline-none cursor-pointer focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
