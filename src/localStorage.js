

/* local storage data start */
const getData = () => {
  const data = JSON.parse(localStorage.getItem('cart')) || [];
  return data;
}

const setData = (cartData) => {

  const getPreviousData = getData();
  getPreviousData.push(cartData)

  localStorage.setItem('cart', JSON.stringify(getPreviousData))
}


/* local storage data start */
export {getData, setData}