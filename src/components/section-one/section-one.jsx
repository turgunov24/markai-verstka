import React, { useEffect, useRef } from "react";
import "./section-one.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { IoIosArrowDown } from "react-icons/io";

//addtional
import { motion } from "framer-motion";

const motionArrow = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 140,
    },
  },
};

function SectionOne() {
  return (
    <section
      id="section-one"
      className="flex flex-col items-center justify-start w-full h-screen text-white text-center"
    >
      <h1 className="flex-wrap mt-36 md:mt-48 text-sm xs:text-xl sm:text-2xl lg:text-4xl ">
        Let Ai help your
      </h1>
      <h6 className="flex-wrap font-bold mt-5 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        MARKETING TEAM
      </h6>
      <p className="flex-wrap mt-5 text-gray-300 text-[10px] sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
        purus odio tempor rutrum condimentum viverra <br /> ornare. Gravida
        tellus ut venenatis.
      </p>
      <button
        id="letsGo-button"
        className="flex items-center gap-1 py-2 px-2 sm:px-5 md:px-9 xl:px-10"
      >
        <span>Let’s go </span>
        <ArrowRightAltIcon />
      </button>
      <motion.span
        variants={motionArrow}
        initial="hidden"
        animate="visible"
        className="text-9xl text-indigo-500 mt-16 md:mt-10 z-10"
      >
        <IoIosArrowDown />
      </motion.span>
    </section>
  );
}
export default SectionOne;
