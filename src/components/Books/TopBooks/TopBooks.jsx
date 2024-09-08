import { useEffect, useState } from "react";
import "./TopBooks.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TopBooks = () => {
  //books state
  const [books, setBooks] = useState([]);

  //fetch books data
  useEffect(() => {
    fetch("topBooks.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  //AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div className="text-center space-y-5">
          {/* title section start */}
          <h3 className="text-slate-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">
            Top Books That are open for kids
          </h3>
          {/* title section end */}
          {/* description section start */}
          <p className="text-sm sm:text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-xl text-gray-500 text-center  mx-auto">
            Books are incredibly valuable tools for children, offering not only
            entertainment <br className="hidden sm:block" /> but also essential
            learning opportunities.
          </p>
          {/* description section end */}
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-14">
          {books.map((book) => (
            <div  key={book.id}>
              {/* image section start */}
              <div className="relative">
                <img
                  src={book.image}
                  className="h-60 w-full sm:h-60 sm:w-full md:h-56 md:w-full lg:h-64 lg:w-full xl:h-[400px] xl:w-full 2xl:h-[420px] 2xl:w-full"
                  data-aos="zoom-in" data-aos-duration="1500"
                ></img>
                <button className="absolute bg-blue-600 text-whit text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg py-1 px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-6 text-white bottom-6 left-6 sm:bottom-5 sm:left-5 md:bottom-5 md:left-5 lg:bottom-6 lg:left-7 xl:bottom-10 xl:left-10 2xl:bottom-10 2xl:left-12">
                  Shop Now
                </button>
              </div>
              {/* image section end */}
              {/* details section start */}
              <div className="p-3 md:p-3 lg:p-4 xl:p-5">
                {/* name section start */}
                <ul className="flex justify-between items-center">
                  <li className="flex-1">
                    <h3 className="text-base sm:text-[11px] md:text-sm lg:text-base xl:text-2xl 2xl:text-3xl font-semibold text-blue-500">
                      {book.name}
                    </h3>
                  </li>
                  <li className="flex-2">
                    <h3 className="text-xs sm:text-[10px] md:text-[11px] lg:text-xs xl:text-base 2xl:text-xl text-yellow-500">
                      {book.price}
                    </h3>
                  </li>
                </ul>
                {/* name section end */}
                {/* details section start */}
                <p className="text-gray-300 text-justify mt-3 text-sm sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-xl">
                  {book.details}
                </p>
                {/* details section end */}
              </div>
              {/* details section end */}
            </div>
          ))}
        </div>
        {/* books section end */}
        {/* content section end */}
      </div>
    </div>
  );
};

export default TopBooks;
