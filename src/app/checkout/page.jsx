"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/context/cartContext";

export default function CheckoutPage() {
  const { cartobject, setcartobject } = useContext(CartContext);
  const [active, setactive] = useState(1);
  return (
    <div className="  p-10">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold">Go Fashion</h1>
      </header>
      <div className="flex space-x-3 w-full">
        <div className="hidden md:flex md:w-1/2">
          <img
            src={cartobject[0]?.img}
            alt=""
            className="w-full h-[550px] object-cover"
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
          <form>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              Choose your payment method
            </h2>

            <div className="space-y-4">
              <div
                onClick={() => setactive(2)}
                className={`flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  ${
                  active == 2 && "border-blue-400"
                }`}
              >
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <span className="flex flex-row flex-nowrap space-x-4">
                  <span>Expires</span>
                  <span>09/68</span>
                  <span>Default</span>
                </span>

                {active == 2 && (
                  <div className="h-3 w-3 bg-green-500 rounded-full absolute top-6 left-[50%]"></div>
                )}
              </div>
              <div
                onClick={() => setactive(3)}
                className={`flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  ${
                  active == 3 && "border-blue-400"
                }`}
              >
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <span className="flex flex-row flex-nowrap space-x-4">
                  <span>Expires</span>
                  <span>09/68</span>
                  <span>Default</span>
                </span>

                {active == 3 && (
                  <div className="h-3 w-3 bg-green-500 rounded-full absolute top-6 left-[50%]"></div>
                )}
              </div>
              <div
                onClick={() => setactive(1)}
                className={`flex relative flex-col space-y-3  p-4 border rounded-lg cursor-pointer hover:bg-gray-50  ${
                  active == 1 && "border-blue-400"
                }`}
              >
                <span>VISA ****** ****** ***** 1234 (Default)</span>
                <span className="flex flex-row flex-nowrap space-x-4">
                  <span>Expires</span>
                  <span>09/68</span>
                  <span>Default</span>
                </span>

                {active == 1 && (
                  <div className="h-3 w-3 bg-green-500 rounded-full absolute top-6 left-[50%]"></div>
                )}
              </div>

              <div className="block p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment-method" className="mr-2" />
                <span>Add Payment Method</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 mt-6 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
