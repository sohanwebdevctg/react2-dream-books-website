import { useEffect, useState } from "react";


const FeaturedBooks = () => {

  //books state
  const [books, setBooks] = useState([]);

  //fetch books data
  useEffect(() => {
    fetch('featuredbooks.json')
    .then((res) => res.json())
    .then((data) => setBooks(data))
  },[])

  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div>
          <h3 className="text-slate-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center flex justify-center">Featured Books</h3>
          <hr className="w-[45%] sm:w-[28%] md:w-[26%] lg:w-[24%] xl:w-[22%] 2xl:w-[24%] mx-auto"></hr>
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-2 sm:gap-3 md:gap-2 lg:gap-4 xl:gap-4 2xl:gap-5 mt-10">
          {
            books.map((book) => <div key={book.id} className="border-[1px] border-solid border-gray-500 hover:border-blue-500 duration-300 mx-auto p-2 sm:p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-5 hover:bg-white hover:bg-opacity-10">
              {/* image section start */}
              <img src={book.image} className="w-36 h-28 sm:w-32 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-36 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64"></img>
              {/* image section end */}
              <div className="text-center mt-3 space-y-1">
                {/* name section start */}
                <p className="text-yellow-500 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-xl font-bold">{book.name}</p>
                {/* name section end */}
                {/* price & discount section start */}
                <p><span className="text-gray-500 font-bold text-sm sm:text-sm md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">{book.discount}</span> <del className="text-gray-500 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-xl">{book.price}</del></p>
                {/* price & discount section end */}
                {/* button section start */}
                <button className="btn bg-blue-600 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-lg text-white w-full p-1 rounded-sm">Add To Cart</button>
                {/* button section end */}
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

export default FeaturedBooks;