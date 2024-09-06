// eslint-disable-next-line no-unused-vars
import './Home.css';
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Banner from '../Banner/Banner';


const Home = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}
  
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
    </div>
  );
};

export default Home;