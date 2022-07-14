import React from "react";
import { navLinks } from "./column-navbar";
import "../navbar.css";

function FlexNavbar() {
  return (
    <div
      id="flex-navbar"
      className="hidden md:flex items-center justify-between w-full"
    >
      <h1 className="text-xl">Markai</h1>
      <ul className="flex gap-5 text-[12px] absolute left-1/2 -translate-x-1/2 ">
        {navLinks.map((navLink, key) => (
          <li key={key} className="duration-200 hover:text-gray-400">
            {navLink.link}
          </li>
        ))}
      </ul>
      <div className="flex gap-5 pl-5">
        <button className="text-sm">Login</button>
        <button id="register-button" className="text-sm">Register</button>
      </div>
    </div>
  );
}

export default FlexNavbar;
