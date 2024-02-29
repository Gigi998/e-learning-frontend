import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UpdateStudentForm from '../UpdateStudentForm/UpdateStudentForm';
import { useStudentContext } from '../../../../context/students/context';
import { useBookContext } from '../../../../context/books/context';

const SingleStudent = () => {
  const { singleStud, getSingleStudent, isUpdate, setIsUpdate } = useStudentContext();

  const { returnBook } = useBookContext();

  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div className="bg-cyan-600 text-3xl">User id not provided</div>;
  }

  useEffect(() => {
    getSingleStudent(id);
  }, []);

  return (
    <div className="bg-cyan-600 rounded-lg m-10 text-2xl p-5 xl:mx-52 flex flex-col relative lg:mx-32 md:mx-16">
      {!isUpdate ? (
        <>
          <h1 className="mx-auto text-4xl">Student card</h1>
          <div className="flex flex-col gap-3 xl:text-3xl text-2xl">
            <h1>Name: {singleStud?.name}</h1>
            <h1>Email: {singleStud?.email}</h1>
            <h1>
              StudentID:
              {singleStud?.id}
            </h1>
            <div className="flex align-center justify-between flex-col">
              <span className="flex flex-col gap-y-4">
                <span>Issued books: </span>
                <span className="flex flex-col gap-y-2">
                  {singleStud?.books &&
                    singleStud?.books.map((book) => (
                      <span className=" bg-slate-300 rounded-lg p-3 flex ">
                        {book.title}
                        <button
                          className="ml-auto block"
                          onClick={() => returnBook(singleStud.id, book.id)}
                        >
                          RETURN
                        </button>
                      </span>
                    ))}
                </span>
              </span>
            </div>
            <button
              className="bg-slate-300 hover:bg-slate-200 rounded-lg p-3  mx-auto text-xl w-full"
              onClick={() => setIsUpdate(true)}
            >
              Edit
            </button>
          </div>
          <Link
            to="/students"
            className="bg-slate-300 hover:bg-slate-200 rounded-lg xl:block p-3 w-30 absolute top-0 left-[-200px] text-lg hidden"
          >
            Back to Students
          </Link>
        </>
      ) : (
        <UpdateStudentForm name={singleStud?.name || ''} email={singleStud?.email || ''} id={id} />
      )}
    </div>
  );
};

export default SingleStudent;
