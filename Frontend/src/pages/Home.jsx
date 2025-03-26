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
  const [vechiclePanel, setVehiclePanel] = useState(false)
  const vechiclePanelRef = useRef(null);


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

  return (
    <div className='h-full relative overflow-hidden'>
      <div className=" w-16 absolute top-0 left-0  text-black font-bold text-2xl p-5 z-10">
        Raahi...
      </div >
      {/* <b className='w-16 absolute left-5 top-5' >Raahi..</b> */}


      {/* THE IMAGE DIV BELOW ISNT WORKING */}

      <div className='h-screen relative '>

        {/* temp Image Use */}
        <img src="https://media.istockphoto.com/id/1311247904/photo/uber-car-waiting-for-customer.jpg?s=2048x2048&w=is&k=20&c=Nlf7iZGxSKc6ro-KUzr7cwii373QqfjVwijkhnNUntI=" alt="background" />


      </div>
      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>

        <div className='h-[30%] bg-white p-6 '>
          <h5 className='absolute opacity-0 right-6 top-6 text-2xl' ref={panelCLoseRef} onClick={() => setPanelOpen(false)}>
            <i className="ri-arrow-down-wide-fill"></i>
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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vechiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
        <h5 className='p-1 text-center w-[93%] absolute top-0'> <i className="text-3xl text-gray-300 ri-arrow-down-wide-fill" onClick={() => { setVehiclePanel(false) }}></i></h5>

        <h3 className='text-2xl font-semibold mb-5'>Choose your ride</h3>

        <div className=' flex mb-2 p-3 z-10 items-center border-2 bg-gray-100 active:border-black border-rounded-xl  justify-between'>
          <img className='h-12' src="https://cdn.creazilla.com/cliparts/78555/taxi-clipart-lg.png" alt=""></img>
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>RaahiGo <span><i className="ri-user-line"></i>
              4
            </span>
            </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>

          </div>
          <h2 className='text-lg font-semibold'>₹195.00</h2>


        </div>

        <div className=' flex mb-2 p-3 z-10 items-center border-2 bg-gray-100 active:border-black border-rounded-xl  justify-between'>
          <img className='h-12' src="https://thumbs.dreamstime.com/b/linear-simple-motorcycle-separated-white-space-ready-to-work-easy-display-any-devices-website-113983541.jpg?w=768" alt=""></img>
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>RaahiMoto <span><i className="ri-user-line"></i>
              1
            </span>
            </h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motor rides</p>

          </div>
          <h2 className='text-lg font-semibold'>₹65.00</h2>


        </div>

        <div className=' flex mb-2 p-3 z-10 items-center border-2 bg-gray-100 active:border-black border-rounded-xl  justify-between'>
          <img className='h-12' src="https://img.freepik.com/premium-vector/auto-rickshaw-clipart-vector-art-illustration_761413-24121.jpg?w=826" alt=""></img>
          <div className=' w-1/2' >
            <h4 className='font-medium text-base'>RaahiAuto <span><i className="ri-user-line"></i>
              3
            </span>
            </h4>
            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>

          </div>
          <h2 className='text-lg font-semibold'>₹125.00</h2>


        </div>




      </div>


    </div >
  )
}

export default Home