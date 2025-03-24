import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';
import axios from 'axios';
const UserProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      if (!token) {
          navigate('/login');
          return;
      }

      axios
          .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          })
          .then((response) => {
              if (response.status === 200) {
                  setUser(response.data.user);
                  setIsLoading(false);
              }
          })
          .catch((err) => {
              localStorage.removeItem('token');
              navigate('/captain-login');
          });
  }, [token, navigate, setUser]);

  if (isLoading) {
      return <div className="loading-spinner">Loading...</div>;
  }



  return (
    <>{children}</>
  )
}

export default UserProtectWrapper