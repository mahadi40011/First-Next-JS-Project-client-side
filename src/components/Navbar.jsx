"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";


export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { id: 0, path: "/", name: "Home" },
    { id: 1, path: "/about", name: "About" },
    { id: 2, path: "/contact", name: "Contact" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/cart", name: "Cart" },
  ];

  const navLinks = navItems.map((item) => (
    <Link
      className={`md:mx-2 md:text-lg ${
        pathname === item.path ? "md:border-b md:mb-1 text-blue-500" : ""
      }`}
      key={item.id}
      href={item.path}
    >
      {item.name}
    </Link>
  ));

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-primary lg:hidden">
              <BiMenuAltLeft size={24}/>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="ml-2 md:ml-0 text-primary font-bold text-2xl">MegaMart</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2.5">
            <span>
              <FaUserPlus />
            </span>
            <div className="font-semibold space-x-0.5">
              <Link href="/">Sign Up</Link>
              <span>/</span>
              <Link href="/">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
