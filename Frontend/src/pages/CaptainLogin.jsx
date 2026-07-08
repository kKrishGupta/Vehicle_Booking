import React,{useState, useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/uber-driver.png"; // Replace with your logo path
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext.jsx";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    const response = axios.post(`${import.meta.env.VITE_API_BASE_URL}/captains/login`, captainData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        navigate("/captain-home");
      } else {
        alert("Login failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Login Failed");
    });
  }
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white p-7">

      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Uber"
          className="w-20 mb-10"
        />

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              What's your email?
            </h3>

            <input
              type="email"
              required
              placeholder="email@example.com"
              className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-lg outline-none border focus:border-black transition"
              value={email}
              onChange={(e) => (setEmail(e.target.value))}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Enter your password
            </h3>

            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full bg-[#eeeeee] rounded-lg px-4 py-3 text-lg outline-none border focus:border-black transition"
              value={password}
              onChange={(e) => (setPassword(e.target.value))}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-neutral-900 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Join a fleet with us?{" "}
          <Link
            to="/captain-signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      {/* Bottom Button */}
      <div className="mb-5">
        <Link
          to="/user-login"
          className="block w-full text-center bg-orange-900 hover:bg-orange-800 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
        >
          Sign in as User
        </Link>
      </div>
            

    </div>
  );
};

export default CaptainLogin;