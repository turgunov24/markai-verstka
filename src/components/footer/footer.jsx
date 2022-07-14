import React from "react";

import "./footer.css";
//assets
import { BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <section
    id="section-eight"
      className="py-20 w-full min-h-[50vh] flex flex-col items-center gap-7
        md:flex-row justify-between md:gap-14"
    >
      <div className="w-full flex flex-col gap-3 p-4 text-start xs:w-10/12 md:w-96">
        <h6 className="font-bold text-5xl">Markai</h6>
        <p className="flex-wrap text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
          sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
          iaculis. Mauris, curabitur scelerisque.
        </p>
        <button
          id="footer-button"
          className="self-center mt-2 py-1 px-4
                xs:px-8 md:px-12 "
        >
          Let’s go
        </button>
        <div id="footer-icons" className="mt-2 flex gap-3 p-1">
          <a href="#"><BsLinkedin /></a>
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><BsInstagram /></a>
          <a href="#"><BsTwitter /></a>
        </div>
      </div>
      <div id="footer-grid-template" className="w-full flex flex-col gap-3 xs:w-10/12 md:w-96">
        <ul>
            <span>Site</span>
            <li>Features</li>
            <li>Products</li>
            <li>Company</li>
            <li>Pricing</li>
            <li>Support</li>
        </ul>
        <ul>
            <span>Legale</span>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Company Policy</li>
        </ul>
        <ul>
            <span>Company</span>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Story</li>
            <li>Career</li>
        </ul>
        <ul>
            <span>Follow us one</span>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Linkedin</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
