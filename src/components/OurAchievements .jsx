"use client";

import React from "react";
import { FaUsers, FaStar, FaShoppingCart, FaGlobe } from "react-icons/fa";

export default function OurAchievements() {
  const stats = [
    {
      id: 1,
      icon: <FaUsers size={40} className="text-sky-600 mb-3" />,
      number: "10K+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <FaStar size={40} className="text-sky-600 mb-3" />,
      number: "4.9/5",
      label: "Average Rating",
    },
    {
      id: 3,
      icon: <FaShoppingCart size={40} className="text-sky-600 mb-3" />,
      number: "20K+",
      label: "Orders Delivered",
    },
    {
      id: 4,
      icon: <FaGlobe size={40} className="text-sky-600 mb-3" />,
      number: "15+",
      label: "Countries Served",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <p className="text-gray-600 mb-12">
          We are proud of our milestones and the trust our customers have placed
          in us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-50 p-6 hover:border border-primary rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

