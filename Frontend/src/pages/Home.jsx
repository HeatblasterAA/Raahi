import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.pexels.com/photos/30832768/pexels-photo-30832768/free-photo-of-moody-urban-street-in-downtown-seattle-at-twilight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] h-screen pt-8 flex justify-between flex-col w-full  '>
        <h1 className='text-[23px] text-white font-semibold ml-4 '>Raahi...</h1>
        <div className='bg-white pb-8 py-4 px-4 rounded-t-xl'>
          <h2 className='px-4 text-[28px] font-semibold'>Get Started with Raahi</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-[#2e2d2d] text-white  py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home