import { useState, ReactNode } from 'react';
import useAddAccToken from '../../hooks/useAddAccToken';
import axios from 'axios';
import { axiosStud, axiosBook } from '../../utils/url';
import { useNavigate } from 'react-router-dom';
import { StudentType, AddStudent, UpdateStudentType } from '../../types/studentTypes';
import { StudentContext } from './context';
import { CustomAbortController } from '../types';

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const axiosToken = useAddAccToken(axiosStud);
  const navigate = useNavigate();
  const [students, setStudents] = useState<StudentType[]>([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [singleStud, setSingleStud] = useState<StudentType | undefined>(undefined);
  const [isUpdate, setIsUpdate] = useState(false);

  const getAllStudents = async (isMounted: boolean, controller: CustomAbortController) => {
    try {
      const response = await axiosToken.get('', {
        signal: controller.signal,
      });
      isMounted && setStudents(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if ((error.name = 'CanceledError')) {
          return;
        }
      } else {
        console.log(error);
        navigate('/auth', { state: { from: location }, replace: true });
      }
    }
  };

  const addStudent = async ({ name, email }: AddStudent) => {
    try {
      await axiosToken.post('', {
        name: name,
        email: email,
      });
      setSuccessMsg(`New student ${name} added!`);
    } catch (error) {
      setErrorMsg('Error');
      console.log(error);
    }
  };

  const deleteStudent = async (id: string) => {
    try {
      await axiosToken.delete('', {
        data: {
          id: id,
        },
      });
      setStudents((prev) => prev?.filter((i) => i.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleStudent = async (id: string) => {
    try {
      const response = await axiosToken.get(`/${id}`);
      setSingleStud(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async ({ id, name, email }: UpdateStudentType) => {
    try {
      const result = await axiosToken.patch(`/${id}`, {
        name,
        email,
      });
      setSingleStud({ ...result.data });
      setIsUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StudentContext.Provider
      value={{
        students,
        getAllStudents,
        addStudent,
        errorMsg,
        setErrorMsg,
        successMsg,
        setSuccessMsg,
        deleteStudent,
        getSingleStudent,
        singleStud,
        updateStudent,
        isUpdate,
        setIsUpdate,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
