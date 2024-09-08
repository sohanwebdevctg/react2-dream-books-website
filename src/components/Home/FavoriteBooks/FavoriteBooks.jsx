import img1 from "../../../../public/favoriteBooks/img1.jpg";
import img2 from "../../../../public/favoriteBooks/img2.jpg";
import img3 from "../../../../public/favoriteBooks/img3.jpg";
import img4 from "../../../../public/favoriteBooks/img4.jpg";

// import aboutBooks from '../../../../public/aboutUs/aboutBanner.png'

const FavoriteBooks = () => {
  return (
    <div className="container mx-auto px-5 py-5">
      {/* home section start */}
      <div className="sm:flex sm:justify-between sm:items-center gap-4">
        {/* books section start */}
        <div className="gap-5 sm:flex-1 mt-2 sm:mt-0 py-3">
          <ul className='grid grid-cols-2 gap-3 sm:gap-2 md:gap-3 lg:gap-5 xl:gap-7 2xl:gap-8'>
            <li><img src={img1} className="w-32 h-28 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:h-52 xl:w-64 2xl:w-80 2xl:h-60 mx-auto"></img></li>
            <li><img src={img2} className="w-32 h-28 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:h-52 xl:w-64 2xl:w-80 2xl:h-60"></img></li>
            <li><img src={img4} className="w-32 h-28 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:h-52 xl:w-64 2xl:w-80 2xl:h-60 mx-auto"></img></li>
            <li><img src={img1} className="w-32 h-28 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:h-52 xl:w-64 2xl:w-80 2xl:h-60"></img></li>
          </ul>
        </div>
        {/* books section end */}
        {/* description section start */}
        <div className="sm:flex-1">
          <p className="text-slate-300 text-sm sm:text-[15px] md:text-base lg:text-lg xl:text-3xl 2xl:text-4xl font-normal my-2">Find Your Favorite<br></br>
            <span className="text-blue-800">Books Here</span>
          </p>
          <p className="text-slate-300 text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-justify">
            Books are uniquely portable magic. Books server to show a
            <br className="hidden lg:block"></br>
            man that those original thoughts of his are not very new after
            <br className="hidden lg:block"></br>all.The man who does not read
            good books is no better than
            <br className="hidden lg:block"></br>the man who can not.
          </p>
          <ul className="grid grid-cols-3 sm:grid-cols-3 sm:gap-5 my-2">
            <li>
              <p className="text-blue-700 text-base sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">80+</p>
              <p className="text-white text-[10px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-base 2xl:text-xl">Kids books</p>
            </li>
            <li>
              <p className="text-blue-700 text-base sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">50+</p>
              <p className="text-white text-[10px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-base 2xl:text-xl">Story books</p>
            </li>
            <li>
              <p className="text-blue-700 text-base sm:text-sm md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">30+</p>
              <p className="text-white text-[10px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-base 2xl:text-xl">Dreams books</p>
            </li>
          </ul>
          <div className="mt-2 lg:mt-3">
            <button className=" text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-base 2xl:text-lg py-1 px-3 lg:py-2 lg:px-4 xl:py-2 xl:px-5 2xl:py-2 2xl:px-6  text-white border-[1px] border-gray-500 border-solid">
              Learn More
            </button>
          </div>
        </div>
        {/* description section end */}
      </div>
      {/* home section end */}
    </div>
  );
};

export default FavoriteBooks;
