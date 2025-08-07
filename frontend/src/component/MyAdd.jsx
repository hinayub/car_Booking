import React from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";

const MyAdd = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-20 flex justify-end w-full">
      <div
        className="rounded-full bg-[color:#7130af] h-[50px] w-[50px] mr-25 flex items-center justify-center cursor-pointer"
        onClick={() => navigate("/carDetail")}
      >
        <i className="fas fa-plus text-white"></i>
      </div>
    </div>
  );
};

export default MyAdd;
