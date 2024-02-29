import { Books } from './booksTypes';

export type StudentType = {
  id: string;
  name: string;
  email: string;
  books?: Books[];
};

export type AddStudent = {
  name: string;
  email: string;
};

export type UpdateStudentType = {
  id: string;
  name: string;
  email: string;
};
