import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const OurReader = () => {

      //books state
      const [readers, setReaders] = useState([]);

      //fetch books data
      useEffect(() => {
        fetch('clients.json')
        .then((res) => res.json())
        .then((data) => setReaders(data))
      },[])

  return (
    <div className="py-8">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div>
          <h3 className="text-slate-300 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center flex justify-center">Our Reader's</h3>
          <hr className="w-[45%] sm:w-[28%] md:w-[26%] lg:w-[24%] xl:w-[22%] 2xl:w-[24%] mx-auto"></hr>
        </div>
        {/* title section start */}
        {/* books section start */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2  mt-10">
        {
            readers.map((reader) => <div key={reader.id} className="border-[1px] border-solid border-gray-500 hover:border-blue-500 duration-300 mx-auto p-4 sm:p-3 md:p-3 lg:p-5 xl:p-7 2xl:p-8 w-full hover:bg-white hover:bg-opacity-10 space-y-4">
              {/* image section start */}
              <div>
                <img src={reader.image} className="w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full mx-auto"></img>
              </div>
              {/* image section end */}
              <div className="text-center mt-3 space-y-2">
                {/* details section start */}
                <p className="text-gray-500 text-xs sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-lg">{reader.details}</p>
                {/* details section end */}
                {/* name section start */}
                <p className="text-yellow-500 text-xs sm:text-[10px] md:text-[11px] lg:text-base xl:text-xl 2xl:text-2xl font-bold">{reader.name}</p>
                {/* name section end */}
                {/* work section start */}
                <p className="text-gray-500 text-xs sm:text-[10px] md:text-[11px] lg:text-sm xl:text-sm 2xl:text-xl">{reader.work}</p>
                {/* work section end */}
                {/* ratting section start */}
                <ul className="flex items-center gap-1 justify-center">
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
                  <li className="text-blue-600"><FaStar className="text-xs sm:text-[10px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg"></FaStar></li>
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

export default OurReader;