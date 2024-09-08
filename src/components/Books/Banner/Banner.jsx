import './Banner.css';
import bannerBooks from "../../../../public/books/bannerBook.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

  
  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="h-full sm:h-72 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[550px] flex items-center">
      <div className="container mx-auto px-5 py-5">
        {/* home section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-4 overflow-hidden">
          {/* description section start */}
          <div className="sm:flex-1" data-aos="fade-right" data-aos-duration="1000">
            <p className="text-slate-300 text-sm sm:text-[15px] md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-normal my-2">
              Upto <span className="text-blue-800">75% off</span>
            </p>
            <p className="text-slate-300 text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
              Storybooks spark imagination, offer escapism, teach empathy, and
              expand vocabulary. They preserve culture, foster creativity, and
              build critical thinking. Reading together strengthens bonds and
              instills lifelong learning and love for literature
            </p>
            <div className="mt-2 lg:mt-3">
              <button className="bg-yellow-600 text-whit text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg py-1 px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-6 text-white rounded-sm">
                Books
              </button>
            </div>
          </div>
          {/* description section end */}
          {/* lottie section start */}
          <div className="sm:flex-1 mt-2 sm:mt-0 py-3" data-aos="fade-left" data-aos-duration="1000">
            {/* image section start */}
            <img src={bannerBooks} className="w-48 h-52 sm:w-48 sm:h-52 md:w-56 md:h-60 lg:w-72 lg:h-72 xl:h-[75%] xl:w-[55%] 2xl:h-[77%] 2xl:w-[56%] mx-auto booksBanner"></img>
            {/* image section end */}
          </div>
          {/* lottie section end */}
        </div>
        {/* home section end */}
      </div>
    </div>
  );
};

export default Banner;
