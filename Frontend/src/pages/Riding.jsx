import React from "react";
import { Link } from "react-router-dom";
import map from "../assets/map.jpg"
import { FiChevronDown } from "react-icons/fi";
import car from "../assets/car.jpg";
import { MapPin } from "lucide-react";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const Riding = () => {
  return (
    <div className='h-screen w-full 
    overflow-hidden'>
      <Link
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        to="/user-home"
      >
        <IoHome className='text-lg font-medium '/>
      </Link>

      <div className='h-1/2'>
        <img className='w-full h-full object-cover' src={map} alt="Map" />
      </div>

      <div className='h-1/2'>
      

      {/* Pickup */}
      

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

      <button className="w-full mt-6 bg-[#4CAF50] hover:bg-[#43A047] text-white font-semibold py-3 rounded-md transition">Make a payment</button>

      </div>
    </div>
  )
}

export default Riding
