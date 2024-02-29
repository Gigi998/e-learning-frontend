import { StudentType, AddStudent, UpdateStudentType } from '../../types/studentTypes';
import { CustomAbortController } from '../types';

export type StudentContext = {
  students: StudentType[];
  errorMsg: string;
  successMsg: string;
  singleStud: StudentType | undefined;
  isUpdate: boolean;
  getAllStudents: (isMounted: boolean, controller: CustomAbortController) => void;
  addStudent: ({ name, email }: AddStudent) => void;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
  deleteStudent: (id: string) => void;
  getSingleStudent: (id: string) => void;
  updateStudent: ({ id, name, email }: UpdateStudentType) => void;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};
