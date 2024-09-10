// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 bg-gray-800">
      {/* content section start */}
      <div className="container mx-auto px-5">
        <div className="sm:flex justify-between items-center h-full ">
          {/* description section start */}
          <p className="text-slate-300 text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-center">
            &copy;2024 dreamBooks Inc. All rights reserved
          </p>
          {/* description section end */}
          {/* social link section start */}
          <ul className="flex gap-5 justify-center mt-3">
            <li>
              <Link to="https://www.facebook.com"><FaFacebook className="text-blue-600 text-lg sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[27px]"></FaFacebook></Link>
            </li>
            <li>
              <Link to="https://x.com"><FaTwitter className="text-blue-600 text-lg sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[27px]"></FaTwitter></Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com"><FaLinkedin className="text-blue-600 text-lg sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[27px]"></FaLinkedin></Link>
            </li>
            <li>
              <Link to="https://www.instagram.com"><FaInstagram className="text-blue-600 text-lg sm:text-base md:text-lg lg:text-xl xl:text-[22px] 2xl:text-[27px]"></FaInstagram></Link>
            </li>
          </ul>
          {/* social link section end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Footer;
