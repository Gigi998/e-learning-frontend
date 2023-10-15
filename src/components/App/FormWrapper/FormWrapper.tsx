import { ReactNode, SyntheticEvent } from 'react';
import Error from '../../Basic/Error/Error';

export interface Props {
  errorMsg?: string;
  children: ReactNode;
  formTitle?: string;
  handleSubmit: (e: SyntheticEvent) => void;
  className?: string;
}

const FormWrapper = ({ errorMsg, children, formTitle, handleSubmit, className }: Props) => {
  return (
    <div className={className}>
      {errorMsg && <Error errorMsg={errorMsg} />}
      {formTitle && <h2 className="text-3xl mx-auto">{formTitle}</h2>}
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default FormWrapper;
