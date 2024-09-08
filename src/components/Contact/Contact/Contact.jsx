import { useNavigation } from "react-router-dom";
import LoadingPage from "../../LoadingPage/LoadingPage";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";


const Contact = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* contactForm section start */}
      <ContactForm></ContactForm>
      {/* contactForm section end */}
    </div>
  );
};

export default Contact;