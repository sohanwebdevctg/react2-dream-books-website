// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import Lottie from "lottie-react";
import Reading from "../../assets/reading.json";
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { LinkIcon } from '@heroicons/react/24/solid';


const Home = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
  
  return (
    <>
      {/* home section start */}
      <div className='grid grid-cols-1 md:gap-2 md:grid-cols-2 md:container mx-auto md:items-center md:py-10'>
      {/* description section start */}
      <div className='p-2 md:p-0 mb-3 md:mb-0'>
        <span className='text-blue-800 bg-gray-500 font-medium md:font-bold md:px-3 px-2 py-1 rounded-2xl'>ON SALE</span>
        <p className='text-slate-300 text-3xl md:text-5xl font-normal my-2'>A reader <br></br>lives a thousand<br></br><span className='text-blue-800'>lives before he dies</span></p>
        <p className='text-slate-300 text-base md:text-xl'>Books are uniquely portable magic. Books server to show a<br></br>man that those original thoughts of his are not very new after<br></br>all.The man who does not read good books is no better than<br></br>the man who can not.</p>
        <div className='mt-5 flex gap-2 md:gap-3'>
          <span className='bg-blue-800 text-gray-500 py-2 md:py-3 px-2 md:px-5 md:font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300 flex items-center gap-1 font-medium'><LinkIcon className="h-4 w-4 text-gray-500" />Visit Store</span>
          <span className='border-2 border-gray-500 text-blue-500 py-2 px-3 md:py-3 md:px-5 md:font-bold rounded-md hover:bg-blue-500 hover:text-gray-400 hover:border-blue-500 duration-300 font-medium'>Visit Now</span>
        </div>
      </div>
      {/* description section end */}
      {/* lottie section start */}
      <div className='overflow-hidden p-3 md:p-0'>
        <Lottie animationData={Reading} loop={true} />
      </div>
      {/* lottie section end */}
      </div>
      {/* home section end */}
    </>
  );
};

export default Home;