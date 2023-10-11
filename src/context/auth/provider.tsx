import { ReactNode, useState } from 'react';
import { AuthContext } from './context';

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState({ email: '', accessToken: '' });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
