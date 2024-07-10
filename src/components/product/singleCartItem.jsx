"use client";
import Trash from "../svg/trash";
import { useState, useContext } from "react";
import { CartContext } from "@/components/context/cartContext";

export const SingleCartItem = ({ data }) => {
  const { cartobject, setcartobject } = useContext(CartContext);
  const [num, setnum] = useState(data.qty);
  const solve = (action) => {
    if (action == "add") {
      setcartobject((prev) => {
        const newList = prev.map((element) => {
          if (element.id == data.id) {
            element.qty += 1;
            setnum(element.qty);
          }
          return element;
        });
        return newList;
      });
      setnum(num + 1);
    } else if (num > 1) {
      setcartobject((prev) => {
        const newList = prev.map((element) => {
          if (element.id == data.id) {
            element.qty -= 1;
            setnum(element.qty);
          }
          return element;
        });
        return newList;
      });
    }
  };

  return (
    <div className="justify-between mb-6 rounded-lg border-[1px] border-black max-h-[200px] bg-white p-2 sm:p-6 shadow-md flex sm:flex sm:justify-start overflow-hidden">
      <img
        src={data.img}
        alt="product-image"
        className=" object-cover rounded-lg h-29 w-[90px] mr-1 sm:w-40"
      />
      <div className=" text-xs sm:text-base flex w-full justify-between">
        <div className="mt-5 sm:mt-0 flex flex-col justify-between">
          <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
          <p className="mt-1  text-gray-700">size : {data.size}</p>
          <p className="mt-1 text-gray-700">color : {data.color}</p>
          <p className="mt-1  text-black">${data.price}</p>
        </div>
        <div className="mt-4 flex flex-col justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center justify-end space-x-4">
            <Trash id={data.id} />
          </div>
          <div className="flex items-center p-2 bg-slate-200 rounded-xl text-black">
            <span
              onClick={() => solve("sub")}
              className="cursor-pointer rounded-l py-1 px-2 font-black duration-100 "
            >
              -
            </span>
            <input
              className="h-6 w-16 border bg-transparent border-none font-black  text-center text-xs outline-none"
              type="number"
              value={num}
              min="1"
              aria-label="number"
            />
            <span
              onClick={() => solve("add")}
              className="cursor-pointer rounded-r py-1 px-2 font-black duration-100 "
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
