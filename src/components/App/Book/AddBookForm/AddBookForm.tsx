import { SyntheticEvent, useState } from 'react';
import { useBookContext } from '../../../../context/books/context';
import { InputField } from '../../../Basic/InputField';
import { FormWrapper } from '../../FormWrapper';

function AddBookForm() {
  const { addNewBook } = useBookContext();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    setSearch('');
    e.preventDefault();
    addNewBook(search);
  };

  return (
    <FormWrapper formTitle="Add new book" handleSubmit={handleSubmit}>
      <InputField
        label="Title:"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="w-full bg-slate-100 mt-3 rounded-xl h-8">Add</button>
    </FormWrapper>
  );
}

export default AddBookForm;
