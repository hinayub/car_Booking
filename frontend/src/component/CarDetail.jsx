import React from "react";
import Form from "./Form";

const CarDetail = () => {
  return (
    <>
      {" "}
      <div className="w-full flex items-center flex-col gap-2 pt-4 ">
        <h1 className="text-2xl font-bold">Your Car Details</h1>
        <p>Get instant offers for your car now</p>
      </div>
      <div className="w-[60%] flex mx-auto items-center my-9	">
        <Form />
      </div>
    </>
  );
};

export default CarDetail;
