import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ColumnNavbar from "./additional-navbar/column-navbar";
import "./navbar.css";
import FlexNavbar from "./additional-navbar/flex-navbar";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [navbarBg, setnavbarBg] = useState(false);
  window.addEventListener("scroll", () => {
    if (scrollY <= 65) {
      setnavbarBg(true);
    } else {
      setnavbarBg(false);
    }
  });
  return (
    <nav
      id="navbar"
      className={
        navbarBg
          ? "z-20 text-white fixed w-full top-0 left-0 py-4 px-10 flex justify-between items-center"
          : " bg-bodyBg shadow-2xl z-20 text-white fixed w-full top-0 left-0 py-6 px-16 flex justify-between items-center"
      }
    >
      <h1 className="text-xl md:hidden">Markai</h1>
      <button
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-center md:hidden"
      >
        {toggle ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </button>
      <ColumnNavbar toggle={toggle} navbarbg={navbarBg} />
      <FlexNavbar />
    </nav>
  );
}

export default (Navbar);

