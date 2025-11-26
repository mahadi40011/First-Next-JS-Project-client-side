"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 container mx-auto px-6">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Feel free to reach out. We are here to help you anytime!
        </p>
      </div>

      {/* Contact Info + Form Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl">
            <FaPhoneAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+8801300701950</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">mahadi@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 p-5 rounded-xl">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow p-8 rounded-xl space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Your Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Type your message here..."
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
