// eslint-disable-next-line no-unused-vars
import './Books.css'
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Banner from '../Banner/Banner';
import TopBooks from '../TopBooks/TopBooks';
import DreamBooks from '../DreamBooks/DreamBooks';

const Books = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}


  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* dreamBooks section start */}
      <DreamBooks></DreamBooks>
      {/* dreamBooks section end */}
      {/* topBooks section start */}
      <TopBooks></TopBooks>
      {/* topBooks section end */}
    </div>
  );
};

export default Books;