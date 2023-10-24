import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useStudentContext } from '../context/students/context';
import { StudentItem } from '../components/App/Students/StudentItem';
import { DEFAULT_STUDENTS_TAKE } from '../types/types';

const Students = () => {
  const { getAllStudents, students } = useStudentContext();
  const [take, setTake] = useState(DEFAULT_STUDENTS_TAKE);
  const [page, setPage] = useState(0);
  const location = useLocation();
  const loc = location.pathname;

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    getAllStudents(isMounted, controller, page * take, take);
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [page]);

  return (
    <>
      {loc === '/students' ? (
        <section className="main-page">
          <h2 className="text-4xl">Students</h2>
          <div className="flex items-center flex-col w-full">
            <div className="w-full">
              {students?.map((student) => {
                return <StudentItem key={student.id} {...student} />;
              })}
            </div>
          </div>
          <button onClick={() => setPage((prev) => prev + 1)}>See more</button>
        </section>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Students;
