import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";
const NavLink = () => {
  const navigate = useNavigate();
  const { userName, setUsername } = useContext(userContext);

  return (
    <div className="flex gap-4 px-4">
      <span
        className="font-[Inter] text-gray-500  text-lg cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Home
      </span>
      {userName !== "Login" && (
        <span
          className=" font-[Inter] text-gray-500 text-lg cursor-pointer "
          onClick={() => navigate("/myAdd")}
        >
          My Add
        </span>
      )}
    </div>
  );
};

export default NavLink;
