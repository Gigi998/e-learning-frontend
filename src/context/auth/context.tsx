import { createContext, useContext } from 'react';
import { AuthContext as AuthContextType } from './type';

export const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
