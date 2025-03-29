import React from 'react'
import { Link } from 'react-router-dom'
const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-lg'>
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>

      <div className='h-1/2  '  >
        <img className='h-full w-full object-cover' src="https://www.oreilly.com/api/v2/epubs/9781788623230/files/assets/8fd4ce32-21f9-409f-844a-9a1c8604e6e3.png" alt="background" />
      </div>

      <div className='h-1/2 bg-white p-5 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <img className='h-18' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium capitalize'>Harsh Katarai</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR32 8244</h4>
            <p className='text-sm text-gray-600'>Maruti suzuki benz</p>
          </div>
        </div>

        <div className='flex flex-col justify-between items-center'>
          <div className='w-full'>
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
          <button className=' mt-4 w-full bg-blue-500 text-white font-semibold p-2 rounded-lg'> Pay </button>
        </div>
      </div>


    </div>
  )
}

export default Riding