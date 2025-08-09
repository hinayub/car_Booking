import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAdCardLinks = ({ detail, id, setUserAd }) => {
  console.log(`here is id ${id}`);

  const navigate = useNavigate();
  const deleteAd = () => {
    axios
      .delete(`http://localhost:8000/api/deleteAd/${id}/`)
      .then((res) => {
        alert(res.data["msg"]);
        navigate("/myAdd");
        setUserAd((prev) => prev.filter((ad) => ad.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Edit */}
      <i
        className="fas fa-edit cursor-pointer text-blue-700"
        onClick={() => navigate(`/form/${id}/`)}
      ></i>

      {/* View */}
      <i
        className="fas fa-eye cursor-pointer text-blue-700"
        onClick={detail}
      ></i>

      {/* Delete */}
      <i
        className="fas fa-trash cursor-pointer text-blue-700"
        onClick={deleteAd}
      ></i>
    </div>
  );
};

export default MyAdCardLinks;
