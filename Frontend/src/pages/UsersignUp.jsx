import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/uber-logo.png";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/register`, newUser);
    if (response.status === 201) {
     const data = response.data;
    localStorage.setItem("token", data.token);
    setUser(data.user);
    navigate("/user-home");
    } else {
      alert("Registration failed. Please try again.");
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
   <div className="min-h-screen bg-white flex justify-center">
  <div className="w-full max-w-md px-7 py-8 flex flex-col justify-between">

    {/* Logo */}
    <img
      src={logo}
      alt="Uber"
      className="w-20 mb-8"
    />

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Create your account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-base font-semibold mb-2">
            What's your name?
          </label>

          <div className="flex gap-3">

            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-1/2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-1/2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
            />

          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-base font-semibold mb-2">
            What's your email?
          </label>

          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-base font-semibold mb-2">
            Create Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Minimum 8 characters"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 outline-none transition-all focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-black py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-neutral-900 active:scale-[0.98]"
        >
          Create Account
        </button>

      </form>

      {/* Disclaimer */}
      <p className="mt-5 text-xs leading-5 text-gray-500">
        By proceeding, you consent to receive calls, WhatsApp or SMS messages,
        including by automated means, from Uber and its affiliates to the
        number provided.
      </p>

      {/* Login */}
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to="/user-login"
          className="font-semibold text-black hover:underline"
        >
          Login
        </Link>
      </p>

    </div>

  </div>
</div>
  );
};

export default UserSignUp;