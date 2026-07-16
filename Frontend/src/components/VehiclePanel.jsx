import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import car from "../assets/car.jpg";
import bike from "../assets/bike.jpg"
import auto from "../assets/auto.jpg";
import { FaUser } from "react-icons/fa";

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() =>{
      props.setVehiclePanel(false)
    }}className="absolute top-0 left-0 w-[93%] py-3 flex justify-center  items-center">
    <FiChevronDown size={26} className="text-gray-200" />
    </h5>
  <h2 className="text-2xl font-bold tracking-tight text-black">
  Choose a Vehicle
</h2>

{/* car */}
  <div onClick={() =>{
    props.setConfirmRidePanel(true)
  }} className="flex items-center justify-between border border-gray-600 rounded-2xl p-3 hover:bg-gray-50 transition mt-3">

    {/* Car Image */}
    <img
      src={car}
      alt="Car"
      className="h-14 w-20 object-contain"
    />

    {/* Ride Details */}
    <div className="flex-1 ml-4">
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        UberGo
        <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
          <FaUser className="text-xs" />
          4
        </span>
      </h4>

      <h5 className="text-sm font-medium text-gray-800 mt-1">
        2 min away
      </h5>

      <p className="text-xs text-gray-500 mt-1">
        Affordable, compact rides
      </p>
    </div>

    {/* Price */}
    <div className="text-right">
      <h2 className="text-2xl font-bold text-gray-900">
        ₹193.25
      </h2>
    </div>

    
    
  </div>

{/* bike */}
  <div onClick={() =>{
    props.setConfirmRidePanel(true)
  }} className="flex items-center justify-between border border-gray-600 rounded-2xl p-3 hover:bg-gray-50 transition mt-3">

    {/* Car Image */}
    <img
      src={bike}
      alt="bike"
      className="h-14 w-20 object-contain"
    />

    {/* Ride Details */}
    <div className="flex-1 ml-4">
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        Moto
        <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
          <FaUser className="text-xs" />
          1
        </span>
      </h4>

      <h5 className="text-sm font-medium text-gray-800 mt-1">
        3 min away
      </h5>

      <p className="text-xs text-gray-500 mt-1">
        Affordable, motorcycle rides
      </p>
    </div>

    {/* Price */}
    <div className="text-right">
      <h2 className="text-2xl font-bold text-gray-900">
        ₹65.17
      </h2>
    </div>

  </div>

  {/* auto */}
  <div onClick={() =>{
    props.setConfirmRidePanel(true)
  }} className="flex items-center justify-between border border-gray-600 rounded-2xl p-3 hover:bg-gray-50 transition mt-3">

    {/* Car Image */}
    <img
      src={auto}
      alt="auto"
      className="h-14 w-20 object-contain"
    />

    {/* Ride Details */}
    <div className="flex-1 ml-4">
      <h4 className="flex items-center gap-2 text-lg font-semibold">
        UberAuto
        <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
          <FaUser className="text-xs" />
          3
        </span>
      </h4>

      <h5 className="text-sm font-medium text-gray-800 mt-1">
        5 min away
      </h5>

      <p className="text-xs text-gray-500 mt-1">
        Affordable, Auto rides
      </p>
    </div>

    {/* Price */}
    <div className="text-right">
      <h2 className="text-2xl font-bold text-gray-900">
        ₹118 .25
      </h2>
    </div>

  </div>
    </div>
  )
}

export default VehiclePanel
