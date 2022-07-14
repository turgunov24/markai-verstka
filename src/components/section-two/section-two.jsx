import React from "react";

//assets
import sectionTwoImage from "../../assets/images/sectionTwo.png";

function SectionTwo() {
  return (
    <section className="w-full min-h-[70vh] py-12 px-28  text-center gap-10 flex flex-col items-center justify-between md:flex-row md:justify-evenly">
      <img src={sectionTwoImage} alt="section-two-robot-image" width={350} />
      <h6 className="flex-wrap font-bold text-xl xs:text-2xl md:text-3xl">
        Make your marketing <br /> completely based on <br /> Artificial
        Intelligence.
      </h6>
    </section>
  );
}

export default SectionTwo;
