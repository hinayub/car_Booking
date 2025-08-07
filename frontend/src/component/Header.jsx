import React from "react";
import logo from "../assets/logo.png";
import NavLink from "./NavLink";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-50 ">
      <nav className="bg-white">
        <div className="linkContainer  flex flex-row items-center md:px-20 justify-between ">
          <div className="logoContainer flex flex-row items-center gap-2">
            <div className="logo h-[70px] w-[70px] rounded-full">
              <img src={logo} className="h-full w-full object-cover" />
            </div>
            <span className="font-[Inter]text-gray-450  text-lg">
              Easy book{" "}
            </span>
            <span className=" font-[Inter]text-gray-500  text-2xl">|</span>
            <NavLink />
          </div>
          <Login />
        </div>
      </nav>
    </div>
  );
};

export default Header;
