// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      {/* loading section start */}
      <div className='text-center flex items-center'>
        <p className='text-slate-100 text-6xl md:text-9xl'>L</p>
        <div className='border-dashed p-5 md:p-10 rounded-full border-blue-700 border-8 animate-spin'></div>
        <p className='text-slate-100 text-6xl md:text-9xl'>ADING</p>
      </div>
      {/* loading section end */}
    </div>
  );
};

export default LoadingPage;