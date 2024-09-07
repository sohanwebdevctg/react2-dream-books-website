import { FaApple } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";


const OurApp = () => {
  return (
    <div className="bg-blue-600 py-14">
      <div className="container mx-auto px-5">
        {/* content section start */}
        <div className="text-center space-y-5">
          {/* title section start */}
          <h3 className="text-yellow-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">Download Our App For All Platform</h3>
          {/* title section end */}
          {/* description section start */}
          <p className="text-sm sm:text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-xl text-gray-300 text-justify md:text-center">It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of <br className="hidden md:block"></br>Virtual Game, it has been achieving great heights so far as its popularity <br className="hidden md:block"></br>and technological advancement are concerned.</p>
          {/* description section end */}
          {/* app section start */}
          <div className="flex justify-center gap-3 md:gap-4 xl:gap-5 2xl:gap-7">
            {/* item1 section start */}
            <ul className="flex justify-center items-center gap-3 bg-gray-500 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 2xl:1/5 h-16 md:h-20 lg:h-20 xl:h-24 2xl:h-24">
              <li className="text-blue-700">
                <FaApple className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></FaApple>
              </li>
              <li>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">Apple Store</span><br></br>
                <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-lg text-white italic">on App Store</span>
              </li>
            </ul>
            {/* item1 section end */}
            {/* item2 section start */}
            <ul className="flex justify-center items-center gap-3 bg-gray-500 w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/5 2xl:1/5 h-16 md:h-20 lg:h-20 xl:h-24 2xl:h-24">
              <li className="text-blue-700">
                <AiFillAndroid className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></AiFillAndroid>
              </li>
              <li>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">Android Store</span><br></br>
                <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-lg text-white italic">on App Store</span>
              </li>
            </ul>
            {/* item2 section end */}
          </div>
          {/* app section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default OurApp;