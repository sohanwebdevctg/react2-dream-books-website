

const Cart = () => {



  const cart = null;
// const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.discount,0);


  return (
    <div className="h-full flex items-center">
          <div className="container mx-auto py-2 sm:px-3 lg:p-10">
      <div className="flex justify-between items-center px-2 py-3">
        <ul className="flex gap-1 items-center py-3 pl-2 text-blue-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          <li className="font-bold">Total : </li>
          {/* <li className="font-bold"> ${sum ? sum : '00'}</li> */}
        </ul>
        <button className="btn btn-warning btn-xs lg:btn-sm 2xl:btn-md">DeleteAll</button>
      </div>
      <div className="overflow-x-auto">
        {
          cart?.length > 0 ? (<table className="table">
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
            <tbody>{cart?.map((item,index) => <tr key={index} className="text-gray-400">
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
              <td>
                <button className="btn btn-warning btn-xs">delete</button>
              </td>
            </tr>)}</tbody>
            
          </table>) : (<p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-yellow-500">No Data Available Here</p>)
        }
      </div>
    </div>
    </div>
  );
};

export default Cart;
