"use client";
import { useState, useContext } from "react";
import { PriceSection } from "./product/priceSection";
import { CartContext } from "@/components/context/cartContext";
import { SingleCartItem } from "./product/singleCartItem";
export const Cart = () => {
  const { cartobject, setcartobject } = useContext(CartContext);
  return (
    <div className="min-h-screen p-10">
      <span>Home {">"} Cart</span>
      <h1 className="mb-10 pl-2 pt-3 text-2xl font-extrabold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartobject.map((item) => (
            <SingleCartItem key={item.id} data={item} />
          ))}
        </div>

        <PriceSection />
      </div>
    </div>
  );
};
