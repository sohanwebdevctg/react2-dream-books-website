import { useState } from "react";
import { deleteSingleData,deleteAllData, getData } from "../../localStorage";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Cart = () => {

  //getData from localStorage
  const [cart, setCart] = useState(() => getData());
  const navigate = useNavigate();

const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price,0);

  // deleteAllData
  const deleteAll = () => {
    deleteAllData();
    toast("your data deleted successfully");
    location.reload();
  }

  //deleteSingleData
  const deleteSingleCart = (id) => {
    deleteSingleData(id);
    toast("your data deleted");
    location.reload();
  }

   // buy data
   const buyData = (event) => {

    event.preventDefault();

    const form = event.target;
    
    const totalItem = form.totalItem.value;
    const totalPrice = form.totalPrice.value;
    const email = form.email.value;
    const accountNumber = form.accountNumber.value;

    // checked user
    if(email === null && accountNumber === null && totalItem === null && totalPrice === null){
      toast("your data is invalid");
    }else{
      deleteAllData();
      toast("successfully purchased");
      navigate('/');
      location.reload();
    }
  }


  return (
    <>
    
    <div className="h-full flex items-center">
      <div className="container mx-auto py-2 sm:px-3 lg:p-10">
      <div className="flex justify-between items-center px-2 py-3">
        <ul className="flex gap-1 items-center py-3 pl-2 text-blue-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <li className="font-bold">Total : <span className="text-white">{cart.length || 0}</span></li>
          {/* <li className="font-bold"> ${sum ? sum : '00'}</li> */}
        </ul>
        <button onClick={deleteAll} className="btn btn-warning btn-xs lg:btn-sm 2xl:btn-md">DeleteAll</button>
      </div>
      {/* table start */}
      <div className="overflow-x-auto">
        {
          cart?.length > 0 ? (<table className="table">
            {/* head */}
            <thead className="bg-blue-600">
              <tr className="text-yellow-500">
                <th>#</th>
                <th>Image</th>
                <th>Author</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{cart?.map((item,index) => <tr key={index} className="text-gray-400">
              <td>{++index}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src={item?.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{item.author}</td>
              <td>{item.name}</td>
              <td>
                <p>${item.price}</p>
              </td>
              <td>
                <button onClick={() => deleteSingleCart(item?.id)} className="btn btn-warning btn-xs">delete</button>
              </td>
            </tr>)}</tbody>
          </table>) : (<p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-yellow-500">No Data Available Here</p>)
        }
      </div>
      {/* table end */}
{/* buy start */}
<div className="card bg-blue-600 w-full shadow-2xl mt-10 sm:w-11/12  md:w-10/12 lg:w-8/12 mx-auto">
            <form onSubmit={buyData} className="card-body w-full">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-5 ">
                {/* left start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Item</span>
                  </label>
                  <input
                    type="text"
                    value={cart ? cart?.length : 0}
                    placeholder="your total item"
                    className="input input-bordered w-full"
                    name="totalItem"
                  />
                </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Price</span>
                </label>
                <input
                  type="text"
                  value={sum ? parseInt(sum) : 0}
                  placeholder="your total price"
                  className="input input-bordered"
                  name="totalPrice"
                />
              </div>
              </div>
              {/* left end */}
              {/* right start */}
              <div className="flex-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter you email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Account Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="enter you account number"
                    className="input input-bordered"
                    required
                    name="accountNumber"
                  />
                </div>
              </div>
              {/* right end */}
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn bg-yellow-500 hover:bg-yellow-500 text-white w-full">Buy Now</button>
              </div>
            </form>
          </div>
          {/* buy end */}
    </div>
    <ToastContainer />
    </div>
    </>
  );
};

export default Cart;
