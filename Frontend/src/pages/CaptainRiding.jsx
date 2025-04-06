import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import FinishRide from '../components/FinishRide'


const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)

  const finishRidePanelRef = useRef(null)


  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])


  return (
    <div className='h-screen flex flex-col justify-end'>
      <div className="h-screen w-16 absolute top-0 left-0  text-black font-bold text-2xl p-5 z-10 hidden">
        Raahi...
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full '>
        </Link>
      </div >

      <div className='h-4/5 relative translate-y-[-10%] '  >
        <img  src="https://www.oreilly.com/api/v2/epubs/9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="background" />
      </div>

      <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
                onClick={() => { setFinishRidePanel(true)}}>
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {
                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-50 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 h-[85vh] '>
                <FinishRide
                    setFinishRidePanel={setFinishRidePanel} />
            </div>


        </div>
    )
}

export default CaptainRiding