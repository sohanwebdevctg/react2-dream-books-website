// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BookDetails.css';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'


const BookDetails = () => {
  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

  const bookDetails = useLoaderData();
  const {image,desc,publisher,authors,year,title,price,rating} = bookDetails;

  const [showData, setShowData] = useState(false);

  const navigate =  useNavigate();

  const previousBtn = () => {
    navigate(-1)
  }

  return (
    <div className='p-4 md:p-20'>
      {/* booksDetails section start */}
      <div className='grid grid-cols-1 md:grid-cols-2 md:p-10 p-4 border-2 border-solid border-blue-800'>
      {/* books image section start */}
      <div className='border-2 border-solid border-blue-800 bg-gray-500'>
        <img className='image md:w-auto md:h-auto w-full h-full' src={image}></img>
      </div>
      {/* books image section end */}
      {/* books details section start */}
      <div className=' bg-blue-800 flex items-center justify-center'>
        <div className='md:p-10 p-3 mt-3 md:mt-0'>
          {/* all information section start */}
          <span className='text-xs md:text-base font-semibold bg-gray-500 p-2 rounded-2xl text-slate-200'>BRAND NEW</span>
          <h5 className='text-xl md:text-4xl font-bold my-3 text-yellow-400'>{title ? title : 'No Data'}</h5>
          <p className='text-sm md:text-lg text-white font-bold my-1'>Authors : <span className='text-gray-400'>{authors ? authors : 'No-Data'}</span></p>
          <p className='text-sm md:text-lg text-white font-bold my-1'>Publisher : <span className='text-gray-400'>{publisher ? publisher : 'No-Data'}</span></p>
          <p className='text-sm md:text-lg text-white font-bold my-1'>Year : <span className='text-gray-400'>{year ? year : 'No-Data'}</span></p>
          <p className='text-sm md:text-lg text-white font-bold my-1'>Rating : <span className='text-gray-400'>{rating ? rating : '00'}</span></p>
          <p className='text-sm md:text-lg text-white font-bold my-1'>Price : <span className='text-gray-400'>{price ? price : '00'}</span></p>
          {/* all information section end */}
          {/* description section start */}
          <p className='text-yellow-400'>
              {
              desc.slice(0, showData ? 420 : 100)
              }&nbsp;
            {
              showData ? (<span className='text-gray-400 font-bold' onClick={()=> setShowData(false)}>...Read Less</span>) : (<span className='text-gray-400 font-bold' onClick={()=> setShowData(true)}>Read More...</span>)
            }
          </p>
          {/* description section end */}
          <div className='mt-5 flex md:gap-1 gap-2'>
            {/* button section start */}
            <span className='bg-gray-500 text-blue-800 py-2 md:py-3 md:px-5 px-3 font-semibold md:font-bold rounded-md hover:bg-yellow-500 hover:text-slate-100 duration-300'>Buy Now</span>
            <span onClick={previousBtn} className='bg-yellow-500 text-slate-100 md:py-3 py-2 md:px-5 px-3 font-semibold md:font-bold rounded-md duration-300 flex items-center'><ArrowLeftOnRectangleIcon className="h-5 w-5 font-bold text-slate-100" />Previous</span>
            {/* button section end */}
          </div>
        </div>
      </div>
      {/* books details section end */}
      </div>
      {/* booksDetails section end */}
    </div>
  );
};

export default BookDetails;