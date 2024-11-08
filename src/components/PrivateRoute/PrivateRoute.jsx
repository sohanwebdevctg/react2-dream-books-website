import { useState } from "react";
import { getData } from "../../localStorage";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    // loading data
    const [cart, setCart] = useState(() => getData());
    
    if(cart.length > 0){
      return children;
    }else{
      return <Navigate to="/books"></Navigate>
    }
};

export default PrivateRoute;