"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdDetails } from "react-icons/md";
import Link from "next/link";

export default function BestSellingProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/latest-products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <section className="mt-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Best Selling Products</h2>
        <p className="text-gray-600 mb-12">
          Our most loved and highly rated products of the month.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 flex flex-col hover:outline outline-primary rounded-xl shadow hover:shadow-lg transition duration-300 p-5"
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
                  href={`/products/${product._id}`}
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
