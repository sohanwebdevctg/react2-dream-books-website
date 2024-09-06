import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BoltIcon } from "@heroicons/react/24/solid";


const Navbar = () => {

   // toggle button state
   const [show, setShow] = useState(false);

   //scroll functionality
   const [scrollData, setScrollData] = useState(false);

   useEffect(()=> {
    
    const handleScroll = () => {
      if(window.scrollY > 120){
        setScrollData(true)
      }else{
        setScrollData(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
   },[])

  return (
    <div>
    {/* desktop section start */}
      <div className={` ${scrollData ? 'fixed top-0 right-0 left-0 z-10 duration-300 bg-gray-600 shadow-lg' : 'sticky duration-300 z-0 bg-gray-500'} hidden sm:block w-full h-20`}>
        <div className="container mx-auto px-5">
          <div className="flex justify-between h-20 xl:h-20 items-center px-8">
            {/* logo start */}
            <Link to="/">
            <p className='text-3xl text-blue-800 flex items-center sm:text-lg md:text-lg  lg:text-xl xl:text-2xl 2xl:text-3xl font-bold italic'><BoltIcon className="h-7 w-7 text-blue-800" /><i>DreamBooks</i></p>
            </Link>
            {/* logo end */}
            {/* link start */}
            <ul className="sm:flex gap-10">
              <li><NavLink to="/" className={({ isActive}) => isActive ? "text-yellow-400 sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold" : "text-white sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl" }>Home</NavLink></li>
              <li><NavLink to="/books" className={({ isActive}) => isActive ? "text-yellow-400 sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold" : "text-white sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl" }>Books</NavLink></li>
              {/* <li><NavLink to="/services" className={({ isActive}) => isActive ? "text-gray-400 sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold" : "text-black sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl" }>Services</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive}) => isActive ? "text-gray-400 sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold" : "text-black sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl" }>Contact</NavLink></li> */}
            </ul>
            {/* link end */}
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className={`${scrollData ? 'fixed top-0 right-0 left-0 z-10 duration-500 bg-gray-600 shadow-lg' : 'sticky duration-500 z-0 bg-gray-500'} sm:hidden h-16`}>
        {/* title section start */}
        <div className="h-16 flex items-center px-4 justify-between relative">
          {/* logo section start */}
          <div>
            <Link to="/">
            <span className='text-base font-bold text-blue-800 flex items-center'><BoltIcon className="h-5 w-5 text-blue-800" /><i>DreamBooks</i></span>
            </Link>
          </div>
          {/* logo section end */}
          {/* button section start */}
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><IoClose className='text-yellow-400 w-5 h-5'>close</IoClose></button> : <button onClick={() => {setShow(true)}}><GiHamburgerMenu className='text-yellow-400 w-5 h-5'>open</GiHamburgerMenu></button>
            }
          </div>
          {/* button section end */}
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute ${show ? 'right-0': 'right-[1000px]'} z-30 bg-gray-500 w-full duration-700 h-screen bg-opacity-95`}>
            {/* link section start */}
            <ul className='md:flex gap-5 text-center space-y-5'>
              <li className='my-2'>
                <NavLink to="/" onClick={() => {setShow(false)}} className={({ isActive}) => isActive ? "text-yellow-400 text-base font-semibold" : "text-white text-base" }>Home</NavLink>
              </li>
              <li className='my-2'>
                <NavLink to="/books" onClick={() => {setShow(false)}} className={({ isActive}) => isActive ? "text-yellow-400 text-base font-semibold" : "text-white text-base" }>Books</NavLink>
              </li>
              {/* <li className='my-2'>
                <NavLink to="/services" onClick={() => {setShow(false)}} className={({ isActive}) => isActive ? "text-gray-400 text-base font-semibold" : "text-black text-base" }>Services</NavLink>
              </li>
              <li className='my-2'>
                <NavLink to="/contact" onClick={() => {setShow(false)}} className={({ isActive}) => isActive ? "text-gray-400 text-base font-semibold" : "text-black text-base" }>Contact</NavLink>
              </li> */}
            </ul>
            {/* link section end */}
        </div>
        {/* navItem section end */}
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Navbar;