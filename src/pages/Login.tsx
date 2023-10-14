import { SyntheticEvent, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLog';
import { InputField } from '../components/Basic/InputField';
import { FormWrapper } from '../components/App/FormWrapper';

const Login = () => {
  const { email, setEmail, pwd, setPwd, handleLogin, error: errorMsg, setError } = useLogin();

  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleLogin({ email, pwd });
  };

  useEffect(() => {
    emailRef?.current?.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [email, pwd]);

  return (
    <FormWrapper
      errorMsg={errorMsg}
      formTitle="Welcome back"
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

      <button className="w-2/5 block mx-auto bg-slate-200 mt-5 h-8">Log in</button>

      <h2>Don't have an account?</h2>
      <h2>
        <Link to="/register">Register</Link>
      </h2>
    </FormWrapper>
  );
};

export default Login;
