import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { form, onInputChange, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });

  // const { username, email, password } = form;

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='example@email.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      <input
        type='password'
        className='form-control mt-2'
        placeholder='password'
        name='password'
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
