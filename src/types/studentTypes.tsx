export type StudentBookType = {
  id: string;
  title: string;
};

export type StudentType = {
  id: string;
  name: string;
  email: string;
  studentBook: StudentBookType;
  studentBookId: string | null;
};

export type AddStudent = {
  name: string;
  email: string;
};

export type IssueBookType = {
  studentId: string;
  bookId: string;
};

export type UpdateStudentType = {
  id: string;
  name: string;
  email: string;
};
