import { useState } from 'react';
import axios from '../utils/url';
import { useAuthContext } from '../context/auth/context';
import { useNavigate, useLocation } from 'react-router-dom';
import { Endpoints } from '../types/types';

const useLog = () => {
  const { setAuth } = useAuthContext();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const handleLogin = async ({ email, pwd }: { email: string; pwd: string }) => {
    try {
      const response = await axios.post(Endpoints.LOGIN, JSON.stringify({ email, pwd }));
      setAuth({ email, accessToken: response?.data?.accessToken });
      setEmail('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Error');
    }
  };

  const handleLogout = async () => {
    setAuth({ email: '', accessToken: '' });
    try {
      await axios.get(Endpoints.LOGOUT);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    pwd,
    setPwd,
    handleLogin,
    error,
    setError,
    handleLogout,
  };
};

export default useLog;
