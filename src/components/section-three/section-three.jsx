import React from "react";
import "./section-three.css";


//assets
import {
  FcGlobe,
  FcSearch,
  FcSettings,
  FcStatistics,
  FcMultipleDevices,
} from "react-icons/fc";

function SectionThree() {
  return (
    <section className="w-full min-h-[80vh] py-10 text-center flex flex-col gap-5 items-center md:items-start ">
      <h6 className="flex-wrap text-4xl font-bold">Explore the features!</h6>
      <p className="flex-wrap text-sm ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Maecenas
        purus odio tempor rutrum...
      </p>
      <div
        id="card-gallery"
        className="w-full py-5 text-sm font-semibold flex flex-wrap gap-5 justify-center md:justify-start"
      >
        <div className="flex flex-col items-center gap-5 py-8 px-5 w-11/12 xs:w-2/3 md:items-start  sm:w-56 lg:w-60">
          <FcGlobe className="text-5xl" />
          <span> Create Ai Based Website</span>
        </div>
        <div className="flex flex-col items-center gap-5 py-8 px-5 w-11/12 xs:w-2/3 md:items-start  sm:w-56 lg:w-60">
          <FcSearch className="text-5xl" />
          <span> Write SEO Friendly Contents</span>
        </div>
        <div className="flex flex-col items-center gap-5 py-8 px-5 w-11/12 xs:w-2/3 md:items-start  sm:w-56 lg:w-60">
          <FcSettings className="text-5xl" />
          <span>Maintain site with Artificial Intelligence</span>
        </div>
        <div className="flex flex-col items-center gap-5 py-8 px-5 w-11/12 xs:w-2/3 md:items-start  sm:w-56 lg:w-60">
          <FcStatistics className="text-5xl" />
          <span> Response customer with analyzing data</span>
        </div>
        <div className="flex flex-col items-center gap-5 py-8 px-5 w-11/12 xs:w-2/3 md:items-start  sm:w-56 lg:w-60">
          <FcMultipleDevices className="text-5xl" />
          <span> Show custom interface with Ai</span>
        </div>
      </div>
      
    </section>
  );
}

export default SectionThree;
