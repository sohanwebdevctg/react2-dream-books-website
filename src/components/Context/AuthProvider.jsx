import { useState } from "react";
import { createContext } from "react";


//authProvider
export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  //card
  const [card, setCard] = useState([]);


  // user info
  const info = {card, setCard}

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;