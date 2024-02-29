import { ReactNode, useState } from 'react';
import axios from 'axios';
import useAddAccToken from '../../hooks/useAddAccToken';
import { useNavigate } from 'react-router-dom';
import { axiosBook } from '../../utils/url';
import { Books } from '../../types/booksTypes';
import { BookContext } from './context';
import { CustomAbortController } from '../types';

export const BookContextProvider = ({ children }: { children: ReactNode }) => {
  const axiosToken = useAddAccToken(axiosBook);
  const navigate = useNavigate();
  const [books, setBooks] = useState<Books[]>([]);

  const fetchAllBooks = async (
    isMounted: boolean,
    controller: CustomAbortController,
    isTaken?: boolean
  ) => {
    try {
      const result = await axiosToken.get('', {
        signal: controller.signal,
        params: {
          isTaken,
        },
      });
      isMounted && setBooks(result.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if ((error.name = 'CanceledError')) {
          return;
        }
      } else {
        console.log(error);
        navigate('/auth', {
          state: { from: location },
          replace: true,
        });
      }
    }
  };

  const deleteBook = async (id: string) => {
    try {
      await axiosToken.delete('', {
        data: {
          id: id,
        },
      });
      setBooks((prev) => prev?.filter((b) => b.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addNewBook = async (title: string) => {
    try {
      const newBook = await axiosToken.post('', {
        title: title,
      });
      setBooks((prev) => [...prev, newBook.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        deleteBook,
        addNewBook,
        fetchAllBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
