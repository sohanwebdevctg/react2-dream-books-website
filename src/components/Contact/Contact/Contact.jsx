import { useNavigation } from "react-router-dom";
import LoadingPage from "../../LoadingPage/LoadingPage";
import Banner from "../Banner/Banner";


const Contact = () => {

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

export default Contact;