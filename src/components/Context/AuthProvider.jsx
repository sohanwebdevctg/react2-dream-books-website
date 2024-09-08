import { useState } from "react";
import { createContext } from "react";


//authProvider
export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  //card
  const [card, setCard] = useState([])

  // color
  const [color, setColor] = useState(false)

  // toggle color
  const toggleColor = () => {
    setColor(!color)
  }

  // user info
  const info = {card,color, setColor,toggleColor, setCard}

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;