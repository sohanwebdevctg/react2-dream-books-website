import OurReader from "../../OurReader/OurReader";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";


const AboutUs = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* Features section start */}
      <Features></Features>
      {/* Features section end */}
      {/* ourReaders section start */}
      <OurReader></OurReader>
      {/* ourReaders section end */}
    </div>
  );
};

export default AboutUs;