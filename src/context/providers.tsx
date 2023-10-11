import { BookContextProvider } from './books/provider';
import { AuthContextProvider } from './auth/provider';
import { StudentProvider } from './students/provider';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => (
  <AuthContextProvider>
    <StudentProvider>
      <BookContextProvider>{children}</BookContextProvider>
    </StudentProvider>
  </AuthContextProvider>
);
