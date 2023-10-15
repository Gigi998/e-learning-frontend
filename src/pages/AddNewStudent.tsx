import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentContext } from '../context/students/context';
import { InputField } from '../components/Basic/InputField';
import { FormWrapper } from '../components/App/FormWrapper';

const AddNewStudent = () => {
  const navigate = useNavigate();
  const { addStudent, setSuccessMsg, successMsg } = useStudentContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addStudent({ name, email });
    delayNavigate();
    setName('');
    setEmail('');
  };

  useEffect(() => {
    setSuccessMsg('');
  }, [name, email]);

  const delayNavigate = () => {
    setTimeout(() => {
      navigate('/students');
    }, 1000);
  };

  return (
    <FormWrapper formTitle="Add new Student" handleSubmit={handleSubmit} className="w-1/5 mx-auto">
      {!successMsg ? (
        <p className="text-black-200 bg-green-500 p-3">Name and email fileds are required!</p>
      ) : (
        <p
          className={
            successMsg ? 'relative rounded w-ful bg-green-500 p-4 mb-2' : 'absolute left-full'
          }
        >
          {successMsg}
        </p>
      )}
      <InputField
        label="Name: "
        placeHolder="name"
        className="h-10 rounded-xl p-2 mt-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        label="Email: "
        placeHolder="email"
        className="h-10 rounded-xl p-2 mt-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="w-full h-8 bg-slate-100 mt-3 rounded-xl"
        disabled={name === '' || email === '' ? true : false}
      >
        Add
      </button>
    </FormWrapper>
  );
};

export default AddNewStudent;
