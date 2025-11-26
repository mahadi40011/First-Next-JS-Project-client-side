"use client";

import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { MdDetails } from "react-icons/md";
import Link from "next/link";

export default function BestSellingProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$120",
      description: "Experience crystal clear sound quality.",
      image: "/assets/product1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$90",
      description: "Track your health and stay connected.",
      image: "/assets/product2.jpg",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "$60",
      description: "Powerful sound with long battery life.",
      image: "/assets/product3.jpg",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$45",
      description: "Precision and comfort for gamers.",
      image: "/assets/product4.jpg",
    },
  ];

  return (
    <section className="mt-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Selling Products</h2>
        <p className="text-gray-600 mb-12">
          Our most loved and highly rated products of the month.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 hover:outline outline-primary rounded-xl shadow hover:shadow-lg transition duration-300 p-5"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover "
                />
              </div>

              <div className="text-start">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-3xl font-bold text-primary">
                  {product.price}
                </span>
                <Link
                  href="/"
                  className="bg-primary text-white px-3 py-2 rounded-lg flex items-center gap-2  hover:bg-sky-700 transition"
                >
                  <MdDetails /> Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
