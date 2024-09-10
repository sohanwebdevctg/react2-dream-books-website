
import { useNavigation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Offer from "../Offer/Offer";
import OurReader from "../OurReader/OurReader";
import LoadingPage from "../../LoadingPage/LoadingPage";
import Title from "../../Title/Title";



const AboutUs = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

  return (
    <div>
      {/* title section start */}
      <Title title={'AboutUs'}></Title>
      {/* title section end */}
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* offer section start */}
      <Offer></Offer>
      {/* offer section end */}
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