import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">About Us</h1>

      <p className="text-base leading-relaxed text-center">
        Welcome to our platform! We are dedicated to providing high‑quality
        products and a seamless user experience. Our goal is to make your
        journey simple, smooth, and enjoyable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            We aim to deliver the best solutions for our users by continuously
            improving and adapting to modern technology.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            To become a trusted platform where users can explore, buy, and
            manage products with confidence.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl shadow-md mt-10">
        <h2 className="text-xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>User‑friendly interface</li>
          <li>Secure and protected pages</li>
          <li>Fast and responsive layouts</li>
          <li>Modern design and clean UI</li>
        </ul>
      </div>
    </div>
  );
}
