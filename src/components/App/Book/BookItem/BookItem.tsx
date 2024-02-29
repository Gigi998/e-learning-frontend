import { useBookContext } from '../../../../context/books/context';
import { useNavigate } from 'react-router-dom';
import { Books } from '../../../../types/booksTypes';

export interface Props {
  book: Books;
}

const BookItem = ({ book }: Props) => {
  const { deleteBook } = useBookContext();
  const navigate = useNavigate();
  return (
    <div className="w-90 h-20 bg-cyan-600 m-10 rounded-lg p-5 flex items-center justify-between">
      <h1 className="text-slate-200 lg:text-2xl text-lg ">{book.title}</h1>
      {!book.isTaken && (
        <>
          <button
            className=" hover:bg-slate-200 rounded-lg p-3 ml-auto"
            onClick={() => deleteBook(book.id)}
          >
            Delete
          </button>

          <button
            className=" hover:bg-slate-200 rounded-lg p-3"
            onClick={() =>
              navigate('/issueBook', {
                state: { bookId: book.id, title: book.title },
              })
            }
          >
            Issue
          </button>
        </>
      )}
    </div>
  );
};

export default BookItem;
