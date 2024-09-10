import { useNavigation } from "react-router-dom";
import LoadingPage from "../../LoadingPage/LoadingPage";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Location from "../Location/Location";
import Title from "../../Title/Title";


const Contact = () => {

  const navigation = useNavigation()
  {navigation.state === 'loading' ? <LoadingPage></LoadingPage> : ''}

  return (
    <div>
      {/* title section start */}
      <Title title={'Contact'}></Title>
      {/* title section end */}
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* contactForm section start */}
      <ContactForm></ContactForm>
      {/* contactForm section end */}
      {/* location section start */}
      <Location></Location>
      {/* location section end */}
    </div>
  );
};

export default Contact;