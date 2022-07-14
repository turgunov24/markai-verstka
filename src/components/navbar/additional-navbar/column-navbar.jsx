import React from "react";
import "../navbar.css";

export const navLinks = [
  { link: "Features" },
  { link: "Products" },
  { link: "Company" },
  { link: "Pricing" },
  { link: "Support" },
];

function ColumnNavbar(props) {
  const toggle = props.toggle;
  return (
    
    <ul
      id="column-navbar"
      className={`${
        toggle
          ? "absolute top-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center w-full gap-[4px] bg-bodyBg border-t py-2 md:hidden"
          : "hidden"
      }`}
    >
      {navLinks.map((navlink, key) => (
        <li
          className=" w-1/2 py-2 text-center text-gray-400 transition-all duration-300 hover:text-white "
          key={key}
        >
          {navlink.link}
        </li>
      ))}
    </ul>
  );
}

export default ColumnNavbar;
