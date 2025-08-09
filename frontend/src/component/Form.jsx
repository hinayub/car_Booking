import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { userContext } from "../App";
import { useParams } from "react-router-dom";

const Form = () => {
  const [error, setError] = useState("");
  const { userId } = useContext(userContext);
  const { id } = useParams();
  const [getEdit, setEditAd] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/editAdDetail/${id}/`)
      .then((res) => {
        setEditAd(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const [formData, setFormData] = useState({
    model: "",
    make: "",
    vehicle_type: "",
    year: "",
    engine_capacity: "",
    color: "",
    transmission: "",
    condition: "",
    registration_city: "",
    hybrid: "",
    fuel_type: "",
    distance_covered: "",
    price: "",
    image: null,
    owner: userId,
  });

  useEffect(() => {
    setFormData({
      model: getEdit.model,
      make: getEdit.make,
      vehicle_type: getEdit.vehicle_type,
      year: getEdit.year,
      engine_capacity: getEdit.engine_capacity,
      color: getEdit.color,
      transmission: getEdit.transmission,
      condition: getEdit.condition,
      registration_city: getEdit.registration_city,
      hybrid: getEdit.hybrid,
      fuel_type: getEdit.fuel_type,
      distance_covered: getEdit.distance_covered,
      price: getEdit.price,
      owner: userId,
    });
  }, [getEdit]);

  const handleFormSubmission = () => {
    setError("");
    const isEmptyField = Object.entries(formData).some(
      ([key, value]) => !value || value === ""
    );

    const form = new FormData();
    form.append("model", formData.model);
    form.append("make", formData.make);
    form.append("vehicle_type", formData.vehicle_type);
    form.append("year", formData.year);
    form.append("engine_capacity", formData.engine_capacity);
    form.append("color", formData.color);
    form.append("transmission", formData.transmission);
    form.append("condition", formData.condition);
    form.append("registration_city", formData.registration_city);
    form.append("hybrid", formData.hybrid);
    form.append("fuel_type", formData.fuel_type);
    form.append("distance_covered", formData.distance_covered);
    form.append("price", formData.price);
    form.append("owner", formData.owner);
    if (isEmptyField) {
      setError("Please fill all fields before submitting.");
      return;
    }
    if (id) {
      axios
        .put(`http://localhost:8000/api/editAd/${id}/`, form)
        .then((res) => {
          console.log(res.data["msg"]);
          alert(res.data["msg"]);
        })
        .catch((err) => console.log(err));
    } else {
      console.log(formData.owner);
      axios
        .post("http://localhost:8000/api/uploadCarDetail", form)
        .then((res) => {
          console.log(res);
          alert("Your Ad added successfully");
        })
        .catch((err) => console.log(err.response?.data || err));
    }
  };

  return (
    <>
      {id && (
        <div className="relative w-[60%] h-[60%] object-cover rounded-t-lg  mx-auto pt-7 ">
          <img
            src={`http://localhost:8000${getEdit.image}`}
            className="w-full h-full rounded-lg"
          />
          <h1 className=" text-2xl font-bold pt-7 pb-2">
            {getEdit.model} {getEdit.make} {getEdit.year}
          </h1>
        </div>
      )}
      <div className={id ? "w-[60%] mx-auto mb-20" : "w-full"}>
        <div className="text-red-400 pb-4">{error}</div>

        <div className="flex gap-4 flex-col md:flex-row justify-between">
          <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
            <label
              htmlFor="model2"
              className="text-sm font-medium text-gray-500"
            >
              Model
            </label>
            <input
              id="model2"
              type="text"
              value={formData.model}
              onChange={(e) =>
                setFormData({ ...formData, model: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
            />
          </div>

          <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
            <label
              htmlFor="make2"
              className="text-sm font-medium text-gray-500"
            >
              Make
            </label>
            <input
              id="make2"
              type="text"
              value={formData.make}
              onChange={(e) =>
                setFormData({ ...formData, make: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.vehicle_type}
              onChange={(e) =>
                setFormData({ ...formData, vehicle_type: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.engine_capacity}
              onChange={(e) =>
                setFormData({ ...formData, engine_capacity: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
            />
          </div>

          <div className="flex items-center justify-between  w-[45%] mb-2  border-b border-gray-300">
            <label
              htmlFor="color"
              className="text-sm font-medium text-gray-500"
            >
              Color
            </label>
            <input
              id="color"
              type="text"
              value={formData.color}
              onChange={(e) =>
                setFormData({ ...formData, color: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.transmission}
              onChange={(e) =>
                setFormData({ ...formData, transmission: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.condition}
              onChange={(e) =>
                setFormData({ ...formData, condition: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.registration_city}
              onChange={(e) =>
                setFormData({ ...formData, registration_city: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
            />
          </div>

          {/* Hybrid Select */}
          <div className="flex items-center justify-between  w-[45%]  mb-2  border-b border-gray-300">
            <label
              htmlFor="hybrid"
              className="text-sm font-medium text-gray-500"
            >
              Hybrid
            </label>
            <select
              id="hybrid"
              value={formData.hybrid}
              onChange={(e) =>
                setFormData({ ...formData, hybrid: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
              value={formData.fuel_type}
              onChange={(e) =>
                setFormData({ ...formData, fuel_type: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
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
                value={formData.distance_covered}
                onChange={(e) =>
                  setFormData({ ...formData, distance_covered: e.target.value })
                }
                className="border-none focus:outline-none bg-white"
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
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="border-none focus:outline-none bg-white"
            />
            <span className="text-sm text-gray-500">PKR</span>
          </div>
        </div>
        {!id && (
          <div className="flex pt-4">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              placeholder="Choose File"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="border-none  bg-gray-200"
            />
          </div>
        )}

        <button
          className="bg-purple-700 w-full mt-4 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-200"
          onClick={handleFormSubmission}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
