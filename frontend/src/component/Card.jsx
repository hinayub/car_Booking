import React from "react";
import ShowAdDetail from "./ShowAdDetail";
import { useNavigate } from "react-router-dom";
import MyAdCardLinks from "./MyAdCardLinks";

const Card = ({ items, fromWhere, setUserAd }) => {
  const navigate = useNavigate();
  const Detail = () => {
    navigate(`/ShowAdDetail/${items.id}`);
  };
  return (
    <div className=" h-[350px] w-[350px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className=" h-[70%] w-full object-cover">
        <img
          className="w-full h-full rounded-t-lg "
          src={`http://localhost:8000${items.image}`}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5 pt-7">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {items.model} {items.year} by {items.make}
          </h5>
        </a>

        <div className="flex items-center justify-between pt-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {items.price} PKR
          </span>
          {fromWhere ? (
            <MyAdCardLinks
              detail={Detail}
              id={items.id}
              setUserAd={setUserAd}
              oldData={items}
            />
          ) : (
            <a
              className="text-blue-500 font-bold cursor-pointer "
              onClick={Detail}
            >
              View Detail
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
