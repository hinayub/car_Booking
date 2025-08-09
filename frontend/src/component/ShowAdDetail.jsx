import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdDetail from "./AdDetail";
import { useParams } from "react-router-dom";

const ShowAdDetail = () => {
  const { adId } = useParams();
  const [adDetailData, setAdDetailData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getDetail/${adId}/`)
      .then((res) => setAdDetailData(res.data))
      .catch((err) => console.log(err));
  }, [adId]);
  return (
    <>
      <div>
        <div className="relative w-[60%] h-[60%] object-cover rounded-t-lg  mx-auto pt-7 ">
          <img
            src={`http://localhost:8000${adDetailData.image}`}
            className="w-full h-full rounded-lg"
          />
          <h1 className=" text-2xl font-bold pt-7 pb-2">
            {adDetailData.model} {adDetailData.make} {adDetailData.year}
          </h1>
        </div>
      </div>
      <div className="w-full bg-white mb-10 ">
        <div className="w-[60%] mx-auto ">
          <AdDetail adDetailData={adDetailData} />
        </div>
      </div>
    </>
  );
};

export default ShowAdDetail;
