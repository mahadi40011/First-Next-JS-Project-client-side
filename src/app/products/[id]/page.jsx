"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function ProductDetails() {
  const router = useRouter();

  const product = {
    title: "Premium Studio Headphones",
    image: "/SmartWatch.png",
    owner: "Owner Name",
    status: "in-stock",
    brand: "brand name",
    color: "white",
    description:
      "Experience unmatched sound clarity with our Premium Studio Headphones. Designed for music enthusiasts and professionals, these headphones deliver deep bass, crisp highs, and full-range audio balance. The comfortable padding allows long hours of use without discomfort. Perfect for mixing, gaming, or casual listening.",
    price: "$120",
    regular_price: "$150",
    date: "2025-01-10",
    priority: "High",
  };

  return (
    <section className="py-16">
      <div className="container px-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 text-sky-600 font-semibold hover:underline"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="flex gap-10">
          <div className="w-1/3 h-60 sm:h-80 md:h-96 relative mb-10">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain rounded-xl "
              />
          </div>

          <div className="w-2/3 p-6 rounded-xl">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
              <p>
                <span className="font-semibold">Price:</span> {product.price}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {product.date}
              </p>
              <p>
                <span className="font-semibold">Priority:</span>{" "}
                {product.priority}
              </p>
            </div>

            <p className="text-gray-700 leading-7">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
