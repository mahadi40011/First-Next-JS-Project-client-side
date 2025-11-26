"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDetails } from "react-icons/md";

export default function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      title: "Premium Indoor Plant",
      desc: "A healthy indoor plant perfect for home decoration.",
      price: "$25",
      image: "/SmartWatch.png",
    },
    {
      id: 2,
      title: "Outdoor Flower Pot",
      desc: "Beautiful pot with seasonal flowers.",
      price: "$18",
      image: "/SmartWatch.png",
    },
    {
      id: 3,
      title: "Cactus Plant Set",
      desc: "Low-maintenance cactus plants for office desk.",
      price: "$30",
      image: "/SmartWatch.png",
    },
    {
      id: 4,
      title: "Mini Aloe Vera",
      desc: "Fresh aloe vera plant with strong leaves.",
      price: "$12",
      image: "/SmartWatch.png",
    },
    {
      id: 5,
      title: "Hanging Plant",
      desc: "Perfect for balconies and living rooms.",
      price: "$20",
      image: "/SmartWatch.png",
    },
    {
      id: 6,
      title: "Large Monstera",
      desc: "High quality Monstera plant for big rooms.",
      price: "$45",
      image: "/SmartWatch.png",
    },
  ];

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">All Products</h2>
          <p className="text-gray-600 mb-8">
            Browse through our collection of indoor and outdoor plants.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
          <div className="relative w-full sm:w-1/2">
            <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select className="w-full sm:w-1/4 border py-2 px-3 rounded-lg">
            <option>All Categories</option>
            <option>Indoor Plants</option>
            <option>Outdoor Plants</option>
            <option>Cactus</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 hover:outline outline-primary rounded-xl shadow hover:shadow-lg transition duration-300 p-5"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={160}
                  className="rounded-lg w-full h-40 object-container "
                />
              </div>

              <div className="text-start">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
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

