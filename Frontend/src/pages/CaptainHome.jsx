import { useGSAP } from '@gsap/react'
import React, { useRef, useState, useContext, useEffect } from 'react'
import CaptainDetails from '../components/CaptainDetails';
import { Link } from 'react-router-dom';
import RidePopUp from './../components/RidePopUp';
import gsap from 'gsap';
import ConfirmRideCaptain from '../components/ConfirmRideCaptain';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainHome = () => {

  const [RidePopupPanel, setRidePopupPanel] = useState(true)
  const [ConfirmRidePopup, setConfirmRidePopup] = useState(true)

  const RidePopupPanelRef = useRef(null)
  const ConfirmRidePopupRef = useRef(null)

  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain'
    })
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          })
        })
      }
    }
    const locationInterval = setInterval(updateLocation, 10000)
    updateLocation()

    // return () => clearInterval(locationInterval)
  }, [])

  socket.on('new-ride', (data) => {

    setRide(data)
    setRidePopupPanel(true)

  })


  useGSAP(function () {
    if (RidePopupPanel) {
      gsap.to(RidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(RidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [RidePopupPanel])


  useGSAP(function () {
    if (ConfirmRidePopup) {
      gsap.to(ConfirmRidePopupRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(ConfirmRidePopupRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ConfirmRidePopup])


  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-lg'>
        <i className='text-lg font-medium ri-logout-box-r-line'></i>
      </Link>

      <div className='h-5/6'>
        <img className='h-full w-full object-cover' src="https://www.oreilly.com/api/v2/epubs/9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="background" />
      </div>

      <div className='h-1/6 p-6'>
        <CaptainDetails />
      </div>

      <div ref={RidePopupPanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopup={setConfirmRidePopup} />
      </div>

      <div ref={ConfirmRidePopupRef} className='fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <ConfirmRideCaptain setRidePopupPanel={setRidePopupPanel} setConfirmRidePopup={setConfirmRidePopup} />
      </div>

    </div>
  )
}

export default CaptainHome