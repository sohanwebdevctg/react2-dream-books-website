import Lottie from "lottie-react";
import Reading from "../../../assets/reading.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {

  //AOS
  useEffect(() => {
    AOS.init();
  },[])


  return (
    <div className="h-full sm:h-72 md:h-80 lg:h-96 xl:h-[520px] 2xl:h-[550px] flex items-center">
      <div className="container mx-auto px-5 py-5">
      {/* home section start */}
      <div className="sm:flex sm:justify-between sm:items-center gap-4 overflow-hidden">
        {/* description section start */}
        <div className="sm:flex-1" data-aos="fade-right" data-aos-duration="1000">
          <span className="text-blue-800 bg-gray-500 font-medium md:font-bold md:px-3 px-2 py-1 rounded-2xl text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-xs 2xl:text-sm">
            ON SALE
          </span>
          <p className="text-slate-300 text-sm sm:text-[15px] md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-normal my-2">
            A reader <br></br>lives a thousand<br></br>
            <span className="text-blue-800">lives before he dies</span>
          </p>
          <p className="text-slate-300 text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Books are uniquely portable magic. Books server to show a<br className="hidden lg:block"></br>
            man that those original thoughts of his are not very new after
            <br className="hidden lg:block"></br>all.The man who does not read good books is no better than
            <br className="hidden lg:block"></br>the man who can not.
          </p>
          <div className="mt-2 lg:mt-3">
            <button className="bg-blue-800 text-whit text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg py-1 px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-6 rounded-2xl">Buy Now</button>
          </div>
        </div>
        {/* description section end */}
        {/* lottie section start */}
        <div className="overflow-hidden sm:flex-1 mt-2 sm:mt-0 py-3" data-aos="fade-left" data-aos-duration="1000">
          <Lottie animationData={Reading} loop={true} className="w-60 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[430px] mx-auto" />
        </div>
        {/* lottie section end */}
      </div>
      {/* home section end */}
    </div>
    </div>
    
  );
};

export default Banner;
