"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full bg-[#212844] container rounded-3xl px-5 md:px-10 lg:px-20 py-10 text-gray-200">
      {/* Text Content */}
      <div className="w-full md:w-2/3 py-5 md:py-10">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Best Deals Online on MegaMart
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold my-5">
          WELCOME TO MEGAMART
        </h1>
        <p className="text-2xl sm:text-2xl lg:text-3xl font-semibold">
          Up to 30% OFF
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mt-5 md:mt-10">
          <Link href="/products" className="btn btn-soft btn-primary">
            Shop Now
          </Link>
          <Link href="/cart" className="btn btn-soft btn-secondary">
            My Products
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/3 flex justify-center mt-10 md:mt-0">
        <Image
          width={350}
          height={350}
          src="/SmartWatch.png"
          alt="Hero Banner"
          className="rounded-lg shadow-xl max-w-full h-auto"
        />
      </div>
    </section>
  );
}
