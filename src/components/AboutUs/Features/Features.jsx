import { useEffect, useState } from "react";
import CountUp from 'react-countup';


const Features = () => {

        //books state
        const [features, setFeatures] = useState([]);

        //fetch books data
        useEffect(() => {
          fetch('features.json')
          .then((res) => res.json())
          .then((data) => setFeatures(data))
        },[])


  return (
    <div className="py-10">
      <div className="container mx-auto px-5">
        {/* content section start */}
        {/* title section start */}
        <div className="text-center space-y-5">
          {/* title section start */}
          <h3 className="text-slate-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold">Some Features that Made us Unique</h3>
          {/* title section end */}
          {/* description section start */}
          <p className="text-xs sm:text-sm md:text-[15px] lg:text-base xl:text-lg 2xl:text-xl text-gray-500 text-center mx-auto"> Conduct thorough consultations to understand the client's needs, goals,<br className="hidden sm:block"/> and expectations. Implement feedback loops to address <br className="hidden sm:block xl:hidden"/>any concerns or suggestions promptly</p>
          {/* description section end */}
        </div>
        {/* title section start */}
        {/* Features section start */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3 xl:gap-5 my-8 sm:my-9 md:my-10 lg:my-12 xl:my-14 2xl:my-14'>
          {
            features.map((feature) => <div key={feature.id} className="bg-blue-600 text-center py-4 sm:py-4 md:py-5 lg:py-5 xl:py-6 2xl:py-8 rounded-md space-y-2">
              <h3 className="text-yellow-500 text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl"><CountUp end={feature.percent} duration={20}/></h3>
              <p className="text-[10px] sm:text-[8px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-xl text-gray-300">{feature.type}</p>
            </div>)
          }
        </div>
        {/* Features section end */}
        {/* content section end */}
      </div>
    </div>
  );
};

export default Features;