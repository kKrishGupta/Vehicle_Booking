import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-driver.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext.jsx"

const CaptainSignup = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [vehicleType, setVehicleType] = useState("");
const [vehicleColor, setVehicleColor] = useState("");
const [vehiclePlate, setVehiclePlate] = useState("");
const [vehicleCapacity, setVehicleCapacity] = useState("");
const navigate = useNavigate();

const {captain, setCaptain} = useContext(CaptainDataContext);


  const handleSubmit = async (e) => {
  e.preventDefault();

  const captainData = {
    firstName,
    lastName,
    email,
    password,
    vehicle: {
      color: vehicleColor,
      plate: vehiclePlate,
      capacity: Number(vehicleCapacity),
    
    },vehicleType
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/captains/register`,
      captainData,{
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    if (response.status === 201) {
      const data = response.data;

      localStorage.setItem("token", data.token);

      setCaptain(data.captain);

      navigate("/captain-home"); // change according to your route
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert(error.response?.data?.message || "Registration Failed");
  }
};

  return (
    <div className="min-h-screen bg-white px-6 py-8 flex flex-col justify-between">

      <div>

        <img
          src={logo}
          alt="Uber"
          className="w-20 mb-8"
        />

        <h1 className="text-4xl font-bold mb-8">
          Become a Captain
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

          </div>

          {/* Email */}

          <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

          {/* Password */}

          <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

          <div className="border-t pt-6">

            <h2 className="font-semibold text-xl mb-5">
              Vehicle Details
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">

              <input
                  type="text"
                  placeholder="Vehicle Color"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                  required
                />

              <select
              required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select Vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Plate Number"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

              <input
                type="number"
                placeholder="Capacity"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

            </div>

          </div>

          <button
              type="submit"
              className="w-full bg-black text-white rounded-xl py-4 text-lg font-semibold hover:bg-neutral-900 transition"
          >
              Create Captain Account
          </button>

        </form>

        <p className="text-xs text-gray-500 leading-5 mt-5">
          By proceeding, you consent to get calls, WhatsApp or SMS
          messages, including by automated means, from Uber and its
          affiliates to the number provided.
        </p>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/captain-login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default CaptainSignup;