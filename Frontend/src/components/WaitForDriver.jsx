import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import car from "../assets/car.jpg";
import { MapPin } from "lucide-react";
import { FaMoneyBillWave } from "react-icons/fa";


const WaitForDriver = (props) => {
  return (
    <div className="relative bg-white rounded-t-3xl px-5 pt-8 pb-5">

      {/* Drag Handle */}
      <div
        onClick={() => props.setWaitingForDriver(false)}
        className="absolute top-2 left-0 w-full flex justify-center cursor-pointer"
      >
        <FiChevronDown size={26} className="text-gray-500" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-5">
        Meeting at a point
      </h2>

      {/* Pickup */}
      <div className="flex items-center gap-4 py-4 border-t border-gray-200">
        <MapPin size={20} className="text-black" />

        <div>
          <h3 className="font-semibold text-base">
            562/11-A
          </h3>

          <p className="text-sm text-gray-500">
            Kankariya Talav, Bhopal
          </p>
        </div>
      </div>

      {/* Destination */}
      <div className="flex items-center gap-4 py-4 border-t border-gray-200">
        <MapPin size={20} className="text-black" />

        <div>
          <h3 className="font-semibold text-base">
            562/11-A
          </h3>

          <p className="text-sm text-gray-500">
            Kankariya Talav, Bhopal
          </p>
        </div>
      </div>

      {/* Fare */}
      <div className="flex items-center gap-4 py-4 border-y border-gray-200">
        <FaMoneyBillWave
          size={18}
          className="text-black"
        />

        <div>
          <h3 className="font-semibold text-base">
            ₹193.20
          </h3>

          <p className="text-sm text-gray-500">
            Cash Cash
          </p>
        </div>
      </div>

      {/* Confirm Button */}
      {/* <button className="w-full mt-6 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold py-3 rounded-md transition">
        Confirm
      </button> */}

    </div>
  )
}

export default WaitForDriver
