import React from "react";
import "./Footer.module.css";

/**
 * Footer component – retains the existing layout while providing a clean, reusable implementation.
 * Tailwind utilities are used for basic styling; any custom styles belong to Footer.module.css.
 */
export const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Zupharm. All rights reserveds.</p>
    </div>
  </footer>
);
