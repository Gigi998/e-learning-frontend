import { Books } from '../../types/booksTypes';

export type BookContext = {
  books: Books[];
  setBooks: (value: React.SetStateAction<Books[]>) => void;
  deleteBook: (value: string) => void;
  addNewBook: (value: string) => void;
  fetchAllBooks: (val: boolean, cont: AbortController, isTaken?: any) => void;
  issueBook: (studentId: string, bookId: string) => void;
  returnBook: (studentId?: string, bookId?: string) => void;
};
