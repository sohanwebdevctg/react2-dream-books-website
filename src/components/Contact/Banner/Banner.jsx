import './Banner.css'
import contactBanner from '../../../../public/contact/contactBanner.png'

const Banner = () => {
  return (
    <div className="h-full sm:h-72 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[550px] flex items-center">
      <div className="container mx-auto px-5 py-5">
        {/* home section start */}
        <div className="sm:flex sm:justify-between sm:items-center gap-4">
          {/* description section start */}
          <div className="sm:flex-1">
            <p className="text-slate-300 text-sm sm:text-[15px] md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl font-normal my-2">
              Upto <span className="text-blue-800">15% off</span>
            </p>
            <p className='text-yellow-500 text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl'>Ongoing Offers</p>
            <p className="text-slate-300 text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Reach out to us for personalized support, quick answers to your questions, and tailored solutions to meet your needs. We’re here to help! Feel free contact us for prompt, personalized assistance and support.
            </p>
            <div className="mt-2 lg:mt-3">
              <button className="bg-yellow-600 text-whit text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg py-1 px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-6 text-white rounded-sm">
                Contact Us
              </button>
            </div>
          </div>
          {/* description section end */}
          {/* lottie section start */}
          <div className=" sm:flex-1 mt-4 sm:mt-0">
            {/* image section start */}
            <img src={contactBanner} className="w-48 h-52 sm:w-48 sm:h-52 md:w-56 md:h-60 lg:w-72 lg:h-72 xl:h-[70%] xl:w-[52%] 2xl:h-[70%] 2xl:w-[48%] mx-auto bg-blue-700 p-5 rounded-tl-3xl rounded-br-3xl contactBanner"></img>
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