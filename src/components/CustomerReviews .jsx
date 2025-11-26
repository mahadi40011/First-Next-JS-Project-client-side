"use client";

import Image from "next/image";
import React from "react";
import { FaStar, FaUser } from "react-icons/fa";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Entrepreneur",
      rating: 5,
      message:
        "Amazing service! Fast delivery and the products are of top-notch quality.",
      avatar: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      rating: 5,
      message:
        "Very happy with my purchase. The support team helped me promptly with my queries.",
      avatar: "",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Developer",
      rating: 5,
      message: "Highly recommend! Smooth experience from checkout to delivery.",
      avatar: "",
    },
    {
      id: 4,
      name: "Emily Clark",
      role: "Manager",
      rating: 4,
      message:
        "Products arrived quickly and were exactly as described. Excellent service!",
      avatar: "",
    },
  ];

  return (
    <section className="mt-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <p className="text-gray-600 mb-12">
          See what our happy customers are saying about our products and
          services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white hover:border border-primary p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {/* <Image
                  width={64}
                  height={64}
                  src={review.avatar}
                  alt={review.name}
                  className=" rounded-full object-cover"
                /> */}
                <FaUser size={64} className="text-primary"/>
              </div>
              <h3 className="text-xl font-semibold mb-1">{review.name}</h3>
              <p className="text-gray-500 mb-2 text-sm">{review.role}</p>
              <div className="flex justify-center mb-3">
                {Array(review.rating)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 mx-0.5" />
                  ))}
              </div>
              <p className="text-gray-600 text-sm">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
