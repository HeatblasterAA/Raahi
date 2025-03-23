import React, {
  useContext,
  useState,
} from 'react';

import axios from 'axios';
import {
  Link,
  useNavigate,
} from 'react-router-dom';

import { UserDataContext } from '../context/UserContext';

const UserLogin = () => {
  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})


  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status===200) {
      const data = response.data;
      setUser(data.user)
      navigate('/home');
    }

    setEmail('')
    setPassword('')
  }

  return (

    <div className='p-7 h-screen flex flex-col justify-between'>
      <div className='pt-4 '>
        <h1 className=' text-center text-[25px] text-[#000000] font-semibold '>Raahi</h1>

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
        
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link
          to='/captain-login'
          className='bg-[#089d53] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 w-full text-lg placeholder:text-base'>
            Sign in as Captain
        </Link>
      </div>
      

      
    </div>
  )
}

export default UserLogin