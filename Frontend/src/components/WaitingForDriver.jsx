import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className=' mt-1 text-center w-[93%] absolute top-0'
          onClick={() => { props.setWaitingForDriver(false) }}>
          <i className=" text-3xl text-gray-300 ri-arrow-down-wide-fill" ></i>
        </h5> 

        <div className='flex items-center justify-between'>
            <img className='h-16' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
            <div className='text-right'>
            <h2 className='text-lg font-medium capitalize'>Harsh Katarai</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>8244</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
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
            <div className='flex items-center gap-5 p-3 '>
              <i className='text-lg ri-currency-line'></i>
              <div>
                <h3 className='text-lg font-bold'>$193.20</h3>
                <p className='text-sm text-gray-600'>Pay by Cash</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WaitingForDriver