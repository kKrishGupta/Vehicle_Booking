import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-logo.png";

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-7">

      <div>
        {/* Logo */}
        <img
          src={logo}
          alt="Uber"
          className="w-20 mb-10"
        />

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First & Last Name */}
          <div className="flex gap-4">

            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-2">
                First Name
              </h3>

              <input
                type="text"
                name="firstName"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 border outline-none focus:border-black"
              />
            </div>

            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-2">
                Last Name
              </h3>

              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 border outline-none focus:border-black"
              />
            </div>

          </div>

          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              What's your email?
            </h3>

            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 border outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Create Password
            </h3>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-lg px-4 py-3 border outline-none focus:border-black"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-neutral-900 transition"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/user-login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Captain Button */}
      <div className="mb-5">
        <Link
          to="/captain-signup"
          className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-lg font-semibold transition-all"
        >
          Register as Captain
        </Link>
      </div>

    </div>
  );
};

export default UserSignUp;