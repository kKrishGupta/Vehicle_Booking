import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-driver.png";

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
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              required
            />

          </div>

          {/* Email */}

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Password */}

          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
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
                name="color"
                placeholder="Vehicle Color"
                value={formData.vehicle.color}
                onChange={handleChange}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              >
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                name="plate"
                placeholder="Plate Number"
                value={formData.vehicle.plate}
                onChange={handleChange}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

              <input
                type="number"
                name="capacity"
                placeholder="Capacity"
                value={formData.vehicle.capacity}
                onChange={handleChange}
                className="bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                required
              />

            </div>

          </div>

          <button
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