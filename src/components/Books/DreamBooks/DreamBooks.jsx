import { useEffect, useState } from "react";
import Book from "../Book/Book";

const DreamBooks = () => {
  //get data
  const [books, setBooks] = useState([]);

  //button toggle
  const [show, setShow] = useState(false);

  // fetch data
  useEffect(() => {
    fetch("dreamBooks.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div>
          <h3 className="text-slate-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center flex justify-center">
            Dream Books
          </h3>
          <hr className="w-[45%] sm:w-[28%] md:w-[26%] lg:w-[24%] xl:w-[22%] 2xl:w-[24%] mx-auto"></hr>
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6 mt-10">
          {books.slice(0,show ? 30 : 20).map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
        {/* books section end */}
        {/* button section start */}
        <div className="text-center mt-8">
          {
            show ? <button onClick={() => setShow(!show)} className="text-[10px] sm:text-[11px] ms:text-sm lg:text-[15px] xl:text-xl 2xl:text-2xl text-white bg-blue-700 font-bold p-1 px-3 sm:p-2 sm:px-3 md:p-2 md:px-3 lg:p-2 lg:px-4 xl:p-2 xl:px-4 2xl:p-3 2xl:px-5 rounded-md">
            ShowLess
          </button> : <button onClick={() => setShow(!show)} className="text-[10px] sm:text-[11px] ms:text-sm lg:text-[15px] xl:text-xl 2xl:text-2xl text-white bg-blue-700 font-bold p-1 px-3 sm:p-2 sm:px-3 md:p-2 md:px-3 lg:p-2 lg:px-4 xl:p-2 xl:px-4 2xl:p-3 2xl:px-5 rounded-md">
            ShowAll
          </button> 
          }
        </div>
        {/* button section end */}
        {/* content section end */}
      </div>
    </div>
  );
};

export default DreamBooks;
