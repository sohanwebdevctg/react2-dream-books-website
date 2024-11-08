import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BoltIcon } from "@heroicons/react/24/solid";
import { FaCartPlus } from "react-icons/fa";
import { getData } from "../../localStorage";

const Navbar = () => {

  const [cart, setCart] = useState(() => getData());

  console.log(cart)

  // toggle button state
  const [show, setShow] = useState(false);

  //scroll functionality
  const [scrollData, setScrollData] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setScrollData(true);
      } else {
        setScrollData(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      {/* desktop section start */}
      <div
        className={` ${
          scrollData
            ? "fixed top-0 right-0 left-0 z-10"
            : "sticky top-0 right-0 left-0 z-0 "
        } hidden sm:block w-full h-16 lg:h-20 2xl:h-24 bg-[#17181B] duration-500 shadow-sm shadow-blue-600`}
      >
        <div className="container mx-auto px-5">
          <div className="flex justify-between h-16 lg:h-20 2xl:h-24 items-center px-4">
            {/* logo start */}
            <Link to="/">
              <p className="text-3xl text-blue-800 flex items-center sm:text-[13px] md:text-[15px] lg:text-xl xl:text-2xl 2xl:text-3xl font-bold italic">
                <BoltIcon className="sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-blue-800" />
                <i>DreamBooks</i>
              </p>
            </Link>
            {/* logo end */}
            {/* link start */}
            <ul className="sm:flex sm:items-center sm:gap-5 md:gap-5 lg:gap-8 xl:gap-10 2xl:gap-11">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl font-semibold"
                      : "text-white sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl font-semibold"
                      : "text-white sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl font-semibold"
                      : "text-white sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl"
                  }
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl font-semibold"
                      : "text-white sm:text-[11px] md:text-[13px] lg:text-base xl:text-[17px] 2xl:text-xl"
                  }
                >
                  Contact
                </NavLink>
              </li>
              {
                cart.length > 0 && <li>
                {/* cart button start */}
                <NavLink to="/cart" className="relative">
                <FaCartPlus 
              className="text-yellow-500 sm:text-[11px] md:text-[13px] lg:text-base xl:text-xl cursor-pointer "
            ></FaCartPlus>
            <sup className="text-white absolute -top-2 -right-1">{cart.length}</sup>
                </NavLink>
                {/* cart button end */}
              </li>
              }
            </ul>
            {/* link end */}
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div
        className={`${
          scrollData ? "fixed top-0 right-0 left-0 z-10" : "sticky z-10"
        } sm:hidden h-16 bg-[#17181B] duration-500 shadow-sm shadow-blue-600`}
      >
        {/* title section start */}
        <div className="h-16 flex items-center px-4 justify-between relative">
          {/* logo section start */}
          <div>
            <Link to="/">
              <span className="text-base font-bold text-blue-800 flex items-center">
                <BoltIcon className="h-5 w-5 text-blue-800" />
                <i>DreamBooks</i>
              </span>
            </Link>
          </div>
          {/* logo section end */}
          {/* button section start */}
          <div className="flex items-center gap-3">
            {/* cart button start */}
            {
              cart.length > 0 && <NavLink to="/cart" className="relative">
              <FaCartPlus
                className="text-yellow-500 text-base cursor-pointer"
              ></FaCartPlus>
              <sup className="text-white absolute -top-4 -right-1 text-xs">{cart.length}</sup>
              </NavLink>
            }
            {/* cart button end */}
            {show ? (
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                <IoClose className="text-yellow-400 text-lg">close</IoClose>
              </button>
            ) : (
              <button
                onClick={() => {
                  setShow(true);
                }}
              >
                <GiHamburgerMenu className="text-yellow-400 text-base">
                  open
                </GiHamburgerMenu>
              </button>
            )}
          </div>
          {/* button section end */}
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div
          className={`absolute ${
            show ? "right-0 z-50" : "right-[1000px]"
          } z-50 bg-[#17181B] w-full duration-700 h-screen bg-opacity-95`}
        >
          {/* link section start */}
          <ul className="md:flex gap-5 text-center space-y-5">
            <li className="my-2">
              <NavLink
                to="/"
                onClick={() => {
                  setShow(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 text-base font-semibold"
                    : "text-white text-base"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/books"
                onClick={() => {
                  setShow(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 text-base font-semibold"
                    : "text-white text-base"
                }
              >
                Books
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/aboutUs"
                onClick={() => {
                  setShow(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 text-base font-semibold"
                    : "text-white text-base"
                }
              >
                AboutUs
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink
                to="/contact"
                onClick={() => {
                  setShow(false);
                }}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 text-base font-semibold"
                    : "text-white text-base"
                }
              >
                Contact
              </NavLink>
            </li>
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
