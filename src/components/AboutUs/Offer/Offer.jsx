import { useEffect } from 'react';
import img1 from '../../../../public/aboutUs/img1.jpg'
import img2 from '../../../../public/aboutUs/img2.png'
import img3 from '../../../../public/aboutUs/img3.png'
import img4 from '../../../../public/aboutUs/img4.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {

    //AOS
    useEffect(() => {
      AOS.init();
    },[])

  return (
    <div className="my-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 overflow-hidden">
          {/* item1 section start */}
          <div className='relative' data-aos="zoom-in" data-aos-duration="1500">
            <img src={img1} className='h-40 sm:h-56 md:h-56 lg:h-64 xl:h-96 2xl:h-[400px] w-full'></img>
            <div className='bg-black bg-opacity-25 absolute top-2 right-2 left-2 bottom-2 flex items-end'>
              <ul className='p-3 text-left'>
                <li className='text-xl sm:text-base md:text-base lg:text-lg xl:text-4xl 2xl:text-5xl text-white font-bold'><h3>50% OFF</h3></li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-lg 2xl:text-xl text-gray-300'><p>on our 3rd book</p></li>
              </ul>
            </div>
          </div>
          {/* item1 section end */}
          {/* item2 section start */}
          <div>
            <div className='relative' data-aos="zoom-in" data-aos-duration="1500">
            <img src={img2} className='h-40 sm:h-28 md:h-28 lg:h-32 xl:h-48 2xl:h-[200px] w-full pb-2'></img>
            <div className='bg-black bg-opacity-25 absolute top-2 right-2 left-2 bottom-4 flex justify-center items-center'>
              <ul>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Moral</li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Story</li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Books</li>
              </ul>
            </div>
            </div>
            <div className='relative' data-aos="zoom-in" data-aos-duration="1500">
            <img src={img3} className='h-40 sm:h-28 md:h-28 lg:h-32 xl:h-48 2xl:h-[200px] w-full pt-2'></img>
            <div className='bg-black bg-opacity-25 absolute top-4 right-2 left-2 bottom-2 flex justify-center items-center'>
            <ul>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Kids</li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Story</li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-xl 2xl:text-2xl text-white'>Books</li>
              </ul>
            </div>
            </div>
          </div>
          {/* item2 section end */}
          {/* item3 section start */}
          <div className='relative' data-aos="zoom-in" data-aos-duration="1500">
            <img src={img4} className='h-40 sm:h-56 md:h-56 lg:h-64 xl:h-96 2xl:h-[400px] w-full'></img>
            <div className='bg-black bg-opacity-25 absolute top-2 right-2 left-2 bottom-2 flex justify-end items-end'>
            <ul className='p-3 text-right'>
                <li className='text-xl sm:text-base md:text-base lg:text-lg xl:text-4xl 2xl:text-5xl text-white font-bold'><h3>15% OFF</h3></li>
                <li className='text-sm sm:text-[11px] md:text-[11px] lg:text-sm xl:text-lg 2xl:text-xl text-gray-300'><p>Kids story book</p></li>
              </ul>
            </div>
          </div>
          {/* item3 section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default Offer;