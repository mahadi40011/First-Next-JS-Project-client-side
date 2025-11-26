"use client";

import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast size={40} className="text-sky-600 mb-3" />,
      title: "Fast Delivery",
      description:
        "Get your products delivered in record time with our reliable shipping.",
    },
    {
      id: 2,
      icon: <FaHeadset size={40} className="text-sky-600 mb-3" />,
      title: "24/7 Support",
      description: "Our friendly support team is always available to help you.",
    },
    {
      id: 3,
      icon: <FaShieldAlt size={40} className="text-sky-600 mb-3" />,
      title: "Secure Payment",
      description:
        "Your transactions are safe with our secure payment gateways.",
    },
    {
      id: 4,
      icon: <FaStar size={40} className="text-sky-600 mb-3" />,
      title: "Top Quality",
      description:
        "We provide products that meet the highest standards of quality.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          We offer the best services to make your shopping experience enjoyable
          and reliable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white hover:border border-primary p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
