import React from 'react'
import { MapPin } from 'lucide-react';


const LocationPanel = (props) => {

  console.log(props);
  // sample array for locations
  const locations = ["24B, Near Kapoor\'s Cafe, Shreyains Coding School , Bhopal","22B, Near ghair's Cafe, Shreyains Coding School , Bhopal","55A, Near Malholtra's Cafe, Shreyains Coding School , Bhopal","187A, Near Sharma's Cafe, Shreyains Coding School , Bhopal"];


  return (
    <div>
      {
  locations.map((location, index) => (
    <div onClick={() =>{
      props.setVehiclePanel(true)
      props.setPanelOpen(false)
    }}
      key={index}
      className="flex gap-4 p-3 items-center rounded-xl justify-start my-2 active:border-2"
    >
      <h2 className="bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center">
        <MapPin />
      </h2>

      <h4 className="font-medium">{location}</h4>
    </div>
  ))
}
      
      
      {/* <div className='flex gap-4 p-3 items-center rounded-xl justify-start my-2 active:border-2'>
       <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><MapPin className=''/></h2> 
        <h4 className ='font-medium'>24B, Near Kapoor's Cafe, Shreyains Coding School , Bhopal </h4>
      </div>

      <div className='flex gap-4 p-3 items-center rounded-xl justify-start my-2 active:border-2'>
       <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><MapPin className=''/></h2> 
        <h4 className ='font-medium'>24B, Near Kapoor's Cafe, Shreyains Coding School , Bhopal </h4>
      </div>

      <div className='flex gap-4 p-3 items-center rounded-xl justify-start my-2 active:border-2'>
       <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'><MapPin className=''/></h2> 
        <h4 className ='font-medium'>24B, Near Kapoor's Cafe, Shreyains Coding School , Bhopal </h4>
      </div> */}

      
    </div>
  )
}

export default LocationPanel
