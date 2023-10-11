import axios from 'axios';

export default axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const axiosStud = axios.create({
  baseURL: process.env.STUD_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosBook = axios.create({
  baseURL: process.env.BOOK_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
