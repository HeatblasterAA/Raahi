import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null)
  const panelCLoseRef = useRef(null);


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
      }


      );

      gsap.to(panelCLoseRef.current, {
        opacity: panelOpen ? 1 : 0
      })
    }
  }, [panelOpen]);

  return (
    <div className='h-full relative overflow-hidden'>
      <div className="absolute top-0 left-0  text-black font-bold text-2xl p-5 z-10">
        Raahi...
      </div>
      {/* <b className='w-16 absolute left-5 top-5' >Raahi..</b> */}


      {/* THE IMAGE DIV BELOW ISNT WORKING */}

      <div className='h-screen relative '>

        {/* temp Image Use */}
        <img src="https://media.istockphoto.com/id/1311247904/photo/uber-car-waiting-for-customer.jpg?s=2048x2048&w=is&k=20&c=Nlf7iZGxSKc6ro-KUzr7cwii373QqfjVwijkhnNUntI=" alt="background" />


      </div>
      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] bg-white p-6 '>
          <h5 className='absolute opacity-0 right-6 top-6 text-2xl' ref={panelCLoseRef} onClick={() => setPanelOpen(false)}>
            <i class="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find Your Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <input onClick={() => {
              setPanelOpen(true)
            }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pickup Location'></input>
            <input onClick={() => {
              setPanelOpen(true)
            }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Add a drop Location'></input>
          </form>
        </div>

        <div ref={panelRef} className='h-0  bg-white' >
          <LocationSearchPanel />
        </div>
      </div>


    </div >
  )
}

export default Home