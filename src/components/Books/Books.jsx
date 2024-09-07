// eslint-disable-next-line no-unused-vars
import './Books.css'
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';
import AllBooks from './AllBooks/AllBooks';
import Banner from './Banner/Banner';

const Books = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}


  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* allBooks section start */}
      {/* <AllBooks></AllBooks> */}
      {/* allBooks section end */}
      {/* topBooks section start */}
      {/* topBooks section end */}
    </div>
  );
};

export default Books;