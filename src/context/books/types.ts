import { Books } from '../../types/booksTypes';

export type BookContext = {
  books: Books[];
  setBooks: (value: React.SetStateAction<Books[]>) => void;
  availableBooks: Books[];
  deleteBook: (value: string) => void;
  addNewBook: (value: string) => void;
  fetchAllBooks: (val: boolean, cont: AbortController) => void;
  isAvailable: boolean;
  toggleAvailable: () => void;
  getAvailableBooks: () => void;
};
