"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://frist-next-js-project-server-side.vercel.app/manage-products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDelete = (id) => {
    const isConfirm = confirm("Are you sure you want to delete?");
    if (!isConfirm) return;

    fetch(
      `https://frist-next-js-project-server-side.vercel.app/products/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product deleted successfully");
        }
      })
      .catch((err) => console.error("Error deleting product:", err));

    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div className="overflow-x-auto container my-10 rounded-md md:rounded-xl">
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
          {products.map((product) => (
            <tr key={product._id}>
              <td className="text-base font-bold text-start">
                {product.title}
              </td>
              <td className="text-base font-semibold">{product.price}</td>
              <td className="text-base">{product.priority}</td>
              <td className="text-base">{product.date}</td>
              <td className="flex gap-3 justify-center items-center">
                <Link
                  href={`/products/${product._id}`}
                  className="btn btn-sm btn-primary px-5"
                >
                  View
                </Link>
                <button
                  className="btn btn-sm btn-secondary px-5"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
