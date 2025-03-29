import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0'> <i className="text-3xl text-gray-300 ri-arrow-down-wide-fill" onClick={() => { props.setVehiclePanel(false) }}></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>Choose your ride</h3>

            <div onClick={() => { props.setConfirmRidePanel(true) }} className=' flex mb-2 p-3 z-10 items-center border-2 bg-[#f4f4f4] active:border-[#141414] rounded-xl  justify-between'>
                <img className='h-12' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Taxi_Icon.png" alt=""></img>
                <div className=' w-1/2' >
                    <h4 className='font-medium text-base'>RaahiGo <span> <i className="ri-user-line"></i> 4</span> </h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹195.00</h2>
            </div>


            <div onClick={() => { props.setConfirmRidePanel(true) }} className=' flex mb-2 p-3 z-10 items-center border-2 bg-[#f4f4f4] active:border-black rounded-xl  justify-between'>
                <img className='h-12' src="https://thumbs.dreamstime.com/b/linear-simple-motorcycle-separated-white-space-ready-to-work-easy-display-any-devices-website-113983541.jpg?w=768" alt=""></img>
                <div className=' w-1/2' >
                    <h4 className='font-medium text-base'>RaahiMoto <span><i className="ri-user-line"></i>  1</span> </h4>
                    <h5 className='font-medium text-sm'>1 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motor rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65.00</h2>
            </div>


            <div onClick={() => { props.setConfirmRidePanel(true) }} className=' flex mb-2 p-3 z-10 items-center border-2 bg-[#f4f4f4] active:border-black rounded-xl  justify-between'>
                <img className='h-12' src="https://img.freepik.com/premium-vector/auto-rickshaw-clipart-vector-art-illustration_761413-24121.jpg?w=826" alt=""></img>
                <div className=' w-1/2' >
                    <h4 className='font-medium text-base'>RaahiAuto <span><i className="ri-user-line"></i>  3</span> </h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹125.00</h2>
            </div>

        </div>
    )
}

export default VehiclePanel