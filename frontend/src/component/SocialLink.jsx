import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SocialLink = () => {
  return (
    <div className="flex md:gap-4">
      <i className="fab fa-facebook cursor-pointer "></i>
      <i className="fab fa-twitter text-blue-400 cursor-pointer"></i>
      <i className="fab fa-instagram text-pink-500 cursor-pointer"></i>
    </div>
  );
};

export default SocialLink;
