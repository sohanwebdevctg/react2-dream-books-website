

/* local storage data start */
const getData = () => {
  const data = JSON.parse(localStorage.getItem('cart')) || [];
  return data;
}

const setData = (cartData) => {

  const getPreviousData = getData();
  getPreviousData.push(cartData)

  return localStorage.setItem('cart', JSON.stringify(getPreviousData))
}

const deleteSingleData = (id) => {

  const getPreviousData = getData();
  const newData = getPreviousData.filter((item) => item.id !== id);
  return localStorage.setItem('cart', JSON.stringify(newData));
  
}

const deleteAllData = () => {
  return localStorage.removeItem('cart');
}


/* local storage data start */
export {getData, setData, deleteSingleData, deleteAllData};