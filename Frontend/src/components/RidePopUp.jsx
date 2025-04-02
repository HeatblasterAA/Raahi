
import React from 'react'

const RidePopUp = (props) => {
    
    return (
        <div>
            <h5 className=' mt-1 text-center w-[93%] absolute top-0'
                onClick={() => { props.setRidePopupPanel(false) }}>
                <i className=" text-3xl text-gray-300 ri-arrow-down-wide-fill" ></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-2'>New Ride Available!</h3>
            
            <div className='flex items-center justify-between p-3 rounded-lg bg-[#fcf3db] mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/girl-with-long-hair-being-happy_23-2148244714.jpg?t=st=1743596780~exp=1743600380~hmac=384a75b35d1962f414b62d5ed6fa9851b5e576f322790b92dc4c0c5050a1f79a&w=1380" alt="" />
                    <h2 className='text-lg font-medium '>Anya joe</h2>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='text-[1.1rem] font-bold'>₹193.20</h3>
                    <p className='text-sm text-gray-600'>2.2km</p>
                </div>
            </div>

            <div className='flex flex-col justify-between items-center'>
                <div className='w-full mt-3'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-bold'>563-B/62 </h3>
                            <p className='text-sm text-gray-600'>civil lines, Allahabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className='text-lg ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-bold'>563-B/62 </h3>
                            <p className='text-sm text-gray-600'>civil lines, Allahabad</p>
                        </div>
                    </div>
                    
                </div>

                <div className='flex w-screen justify-between p-3 gap-3'>
                    <button onClick={() => { props.setRidePopupPanel(false) }}
                        className=' w-full bg-gray-200 text-black font-semibold p-2 rounded-lg '> Ignore </button>
                    <button onClick={() => { props.setConfirmRidePopup(true)}}
                        className=' w-full bg-green-600 text-white font-semibold p-2 rounded-lg'> Accept </button>
                </div>
                
            </div>
        </div>
    )
}

export default RidePopUp