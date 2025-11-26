"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroBanner() {
  return (
    <section className="flex justify-between items-center w-full bg-[#212844] container rounded-3xl mt-10 px-30 text-gray-200">
      <div className="w-[70%] py-10">
        <p className="text-3xl font-semibold">Best Deals Online on MegaMart</p>
        <h1 className="text-6xl font-bold my-5">WELCOME TO MEGAMART</h1>
        <p className="text-3xl font-semibold">Up to 30% OFF</p>

        <div className="flex items-center gap-5">
          <Link href="/products" className="btn btn-soft btn-primary mt-10">
            Shop Now
          </Link>
          <Link href="/cart" className="btn btn-soft btn-secondary mt-10">
            My Products
          </Link>
        </div>
      </div>

      <div className="w-[30%] px-6 py-6 ">
        <Image
          width={350}
          height={350}
          src="/SmartWatch.png"
          alt="Hero Banner"
          className="rounded-lg shadow-xl "
        />
      </div>
    </section>
  );
}
