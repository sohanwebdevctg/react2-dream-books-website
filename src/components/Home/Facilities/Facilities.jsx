import { FaTruckFast, FaClockRotateLeft } from "react-icons/fa6";
import { FaLock,  FaHeadset } from "react-icons/fa";


const Facilities = () => {
  return (
    <div className="bg-blue-700 py-5 my-3">
      <div className="container mx-auto px-5">
        {/* content section start */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 xl:gap-5">
          {/* item1 start */}
          <ul className="flex justify-center items-center gap-3">
            <li className="text-yellow-500">
              <FaTruckFast className="text-lg sm:text-[19px] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></FaTruckFast>
            </li>
            <li>
              <span className="text-[13px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">Free Shipping</span><br></br>
              <span className="text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base text-white italic">Order Over $100</span>
            </li>
          </ul>
          {/* item1 end */}
          {/* item2 start */}
          <ul className="flex justify-center items-center gap-3">
            <li className="text-yellow-500">
              <FaLock className="text-lg sm:text-[19px] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></FaLock>
            </li>
            <li>
              <span className="text-[13px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">Secure Payment</span><br></br>
              <span className="text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base text-white italic">100% Secure Payment</span>
            </li>
          </ul>
          {/* item2 end */}
          {/* item3 start */}
          <ul className="flex justify-center items-center gap-3">
            <li className="text-yellow-500">
              <FaClockRotateLeft className="text-lg sm:text-[19px] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></FaClockRotateLeft>
            </li>
            <li>
              <span className="text-[13px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">Easy Returns</span><br></br>
              <span className="text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base text-white italic">10 Days Returns</span>
            </li>
          </ul>
          {/* item3 end */}
          {/* item4 start */}
          <ul className="flex justify-center items-center gap-3">
            <li className="text-yellow-500">
              <FaHeadset className="text-lg sm:text-[19px] md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"></FaHeadset>
            </li>
            <li>
              <span className="text-[13px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-black">24/7 Support</span><br></br>
              <span className="text-[10px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base text-white italic">Call Us Anytime</span>
            </li>
          </ul>
          {/* item4 end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default Facilities;