import { SyntheticEvent, useState } from 'react';
import { UpdateStudentType } from '../../../../types/studentTypes';
import { useStudentContext } from '../../../../context/students/context';
import { InputField } from '../../../Basic/InputField';
import { FormWrapper } from '../../FormWrapper';

const UpdateStudentForm = ({ id, name, email }: UpdateStudentType) => {
  const { updateStudent, setIsUpdate } = useStudentContext();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleUpdate();
  };

  const [nameUpd, setNameUpd] = useState(name);
  const [emailUpd, setEmailUpd] = useState(email);

  const handleUpdate = () => {
    updateStudent({ id, name: nameUpd, email: emailUpd });
    setIsUpdate(false);
  };

  return (
    <FormWrapper
      className="flex flex-col items-center gap-3 rounded-lg mt-2"
      handleSubmit={handleSubmit}
      formTitle="Update student"
    >
      <InputField
        label="Name: "
        className="h-10 rounded-xl p-2 mt-1 w-full"
        value={nameUpd}
        onChange={(e) => setNameUpd(e.target.value)}
      />
      <InputField
        label="Email: "
        className="h-10 rounded-xl p-2 mt-1 w-full"
        value={emailUpd}
        onChange={(e) => setEmailUpd(e.target.value)}
      />
      <button
        className="bg-slate-300 hover:bg-slate-200 rounded-lg p-3 w-2/5 mx-auto block text-xl mt-4"
        disabled={!emailUpd || !nameUpd ? true : false}
      >
        Update
      </button>
    </FormWrapper>
  );
};

export default UpdateStudentForm;
