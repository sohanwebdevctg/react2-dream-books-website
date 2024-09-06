import { useEffect, useState } from "react";


const Purchase = () => {

    //books state
    const [books, setBooks] = useState([]);

    //fetch books data
    useEffect(() => {
      fetch('purchase.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
    },[])

  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div className="text-center space-y-5">
          {/* title section start */}
          <h3 className="text-slate-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">Purchase Whatever you want</h3>
          {/* title section end */}
          {/* description section start */}
          <p className="text-sm sm:text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-xl text-gray-500 text-center">Who are in extremely love with eco friendly system in this time. </p>
          {/* description section end */}
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 md:gap-4 lg:gap-5 mt-10">
          {
            books.map((book) => <div key={book.id} className="border-[1px] border-solid border-gray-500 text-center hover:bg-blue-600 hover:bg-opacity-5 hover:duration-300">
              {/* name section start */}
            <div className="bg-white bg-opacity-10 border-b-[1px] border-solid border-gray-500">
              {/* name section start */}
              <h3 className="text-white py-2 text-sm sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">{book.name}</h3>
              {/* name section end */}
            </div>
              {/* name section end */}
            <div className="p-8">
              {/* description section start */}
              <p className="text-xs sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl text-white italic">{book.description}</p>
              {/* description section end */}
              <div className="py-4 sm:py-4 md:py-6 lg:py-8 xl:py-9 2xl:py-10 mt-6 bg-white bg-opacity-10">
                {/* price section start */}
                <p className="text-xl sm:text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-white">${book.price}</p>
                {/* price section end */}
                {/* button section start */}
                <button className="bg-blue-600 text-[10px] sm:text-[8px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-6 2xl:mt-8 px-3 py-1 sm:px-3 sm:py-1 md:px-3 md:py-1 lg:px-4 lg:py-1 xl:px-4 xl:py-1 2xl:px-4 2xl:py-1 rounded-2xl text-white font-semibold">Purchase Now</button>
                {/* button section end */}
              </div>
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

export default Purchase;