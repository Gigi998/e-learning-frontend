import { SyntheticEvent, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../hooks/useRegister';
import { InputField } from '../components/Basic/InputField';
import { FormWrapper } from '../components/App/FormWrapper';

const Register = () => {
  const { error: errorMsg, email, setEmail, pwd, setPwd, handleRegister, setError } = useRegister();
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleRegister({ email, pwd });
  };
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [email, pwd]);

  return (
    <FormWrapper
      errorMsg={errorMsg}
      formTitle="Welcome"
      handleSubmit={handleSubmit}
      className="flex flex-col justify-center lg:w-1/3 md:w-2/3 w-5/6  border p-2 rounded-xl mx-auto mt-20"
    >
      <InputField
        label="Email"
        type="email"
        value={email}
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button
        className="w-2/6 block mx-auto bg-slate-200 mt-5 h-8"
        disabled={email === '' || pwd === '' ? true : false}
      >
        Register
      </button>
      <h2>Already have an account?</h2>
      <h2>
        <Link to="/auth">Sign in</Link>
      </h2>
    </FormWrapper>
  );
};

export default Register;
