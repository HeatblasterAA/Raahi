import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const logoutCaptain = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/logout`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                
                if (response.status === 200) {
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Logout error:', error);
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        logoutCaptain();
    }, [navigate]);

    return null; // No need to render anything during logout
};

export default CaptainLogout;