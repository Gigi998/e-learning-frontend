import { useState } from 'react';
import axiosInstance from '../utils/url';
import axios from 'axios';
import { Endpoints } from '../types/types';

const useRegister = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async ({ email, pwd }: { email: string; pwd: string }) => {
    try {
      await axiosInstance.post(Endpoints.REGISTER, JSON.stringify({ email, pwd }));
      setEmail('');
      setPwd('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 409) {
          setError('Email already in use');
        }
      } else {
        setError('Server error');
      }
    }
  };

  return { email, setEmail, pwd, setPwd, handleRegister, error, setError };
};

export default useRegister;
