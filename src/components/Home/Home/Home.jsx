// eslint-disable-next-line no-unused-vars
import './Home.css';
import { useNavigation } from 'react-router-dom';
import LoadingPage from '../../LoadingPage/LoadingPage';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import FeaturedBooks from '../FeaturedBooks/FeaturedBooks';


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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui distinctio cumque a necessitatibus, ex labore. Maiores id accusantium nihil delectus excepturi, eum voluptatum asperiores debitis, praesentium assumenda voluptatem, exercitationem eius quis repudiandae vero tempore modi voluptate dignissimos est. Dolore vero nesciunt necessitatibus odit error iste reiciendis quos, vitae rem voluptas facilis laborum consequuntur totam veritatis commodi natus ea distinctio voluptatibus tenetur, nam perspiciatis soluta beatae, officia quisquam? Enim pariatur incidunt culpa alias magni ea, ab rerum fuga accusantium quibusdam repudiandae nihil reprehenderit cumque iste. Deserunt quas doloribus dolore modi, vitae vero quo sunt necessitatibus rerum eligendi omnis nihil iure eos sequi commodi? Assumenda, deserunt possimus qui repellendus totam, delectus corporis dolore accusamus mollitia veniam iste voluptatum cupiditate necessitatibus temporibus nemo unde fugiat exercitationem. Modi delectus maxime et praesentium sequi? Id corrupti aut obcaecati laudantium autem accusantium molestias? Ab saepe nihil deserunt error praesentium. Autem sit maiores at accusamus quas. Neque omnis voluptas deleniti laboriosam non eveniet molestiae laborum explicabo expedita quia voluptatum culpa consectetur quos consequatur, saepe quasi. Tenetur iste ullam voluptatum ipsam hic, totam magni, nam aspernatur, natus necessitatibus dignissimos reiciendis recusandae iusto animi omnis culpa similique delectus facilis? Quam cum natus commodi reprehenderit ipsam ullam, sed sunt nostrum?</p>
    </div>
  );
};

export default Home;