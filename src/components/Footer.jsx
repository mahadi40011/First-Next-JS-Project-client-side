"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer flex flex-col-reverse sm:flex-row justify-between bg-neutral text-neutral-content items-center p-4">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/mehedi-hasan-mahbub/?originalSubdomain=bd"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/MehediHasanMahbub.H4ck3r/"
          target="_blank"
        >
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagran.com" target="_blank">
          <FaInstagram size={24} />
        </a>
      </nav>
    </footer>
  );
}
