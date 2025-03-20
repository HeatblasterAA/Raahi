import { useState } from 'react';

import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [CaptainData, setCaptainData] = useState({})

  const submitHandler = async (e) => {
    e.preventDefault();

    const CaptainData = {
      email: email,
      password: password
    }
    // console.log(CaptainData)

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div className='pt-4 '>
        <h1 className=' text-center text-[25px] text-[#000000] font-semibold '>Raahi - Captain</h1>

        <form className='pt-6' onSubmit={(e) => submitHandler(e)}>
          {/* for email */}
          <h3 className='text-lg font-medium mb-1 ml-1'>Enter your email:</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          {/* for password */}
          <h3 className='text-lg font-medium mb-2 ml-1'>Enter Password:</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='password'
          />

          {/* for login button */}
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
        
        <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Signup as a Captain</Link></p>
      </div>

      <div>
        <Link
          to='/login'
          className='bg-[#c86330] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin