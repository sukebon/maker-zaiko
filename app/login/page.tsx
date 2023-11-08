import React from 'react';
import { NextPage } from 'next';
import LoginForm from './components/LoginForm';

const LoginPage: NextPage = () => {
  return (
    <div className='w-full max-w-[calc(300px)] p-6 rounded-md shadow-md border-t-4 border-t-blue-500'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;