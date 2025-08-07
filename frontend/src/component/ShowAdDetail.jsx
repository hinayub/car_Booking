import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import { useParams } from "react-router-dom";

const ShowAdDetail = () => {
  const { adId } = useParams();
  const [AdDetail, setAdDetail] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getDetail/${adId}/`)
      .then((res) => setAdDetail(res.data))
      .catch((err) => console.log(err));
  }, [adId]);
  return (
    <div>
      <div className="w-[70%] h-[60%] object-cover rounded-t-lg  mx-auto pt-7">
        <img
          src={`http://localhost:8000${AdDetail.image}`}
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default ShowAdDetail;
