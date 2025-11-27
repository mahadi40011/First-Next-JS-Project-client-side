"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { user, loading, logOutUser } = useAuth();

  const navItems = [
    { id: 0, path: "/", name: "Home" },
    { id: 1, path: "/products", name: "Products" },
    { id: 2, path: "/blog", name: "Blog" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/about", name: "About" },
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

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-primary lg:hidden">
              <BiMenuAltLeft size={24} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="ml-2 md:ml-0 text-primary font-bold text-2xl">
            MegaMart
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    <Image
                      src={user?.photoURL || "/default-avatar.png"}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <div className="mb-4 ">
                      <h1 className="text-lg font-semibold">
                        {user?.displayName}
                      </h1>
                      <p className="text-base">{user?.email}</p>
                      <div className="flex flex-col gap-1 mt-3">
                        <Link className="btn btn-sm text-lg" href="/add-product">
                          Add Product
                        </Link>
                        <Link className="btn btn-sm text-lg" href="/manage-products">
                          Manage Products
                        </Link>
                        <button
                          onClick={handleLogOut}
                          className="btn btn-sm bg-primary border-none text-white text-lg "
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <span>
                    <FaUserPlus />
                  </span>
                  <div className="font-semibold space-x-0.5">
                    <Link href="/register">Sign Up</Link>
                    <span>/</span>
                    <Link href="/login">Sign In</Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
