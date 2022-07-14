import React from "react";


import "./section-four.css"

function SectionFour() {
  return (
    <section className="w-full min-h-screen text-center pt-5 pb-5 sm:pb-10">
      <h1 className="text-sm xs:text-lg ">Let’s introduce with</h1>
      <h6 className=" mt-5 flex-wrap font-bold text-lg xs:text-2xl sm:text-4xl lg:text-5xl">
        Your Writing Partner!
      </h6>
      <p className="mt-3 text-[10px] xs:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
        purus odio tempor rutrum...
      </p>
      <div id="section-four-video-div" className="w-full h-[200px] mt-10 xs:h-[350px] sm:h-[370px] md:h-[500px]">
        <iframe
          src="https://www.youtube.com/embed/Z2MyXuHstIs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}

export default SectionFour;
