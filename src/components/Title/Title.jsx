import { Helmet } from "react-helmet-async";


const Title = ({title}) => {
  return (
    <div>
      <Helmet>
        <title>Dream Books | {title}</title>
      </Helmet>
    </div>
  );
};

export default Title;