import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Start = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDPM7crlb2spSPlTmbIk4_fMwz7bk9k2rLLEMgVRiqq40AM4k3Pok6Ijc&s=10"
        alt="Background"
      />

      {/* Uber Logo */}
      <img
        className="absolute top-8 left-8 w-24 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Bottom Card */}
  <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl p-7 z-10 shadow-2xl">

  <h2 className="text-[34px] font-bold leading-tight text-gray-900">
    Get Started with Uber
  </h2>

  <p className="text-gray-500 mt-2 mb-7">
    Ride anywhere. Anytime.
  </p>

  <Link
    to="/user-login"
    className="group flex items-center justify-between w-full bg-black px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-neutral-800"
  >
    <span className="text-white text-lg font-semibold">
      Continue
    </span>

    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
      <FaArrowRightLong className="text-black text-lg" />
    </div>
  </Link>

  </div>

    </div>
  );
};

export default Start;