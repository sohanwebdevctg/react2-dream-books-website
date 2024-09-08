import { useEffect, useState } from "react";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const NewArrivals = () => {

    //books state
    const [books, setBooks] = useState([]);

    //fetch books data
    useEffect(() => {
      fetch('newArrivals.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
    },[])

      //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div>
          <h3 className="text-slate-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center flex justify-center">New Arrivals</h3>
          <hr className="w-[45%] sm:w-[28%] md:w-[26%] lg:w-[24%] xl:w-[22%] 2xl:w-[24%] mx-auto"></hr>
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2  mt-10">
        {
            books.map((book) => <div data-aos="flip-left" data-aos-duration="1200" key={book.id} className="border-[1px] border-solid border-gray-500 hover:border-blue-500 duration-300 mx-auto p-2 sm:p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-5 sm:flex  items-center gap-2 lg:gap-3 xl:gap-3 2xl:gap-3 w-full hover:bg-white hover:bg-opacity-10">
              {/* image section start */}
              <div className="sm:flex-1">
                <img src={book.image} className="w-full h-28 sm:w-24 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-36 xl:w-56 xl:h-48 2xl:w-64 2xl:h-64"></img>
              </div>
              {/* image section end */}
              <div className="text-left mt-3 space-y-1 sm:flex-2">
                {/* name section start */}
                <p className="text-yellow-500 text-xs sm:text-[10px] md:text-[11px] lg:text-[13px] xl:text-base 2xl:text-xl font-bold">{book.name}</p>
                {/* name section end */}
                {/* price & discount section start */}
                <p><span className="text-gray-500 font-bold text-sm sm:text-[10px] md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl">{book.discount}</span> <del className="text-gray-500 text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg">{book.price}</del></p>
                {/* price & discount section end */}
                {/* ratting section start */}
                <ul className="flex items-center gap-1">
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-yellow-600"><FaStarHalfAlt className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStarHalfAlt></li>
                </ul>
                {/* ratting section end */}
              </div>
            </div>)
          }
        </div>
        {/* books section end */}
        {/* content section end */}
      </div>
    </div>
  );
};

export default NewArrivals;