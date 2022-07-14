import React from "react";

import "./section-eight.css";

function SectionEight() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center p-9">
      <h6 className="text-xl font-bold md:text-3xl">Contact us</h6>
      <p className="flex-wrap text-sm text-center mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <br className="hidden md:block" /> Maecenas purus odio tempor rutrum...
      </p>
      <form
        action="login"
        className="mt-5 w-full p-1 flex flex-col items-center gap-4 md:w-4/5 md:gap-6"
      >
        <div className="flex flex-col items-center gap-4 w-full py-2 md:flex-row justify-between md:gap-5 lg:gap-10">
          <input
            className="p-3 w-full sm:w-10/12 md:w-1/2"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="p-3 w-full sm:w-10/12 md:w-1/2"
            type="text"
            placeholder="Your Email Address"
          />
        </div>
        <textarea className="p-5 w-full h-[200px] sm:w-10/12 md:w-full"></textarea>
        <button id="section-eight-button" className="py-1 px-4 xs:px-8 md:px-12 md:py-[6px]">Submit</button>
      </form>
    </section>
  );
}

export default SectionEight;
