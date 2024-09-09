import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link, useNavigation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";



const Book = ({ book }) => {
  //params data
  const { id, image, name } = book;

  
  //AOS
  useEffect(() => {
    AOS.init();
  },[])

    // loading page
    const navigation = useNavigation();
    {
      navigation.state === "loading" ? <LoadingPage></LoadingPage> : "";
    }

  return (
    <>
      <Link to={`/singleBook/${id}`} data-aos="fade-right" data-aos-duration="1000">
        <div className="overflow-hidden h-40 w-full sm:h-48 md:h-44 lg:h-48 xl:h-64 2xl:h-72 relative hover:shadow-lg hover:shadow-blue-600/100 transform hover:-translate-y-2 easy-in duration-500" >
          {/* image section start */}
          <div className="w-full h-full">
            <img src={image} className="w-full h-full object-cover"></img>
          </div>
          {/* image section end */}
          {/* details section start */}
          <div className="absolute top-0 right-0 left-0 bottom-0 p-3 md:p-4 lg:p-4 2xl:p-6 duration-500 ease-in bg-gray-500 opacity-0 hover:opacity-90 flex flex-col justify-between">
            <h1 className="text-[15px] sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
              {name}
            </h1>
            {/* ratting section start */}
            <ul className="flex items-center gap-1">
              <li className="text-blue-600">
                <FaStar className="text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-2xl"></FaStar>
              </li>
              <li className="text-blue-600">
                <FaStar className="text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-2xl"></FaStar>
              </li>
              <li className="text-blue-600">
                <FaStar className="text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-2xl"></FaStar>
              </li>
              <li className="text-blue-600">
                <FaStar className="text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-2xl"></FaStar>
              </li>
              <li className="text-yellow-600">
                <FaStarHalfAlt className="text-sm sm:text-lg md:text-lg lg:text-base xl:text-lg 2xl:text-2xl"></FaStarHalfAlt>
              </li>
            </ul>
            {/* ratting section end */}
          </div>
          {/* details section end */}
        </div>

      </Link>
    </>
  );
};

export default Book;
