"use client";
import { useContext } from "react";
import { CartContext } from "@/components/context/cartContext";
import Link from "next/link";

export const PriceSection = () => {
  const { cartobject, setcartobject } = useContext(CartContext);
  let subtotal = 0.0;
  cartobject.forEach((element) => {
    subtotal += element.price * element.qty;
  });
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <h3 className="text-xl font-bold">Order summary</h3>
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${monify(Math.abs(subtotal))}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Discount</p>
        <p className="text-gray-700">$0.00</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Delivery fee</p>
        <p className="text-gray-700">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">
            ${monify(subtotal + 4.99)}USD
          </p>
        </div>
      </div>
      <Link href="/checkout">
        <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 cursor-pointer">
          Check out
        </button>
      </Link>
    </div>
  );
};
const monify = (num = 0.0) => {
  const mi = num.toString().split(".");
  if (mi.length > 1) {
    if (mi[1].length > 2) {
      const mm = mi[1].slice(0, 1);
      const moni = `${mi[0]}.${mm}`;
      return moni;
    }

    const moni = `${mi[0]}.${mi[1]}`;
    return moni;
  }
  return mi;
};
