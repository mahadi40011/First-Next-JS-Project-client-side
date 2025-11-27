"use client";
import React, { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      imageUrl:
        "https://i.ibb.co.com/0yRmcPpt/images-q-tbn-ANd9-Gc-Tg-Vq-Z1pzz-Tl-Jq-V-a-U6v-Yf-itarc-MZx-OKVOw-s.png",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 space-y-4"
      >
        {/* Title */}
        <div>
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter product title"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="font-semibold">Short Description</label>
          <input
            type="text"
            name="shortDesc"
            value={form.shortDesc}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter short description"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="font-semibold">Full Description</label>
          <textarea
            name="fullDesc"
            value={form.fullDesc}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1 h-28"
            placeholder="Enter full description"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter price"
          />
        </div>

        {/* Date */}
        <div>
          <label className="font-semibold">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="font-semibold">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Optional Image URL */}
        <div>
          <label className="font-semibold">Image URL (disabled)</label>
          <input
            disabled
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold text-lg py-2 rounded-lg hover:bg-sky-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
