import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-logo.png";

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
    },
    vehicleType: "car",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["color", "plate", "capacity"].includes(name)) {
      setFormData({
        ...formData,
        vehicle: {
          ...formData.vehicle,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      vehicle: {
        color: "",
        plate: "",
        capacity: "",
      },
      vehicleType: "car",
    });
  };

  return (
    <div className="min-h-screen bg-white p-7 flex flex-col justify-between">

      <div>
        <img
          src={logo}
          alt="Uber"
          className="w-20 mb-8"
        />

        <h1 className="text-3xl font-bold mb-6">
          Captain Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div className="flex gap-4">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 bg-gray-100 rounded-lg px-4 py-3 border"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 bg-gray-100 rounded-lg px-4 py-3 border"
              required
            />

          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
            required
          />

          <hr />

          <h2 className="text-xl font-semibold">
            Vehicle Information
          </h2>

          {/* Vehicle Color */}
          <input
            type="text"
            name="color"
            placeholder="Vehicle Color"
            value={formData.vehicle.color}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
            required
          />

          {/* Plate Number */}
          <input
            type="text"
            name="plate"
            placeholder="Vehicle Plate Number"
            value={formData.vehicle.plate}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
            required
          />

          {/* Capacity */}
          <input
            type="number"
            name="capacity"
            placeholder="Vehicle Capacity"
            value={formData.vehicle.capacity}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
            required
          />

          {/* Vehicle Type */}
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-3 border"
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-neutral-900 transition"
          >
            Create Captain Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/captain-login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>

      <div className="mb-5">
        <Link
          to="/user-signup"
          className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-semibold transition"
        >
          Register as User
        </Link>
      </div>

    </div>
  );
};

export default CaptainSignup;