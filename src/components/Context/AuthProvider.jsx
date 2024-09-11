import { useEffect, useState } from "react";
import { createContext } from "react";
import { getLocalStorage } from "../../localStorage";


//authProvider
export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  //card
  const [card, setCard] = useState([]);

  //cartData
  const [cart, setCart] = useState([])

  //fetch dreamsBooks
  useEffect(() => {
    fetch('dreamBooks.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[]);

  //get localStorage data
  useEffect(() => {
    if(card.length){
      const local = getLocalStorage();
      const saveCard = []
      for(const id of local){
        const findId = card.find((item) => item.id === id);
        if(findId){
          saveCard.push(findId)
        }
      }
      setCart(saveCard)
    }
  },[card]);
  

  // user info
  const info = {cart}

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;