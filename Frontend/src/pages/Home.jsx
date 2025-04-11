import React, { useState, useEffect, useContext, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [vechiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(true)

  const [pickupSuggestions, setPickupSuggestions] = useState(null);
  const [destinationSuggestions, setDestinationSuggestions] = useState(null)
  const [activeField, setActiveField] = useState(null)
  const [fare, setFare] = useState({ car: '', bike: '', auto: '' });
  const [vehicleType, setVehicleType] = useState(null)



  const panelRef = useRef(null)
  const panelCLoseRef = useRef(null);
  const vechiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id })
  }, [user])

  socket.on('ride-confirmed', ride => {


    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
  })

  socket.on('ride-started', ride => {
    console.log("ride")
    setWaitingForDriver(false)
    navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
  })




  const submitHandler = (e) => {
    e.preventDefault()

  }
  // console.log(localStorage.getItem('token'));

  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { address: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      })
      setPickupSuggestions(response.data)
    } catch {

    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { address: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch {
      // handle error
    }
  }

  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })


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

  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    console.log(response.data);


    setFare(response.data)


  }




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


  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])



  return (
    <div className='h-full relative overflow-hidden'>

      <div className=" w-16 absolute top-0 left-0  text-black font-bold text-2xl p-5 z-10 hidden">
        Raahi...
      </div >

      <div className='h-screen relative translate-y-[-10%] '  >
        <img src="https://www.oreilly.com/api/v2/epubs/9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="background" />
      </div>

      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] bg-white p-6 '>

          <h5 className='absolute opacity-0 right-6 top-6 text-2xl' ref={panelCLoseRef} onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className='text-3xl font-semibold'>Find Your Trip</h4>

          <form onSubmit={(e) => submitHandler(e)}>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              onChange={handlePickupChange}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup Location'>
            </input>

            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a drop Location'>
            </input>
          </form>
          <button
            onClick={findTrip}
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
            Find Trip
          </button>

        </div>

        <div ref={panelRef} className='h-0  bg-white' >
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            // setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>


      <div ref={vechiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <VehiclePanel selectVehicle={setVehicleType} fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <ConfirmRide
          createRide={createRide}
          setConfirmRidePanel={setConfirmRidePanel}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <LookingForDriver

          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10 translate-y-full bg-white bottom-0  px-3 py-10 pt-14'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>







    </div >
  )
}

export default Home