// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [open, setOpen]  =useState(false);
  return (
    <div>
        {/* desktop section start */}
      <div className='bg-gray-500 hidden md:block'>
        <nav className='md:container md:mx-auto md:flex md:justify-between md:items-center h-16'>
          <div>
            <Link to="/">
            <h4 className='text-3xl font-bold text-blue-700 flex items-center'><BoltIcon className="h-7 w-7 text-blue-700" /><i>DreamBooks</i></h4>
            </Link>
          </div>
          <div className='flex gap-7'>
            <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>Home</NavLink>
            <NavLink to='/books' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>Books</NavLink>
            <NavLink to='/aboutUs' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold' : 'text-white text-xl font-semibold')}>AboutUs</NavLink>
          </div>
        </nav>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className='bg-gray-500 md:hidden'>
        <nav>
          <div className='flex justify-between items-center h-12 px-2'>
            {/* navbar title section start */}
            <Link to="/">
              <span className='text-base font-bold text-blue-700 flex items-center'><BoltIcon className="h-5 w-5 text-blue-700" /><i>DreamBooks</i></span>
            </Link>
            {/* navbar title section end */}
            {/* icon section end */}
            {
              open && open ? (<span onClick={() => {setOpen(false)}}><XMarkIcon className="h-6 w-6 text-blue-700" /></span>) : (<span onClick={() => {setOpen(true)}}><Bars3Icon className="h-6 w-6 text-blue-700" /></span>)
            }
            {/* icon section end */}
          </div>
          <div className={`absolute bg-gray-500 w-full case-in duration-500 z-20 ${open ? 'top-11' : '-top-40'}`}>
            <NavLink to='/' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold block text-center py-1' : 'text-white text-xl font-semibold block text-center py-1')}>Home</NavLink>
            <NavLink to='/books' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold block text-center py-1' : 'text-white text-xl font-semibold block text-center py-1')}>Books</NavLink>
            <NavLink to='/aboutUs' className={({isActive}) => (isActive ? 'text-blue-700 text-xl font-semibold block text-center py-1' : 'text-white text-xl font-semibold block text-center py-1')}>AboutUs</NavLink>
          </div>
        </nav>
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Header;