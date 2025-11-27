"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDetails } from "react-icons/md";

export default function Products() {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data)
        console.log(data)
      });
  }, []);

  const filtered = allProducts.filter((p) =>
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
              key={product._id}
              className="bg-gray-100 flex flex-col hover:outline outline-primary rounded-xl shadow hover:shadow-lg transition duration-300 p-5"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={100}
                  height={160}
                  className="absolute rounded-lg w-full h-40 object-container "
                />
              </div>

              <div className="text-start flex-1">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {product.shortDesc}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-3xl font-bold text-primary">
                  ${product.price}
                </span>
                <Link
                  href={`products/${product._id}`}
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
