import { useContext, createContext } from 'react';
import { StudentContext as StudentContextType } from './types';

export const StudentContext = createContext({} as StudentContextType);

export const useStudentContext = () => {
  return useContext(StudentContext);
};
