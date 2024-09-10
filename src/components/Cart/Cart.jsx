const Cart = () => {
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
            {/* row 1 */}
            <tr className="text-gray-400">
              <td>1</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                oneoneone one 
              </td>
              <td>
                <p>$100</p>
              </td>
              <th>
                <button className="btn btn-warning btn-xs">delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Cart;
