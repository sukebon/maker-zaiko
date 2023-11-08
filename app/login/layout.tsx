import React, { ReactNode } from 'react';

const LoginLayout = ({ children }: { children: ReactNode; }) => {
  return (
    <div className='grid place-items-center h-[calc(100vh-100px)]'>{children}</div>
  );
};

export default LoginLayout;