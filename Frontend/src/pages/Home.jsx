import React,{useState ,useRef} from 'react'
import logo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import map from "../assets/map.jpg";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { FiChevronDown } from "react-icons/fi";
import LocationPanel from '../components/LocationPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingforDriver from '../components/lookingforDriver';
import WaitForDriver from '../components/WaitForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination , setDestination] = useState('');
  const[panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmPanelRide = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vehiclePanel,setVehiclePanel] = useState(false);
  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const[vehicleFound, setVehicleFound] = useState(false);
  const[waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) =>{
    e.preventDefault();
  }
  useGSAP(function(){
    if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:24
      // opacity:1
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
  }else{
     gsap.to(panelRef.current,{
      height:'0%',
      padding:0
      // opacity:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
  }
  },[panelOpen,panelCloseRef])

  useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
  }, [ vehiclePanel ]);


  useGSAP(function () {
    if (confirmRidePanel) {
        gsap.to(confirmPanelRide.current, {
            transform: 'translateY(0)'
        })
    }else{
      gsap.to(confirmPanelRide.current, {
        transform: 'translateY(100%)'
    })
    }
  },[confirmRidePanel]);

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(() => {
  if (waitingForDriver) {
    gsap.to(waitingForDriverRef.current, {
      transform: "translateY(0%)",
      duration: 0.3,
    });
  } else {
    gsap.to(waitingForDriverRef.current, {
      transform: "translateY(100%)",
      duration: 0.3,
    });
  }
}, [waitingForDriver]);


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className = 'w-16 absolute left-5 top-5'src={logo} alt="" />
      <div onClick={() =>{
        setVehiclePanel(false)
      }} className='h-screen w-full '>
        <img className='w-full h-full object-cover'src={map} alt="" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
       
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick = {() => {setPanelOpen(!panelOpen)}} className='absolute right-6 top-6 text-2xl'><FiChevronDown size={26} className="text-black" /> </h5>
          <h4 className='text-2xl font-semibold'>Find a trip </h4>
        <form onSubmit = {(e) =>{
          submitHandler(e);
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-black rounded-full "></div>
          <input value={pickup} onChange={(e) => setPickup(e.target.value)} onClick={() => {setPanelOpen(true)}} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />

          <input value={destination} onChange={(e) => setDestination(e.target.value)} className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>

        <div ref={panelRef} className='h-0 bg-white '>
          <LocationPanel panelOpen ={panelOpen} setPanelOpen = {setPanelOpen} vehiclePanel = {vehiclePanel} setVehiclePanel = {setVehiclePanel}/>
        </div>


      </div>

{/* Vehicle Panel  */}
    <div ref={vehiclePanelRef} className="fixed bottom-0 translate-y-full left-0 w-full bg-white rounded-t-3xl shadow-2xl px-3 py-10 pt-12 z-10">
      <VehiclePanel
        setVehiclePanel={setVehiclePanel}
        setConfirmRidePanel={setConfirmRidePanel}
        vehiclePanel={vehiclePanel}
      />
    </div>


{/* ride confirmed */}
  <div ref={confirmPanelRide} className="fixed bottom-0 translate-y-full left-0 w-full bg-white rounded-t-3xl shadow-2xl px-3 py-6 pt-12 z-10">
    
    <ConfirmRide
    setConfirmRidePanel={setConfirmRidePanel}
    confirmRidePanel={confirmRidePanel}
    setVehicleFound={setVehicleFound}
  />
  </div>


  {/* seaching for rides */}
  <div ref={vehicleRef} className="fixed bottom-0 translate-y-full left-0 w-full bg-white rounded-t-3xl shadow-2xl px-3 py-6 pt-12 z-10">
    <LookingforDriver
    setVehicleFound={setVehicleFound}
/>
    
  </div>

  {/* drivers deatils */}
   <div ref={waitingForDriverRef} className="fixed bottom-0  left-0 w-full bg-white rounded-t-3xl shadow-2xl px-3 py-6 pt-12 z-10">
   <WaitForDriver
    waitingForDriver={waitingForDriver}
    setWaitingForDriver={setWaitingForDriver}
    />
  </div>


    </div>
  )
}

export default Home
