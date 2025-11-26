"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Indoor Plant",
      price: 120,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      title: "Outdoor Plant",
      price: 180,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
        <div className="flex justify-between gap-2  p-4 bg-gray-100 rounded-xl">
          <h3 className="text-xl font-semibold">Total: </h3>
          <p className="text-xl font-bold"> $ {total}</p>
        </div>
      </div>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
            >
              <div className="flex items-center gap-4">
                {/* <Image
                  width={20}
                  height={20}
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg object-cover"
                /> */}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
