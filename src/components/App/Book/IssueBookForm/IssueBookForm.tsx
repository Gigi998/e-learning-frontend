import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStudentContext } from '../../../../context/students/context';
import { FormWrapper } from '../../FormWrapper';
import { InputField } from '../../../Basic/InputField';

const IssueBookForm = () => {
  const {
    state: { title, bookId },
  } = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const { studentIssueBook, setErrorMsg, errorMsg } = useStudentContext();

  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    studentIssueBook({ studentId, bookId });
    setStudentId('');
  };

  useEffect(() => {
    setErrorMsg('');
  }, [studentId]);

  return (
    <FormWrapper
      errorMsg={errorMsg}
      className="lg:w-2/6 border p-2 rounded-xl mx-auto mt-20 flex flex-col justify-center items-center md:w-1/2 w-2/3"
      formTitle="Issue book form"
      handleSubmit={handleSubmit}
    >
      <p className="my-3">
        Title: <span className="text-xl">{title}</span>
      </p>
      <InputField
        label="Provide student card ID:"
        ref={inputRef}
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button className="w-2/6 block mx-auto bg-slate-200 mt-5 h-8">Issue</button>
    </FormWrapper>
  );
};

export default IssueBookForm;
