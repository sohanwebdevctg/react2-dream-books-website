// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import LoadingPage from './../LoadingPage/LoadingPage';

const Book = ({book}) => {
  const navigation = useNavigation();
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
  
  const {isbn13,image,subtitle,price,title} = book;

  return (
    <Link to={`/book/${isbn13}`}>
      <div className='overflow-hidden relative hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-2 ease-in duration-500'>
      <div className=''>
        <img className='object-cover md:w-96 md:h-64 w-auto h-auto' src={image}></img>
      </div>
      <div className='bg-gray-600 hover:opacity-80 opacity-0 absolute top-0 left-0 bottom-0 right-0 duration-500 p-2 md:p-6 flex flex-col'>
        <h1 className='text-slate-100 md:text-xl'>Title : {title ? title : 'No-Data'}</h1>
        {/* // eslint-disable-next-line react/prop-types */}
        <p className='text-slate-100 md:text-lg md:py-2'>SubTitle : {subtitle ? subtitle.slice(0,60) : 'No-Data'}...</p>
        <p className='text-slate-100 md:text-sm py-2 mt-auto'>Price : {price ? price : 'No-Data'}</p>
      </div>
    </div>
    </Link>
  );
};

export default Book;