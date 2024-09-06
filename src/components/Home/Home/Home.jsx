// eslint-disable-next-line no-unused-vars
import './Home.css';
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';
import OurApp from '../OurApp/OurApp';


const Home = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
  
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* facilities section start */}
      <Facilities></Facilities>
      {/* facilities section end */}
      {/* featuredBooks section start */}
      <FeaturedBooks></FeaturedBooks>
      {/* featuredBooks section end */}
      {/* outApp section start */}
      <OurApp></OurApp>
      {/* outApp section end */}
    </div>
  );
};

export default Home;