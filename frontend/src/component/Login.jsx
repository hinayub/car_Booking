import React from "react";
import LoginModal from "./LoginModal";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
const Login = () => {
  const navigate = useNavigate();
  const { userName, setuserName } = useContext(userContext);

  const username = localStorage.getItem("userName");
  return (
    <>
      <div className="flex flex-row gap-4">
        <span className="userName font-[Inter]text-gray-500  text-lg">
          {username || "Login"}
        </span>
        {
          <div className="cursor-pointer " onClick={() => navigate("/login")}>
            <i className="fas fa-power-off"></i>
          </div>
        }
      </div>
    </>
  );
};

export default Login;
