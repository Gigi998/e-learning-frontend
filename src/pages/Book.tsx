import { useEffect, useState } from 'react';
import { useBookContext } from '../context/books/context';
import BookItem from '../components/App/Book/BookItem/BookItem';
import AddBookForm from '../components/App/Book/AddBookForm/AddBookForm';
import { DEFAULT_BOOKS_TAKE } from '../types/types';

const Book = () => {
  const { books, fetchAllBooks } = useBookContext();

  const [isAvailable, setIsAvailable] = useState(true);

  const toggleAvailable = () => {
    setIsAvailable((prev) => !prev);
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    fetchAllBooks(isMounted, controller, DEFAULT_BOOKS_TAKE, isAvailable ? 'true' : 'false');
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isAvailable]);

  return (
    <section className="main-page">
      <div className="flex lg:flex-row  items-center justify-between flex-col">
        <h2 className="lg:text-4xl lg:mr-5 text-2xl">
          {!isAvailable ? 'These are the all books we have!' : 'Available books'}
        </h2>
        <button
          className="bg-slate-200 h-10 p-3 flex items-center mt-3 hover:scale-110 ease-linear duration-300 hover:bg-slate-300"
          onClick={toggleAvailable}
        >
          {isAvailable ? 'Show all books' : 'Show available books'}
        </button>
      </div>
      <div className="flex items-center flex-col w-full">
        {!isAvailable && <AddBookForm />}
        <div className="w-full">
          {books?.map((book) => (
            <BookItem book={book} isAvailable={isAvailable} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Book;
