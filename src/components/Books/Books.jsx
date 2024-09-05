// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Books.css'
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingPage from '../LoadingPage/LoadingPage';

const Books = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

const {books} = useLoaderData();
const [showAllData, setShowAllData] = useState(false);
  return (
    <div className='container mx-auto pt-5 pb-8'>
      {/* title section start */}
      <span className='text-slate-300 text-2xl md:text-4xl font-bold text-center flex justify-center'>Dream Books</span>
      {/* title section end */}
      {/* books container section start */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-10 py-3 md:py-10'>
        {
          books.slice(0,showAllData ? 20 : 8).map((book) => <Book
          key={book.isbn13}
          book={book}
          ></Book>)
        }
      </div>
      {/* books container section end */}
      {/* showAllData button section start */}
      <div className='text-center'>
      {showAllData ? (<span onClick={() => {setShowAllData(false)}} className='bg-blue-800 text-gray-500 py-2 md:py-3 px-3 md:px-5 font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300'>Show Less</span>) : (<span onClick={() => {setShowAllData(true)}}  className='bg-blue-800 text-gray-500 py-2 md:py-3 px-3 md:px-5 font-bold rounded-md hover:bg-slate-500 hover:text-blue-800 duration-300'>Show All</span>)}
      </div>
      {/* showAllData button section end */}
    </div>
  );
};

export default Books;