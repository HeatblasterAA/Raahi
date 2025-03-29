import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null)
  const panelCLoseRef = useRef(null);
  const [vechiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const vechiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);


  const submitHandler = (e) => {
    e.preventDefault()

  }

  useGSAP(() => {
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        height: panelOpen ? '70%' : '0%',
        duration: 0.5,
        opacity: panelOpen ? 1 : 0,
        padding: panelOpen ? 24 : 0,
        ease: 'power2.inOut'
      })

      gsap.to(panelCLoseRef.current, {
        opacity: panelOpen ? 1 : 0
      })

    }
  }, [panelOpen]);




  useGSAP(function () {

    if (vechiclePanel) {
      gsap.to(vechiclePanelRef.current, {
        transform: 'translateY(0)'

      })
    } else {
      gsap.to(vechiclePanelRef.current, {
        transform: 'translateY(100%)'

      })
    }
  }, [vechiclePanel])



  useGSAP(function () {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])



  return (
    <div className='h-full relative overflow-hidden'>

      <div className=" w-16 absolute top-0 left-0  text-black font-bold text-2xl p-5 z-10 hidden">
        Raahi...
      </div >

      <div className='h-screen relative translate-y-[-10%] '  >
        <img  src="https://www.oreilly.com/api/v2/epubs/9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="background" />
      </div>

      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] bg-white p-6 '>

          <h5 className='absolute opacity-0 right-6 top-6 text-2xl' ref={panelCLoseRef} onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className='text-3xl font-semibold'>Find Your Trip</h4>

          <form onSubmit={(e) => submitHandler(e)}>
            <input 
              onClick={() => {setPanelOpen(true)}}
              value={pickup}
              onChange={(e) => {setPickup(e.target.value)}}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup Location'>
            </input>

            <input 
              onClick={() => {setPanelOpen(true)}}
              value={destination}
              onChange={(e) => {setDestination(e.target.value)}}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a drop Location'>
            </input>
          </form>

        </div>

        <div ref={panelRef} className='h-0  bg-white' >
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>


      <div ref={vechiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/> 
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} /> 
      </div> 




    


    </div >
  )
}

export default Home