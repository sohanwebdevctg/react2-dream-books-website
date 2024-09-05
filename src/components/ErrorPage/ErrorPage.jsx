// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate, useNavigation, useRouteError } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

const ErrorPage = () => {
  
  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

  const error = useRouteError();
  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  }
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      {/* error page section start */}
      <div className='text-center'>
        {/* error description section start */}
        <h1 className='text-blue-700 text-xl md:text-3xl font-extrabold'>Oops!</h1>
        <p className='text-gray-500 text-xl md:text-4xl font-bold my-2'>Sorry, an unexpected error has occurred.</p>
        <p className='text-slate-100 text-xl md:text-3xl font-extrabold'>
          <i>{error.statusText || error.message}</i>
        </p>
        <span onClick={backBtn} className='bg-blue-800 text-gray-500 py-2 md:py-3 px-3 md:px-5 font-semibold md:font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300 inline-block mt-5'>Previous Page</span>
        {/* error description section end */}
      </div>
      {/* error page section end */}
    </div>
  );
};

export default ErrorPage;