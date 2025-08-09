import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { useContext } from "react";
import { userContext } from "../App";
import axios from "axios";
import Card from "./Card";
import MyAdCardLinks from "./MyAdCardLinks";

const MyAdd = () => {
  const navigate = useNavigate();
  // const { userId } = useContext(userContext);
  const [userAd, setUserAd] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/userAd/${userId}`)
      .then((res) => {
        setUserAd(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <>
      <div className="h-full w-full flex flex-col md:flex-row gap-7 p-4">
        {userAd.map((items, key) => (
          <Card
            items={items}
            key={key}
            fromWhere="myAdd"
            setUserAd={setUserAd}
          />
        ))}
      </div>
      <div className="fixed bottom-20 flex justify-end w-full">
        <div
          className=" mr-10 rounded-full bg-[color:#7130af] h-[50px] w-[50px] md:mr-25 flex items-center justify-center cursor-pointer"
          onClick={() => navigate("/carDetail")}
        >
          <i className="fas fa-plus text-white"></i>
        </div>
      </div>
    </>
  );
};

export default MyAdd;
