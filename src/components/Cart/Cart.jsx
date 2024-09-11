import { useContext } from "react";
import { AuthContext } from './../Context/AuthProvider';

const Cart = () => {

  const {cart} = useContext(AuthContext);
  console.log(cart)
  return (
    <div className="h-full flex items-center">
          <div className="container mx-auto py-2 sm:px-3 lg:p-10">
      <div className="flex gap-1 items-center py-3 pl-2 text-blue-600">
        <h3 className="font-bold text-lg">Total : </h3>
        <p className="font-bold text-lg"> $120</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-yellow-500">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row start */}
            {
              cart.map((item,index) => <tr key={index} className="text-gray-400">
              <td>{++index}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>
                <p>${item.discount}</p>
              </td>
              <th>
                <button className="btn btn-warning btn-xs">delete</button>
              </th>
            </tr>)
            }
            {/* row start */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Cart;
