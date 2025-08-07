import React from "react";
import logo from "../assets/logo.png";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-white w-full flex items-center justify-between md:px-20">
      <div className="logoContainer flex flex-row items-center gap-2">
        <div className="logo h-[70px] w-[70px] rounded-full">
          <img src={logo} className="h-full w-full object-cover" />
        </div>
        <span className="font-[Inter]text-gray-500 text-lg">Easy book </span>
        <span className=" font-[Inter] text-gray-500  text-2xl">|</span>
        <span className="font-[Inter] text-gray-500 text-lg">
          2025 Book your Car -- @HA{" "}
        </span>
      </div>
      <SocialLink />
    </div>
  );
};

export default Footer;
