import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>

      <h5 className=' mt-1 text-center w-[93%] absolute top-0'
        onClick={() => { props.setVehicleFound(false) }}>
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-fill" ></i>
      </h5>

      <h3 className='text-2xl font-semibold mb-5'>Looking for Driver</h3>

      <div className='flex flex-col justify-between items-center'>
        <img className='h-20' src="https://us-ride.com/wp-content/uploads/2021/09/RIDE-X-min-300x169.png" alt=""></img>

        <div className='w-full mt-3'>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-bold'>563-B/62 </h3>
              <p className='text-sm text-gray-600'>{props.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
            <i className='text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-bold'>563-B/62 </h3>
              <p className='text-sm text-gray-600'>{props.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 '>
            <i className='text-lg ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-bold'>₹{props.fare[props.vehicleType]}</h3>
              <p className='text-sm text-gray-600'>Pay by Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver