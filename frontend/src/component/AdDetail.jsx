import React from "react";
import ShowAdDetail from "./ShowAdDetail";

const AdDetail = ({ adDetailData }) => {
  return (
    <>
      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label htmlFor="model2" className="text-sm font-medium text-gray-500">
            Model
          </label>
          <input
            id="model2"
            type="text"
            value={adDetailData.model}
            className="border-none focus:outline-none bg-white text-right"
            readOnly
          />
        </div>

        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label htmlFor="make2" className="text-sm font-medium text-gray-500">
            Make
          </label>
          <input
            id="make2"
            type="text"
            value={adDetailData.make}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label
            htmlFor="carType"
            className="text-sm font-medium text-gray-500"
          >
            Vehicle Type
          </label>
          <select
            id="carType"
            value={adDetailData.vehicle_type}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          >
            <option value="">Select</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </div>
        <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
          <label htmlFor="year" className="text-sm font-medium text-gray-500">
            Year
          </label>
          <select
            id="year"
            value={adDetailData.year}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
            defaultValue=""
          >
            <option value="" disabled>
              Select Year
            </option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center  mb-2 justify-between  w-[45%] border-b border-gray-300">
          <label
            htmlFor="engineCapacity"
            className="text-sm font-medium text-gray-500"
          >
            Engine Capacity
          </label>
          <input
            id="engineCapacity"
            type="text"
            placeholder=""
            value={adDetailData.engine_capacity}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          />
        </div>

        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label htmlFor="color" className="text-sm font-medium text-gray-500">
            Color
          </label>
          <input
            id="color"
            type="text"
            value={adDetailData.color}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
          <label
            htmlFor="transmission"
            className="text-sm font-medium text-gray-500"
          >
            Transmission
          </label>
          <select
            id="transmission"
            value={adDetailData.transmission}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        {/* Condition Select */}
        <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
          <label
            htmlFor="condition"
            className="text-sm font-medium text-gray-500"
          >
            Condition
          </label>
          <select
            id="condition"
            value={adDetailData.condition}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="reconditioned">Reconditioned</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label
            htmlFor="registrationCity"
            className="text-sm font-medium text-gray-500"
          >
            Registration City
          </label>
          <input
            id="registrationCity"
            type="text"
            value={adDetailData.registration_city}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          />
        </div>

        {/* Hybrid Select */}
        <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
          <label htmlFor="hybrid" className="text-sm font-medium text-gray-500">
            Hybrid
          </label>
          <select
            id="hybrid"
            value={adDetailData.hybrid}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
          <label htmlFor="fuel" className="text-sm font-medium text-gray-500">
            Fuel Type
          </label>
          <select
            id="fuel"
            value={adDetailData.fuel_type}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        {/* Distance Covered Input */}
        <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
          <label
            htmlFor="distance"
            className="text-sm font-medium text-gray-500"
          >
            Distance Covered
          </label>
          <div className="flex ">
            <input
              id="distance"
              type="number"
              value={adDetailData.distance_covered}
              readO
              nly
              className="border-none focus:outline-none bg-white text-right"
            />
            <span className="text-sm text-gray-500">km</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between  border-b border-gray-300 ">
        <label htmlFor="price" className="text-sm font-medium text-gray-500">
          Price
        </label>
        <div className="flex ">
          <input
            id="price"
            type="number"
            placeholder="0"
            value={adDetailData.price}
            readOnly
            className="border-none focus:outline-none bg-white text-right"
          />
          <span className="text-sm text-gray-500">PKR</span>
        </div>
      </div>
    </>
  );
};

export default AdDetail;
