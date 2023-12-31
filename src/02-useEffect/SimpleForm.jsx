import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: 'strider',
    email: 'erick@email.com',
  });

  const { username, email } = form;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('useEffect changed!');
  }, [form]);

  useEffect(() => {
    // console.log('email changed!');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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

      {username === 'strider2' && <Message />}
    </>
  );
};
