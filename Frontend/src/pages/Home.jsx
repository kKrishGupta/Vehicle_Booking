import React,{useState} from 'react'
import logo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import map from "../assets/map.jpg";

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination , setDestination] = useState('');
  const[panelOpen, setPanelOpen] = useState(false);
  const submitHandler = (e) =>{
    e.preventDefault();
  }
  return (
    <div className='h-screen relative'>
      <img className = 'w-16 absolute left-5 top-5'src={logo} alt="" />
      <div className='h-screen w-full '>
        <img className='w-full h-full object-cover'src={map} alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
       
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-2xl font-semibold'>Find a trip </h4>
        <form onSubmit = {(e) =>{
          submitHandler(e);
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full "></div>
          <input value={pickup} onChange={(e) => setPickup(e.target.value)} onClick={() => {setPanelOpen(true)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
          
          <input value={destination} onChange={(e) => setDestination(e.target.value)} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>

        <div className='h-0 bg-red-500'>

        </div>


      </div>
    </div>
  )
}

export default Home
