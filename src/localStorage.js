const getLocalStorage = () => {
  let cart = [];
  const localStorageData = localStorage.getItem('cart');
  if(localStorageData){
    cart = JSON.parse(localStorageData)
  }
  return cart;
}

const setItem = (id) => {

  let cart = getLocalStorage();
  // cart.push({'id' : id});
  cart.push(id);
  const setCartData = JSON.stringify(cart);
  localStorage.setItem('cart', setCartData);

}

export {getLocalStorage, setItem}