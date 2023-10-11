import { useContext, createContext } from 'react';
import { BookContext as BookContextType } from './types';

export const BookContext = createContext({} as BookContextType);

export const useBookContext = () => {
  return useContext(BookContext);
};
