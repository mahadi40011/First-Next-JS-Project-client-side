"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const id = 5

  const demoProducts = [
    {
      id: 1,
      title: "Product One",
      price: 120,
      date: "2025-01-10",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product Two",
      price: 200,
      date: "2025-01-11",
      image: "https://via.placeholder.com/150",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProducts(demoProducts);
    }, 0);
  }, []);

  const handleDelete = (id) => {
    const isConfirm = confirm("Are you sure you want to delete?");
    if (!isConfirm) return;

    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="overflow-x-auto container mt-10 rounded-2xl">
      <table className="table text-center ">
        <thead className="bg-primary">
          <tr>
            <th className="text-lg ">Name</th>
            <th className="text-lg ">Price</th>
            <th className="text-lg ">Priority</th>
            <th className="text-lg ">Date</th>
            <th className="text-lg ">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-base font-bold">Cy Ganderton</td>
            <td className="text-base font-semibold">$666</td>
            <td className="text-base">high</td>
            <td className="text-base">12/16/2020</td>
            <td className="flex gap-3 justify-center items-center">
              <Link
                href={`/products/${id}`}
                className="btn btn-sm btn-primary px-5"
              >
                View
              </Link>
              <button
                className="btn btn-sm btn-secondary px-5"
                onClick={handleDelete}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
