// eslint-disable-next-line no-unused-vars
import './Books.css'
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Banner from '../Banner/Banner';
import TopBooks from '../TopBooks/TopBooks';
import DreamBooks from '../DreamBooks/DreamBooks';
import Title from '../../Title/Title';

const Books = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}


  return (
    <div>
      {/* title section start */}
      <Title title={'Books'}></Title>
      {/* title section end */}
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