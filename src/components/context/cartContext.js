"use client";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CartProvider({ children }) {
  const [cartobject, setcartobject] = useState([]);

  return (
    <CartContext.Provider value={{ cartobject, setcartobject }}>
      {children}
    </CartContext.Provider>
  );
}
