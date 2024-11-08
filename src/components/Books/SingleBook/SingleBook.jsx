import { ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { getData, setData} from "../../../localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleBook = () => {
  //get params data
  const {id} = useParams();

  //get data
  const [books, setBooks] = useState([]);

  //loading page
  const [load, setLoad] = useState(false)

  // fetch data
  useEffect(() => {
    setLoad(true)
    fetch("/dreamBooks.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.find((item) => item.id == id);
        setBooks(items);
        setLoad(false)
      });
  }, [id]);

  //navigate
  const navigate =  useNavigate();
  // previous button
  const previousBtn = () => {
    navigate(-1)
  }

  //buyBtn id in local storage
  const buyBtn = (books) => {
    
    const book = {
      id : books.id,
      author : books.author,
      name: books.name,
      image: books.image,
      price : books.price
    }

    // get data and checked data
    const checkData = getData();
    const findData = checkData.find((item) => item.id === book.id)

    if(findData){
      toast("Sorry, Your data has been saved");
      location.reload();
    }else{
    // setLocalStorage
    setData(book)
    //notify
    toast("Your data added");
    location.reload();
    }
  }

  if(load){
    return <LoadingPage></LoadingPage>
  }

  return (
    <div className="py-10 h-full">
      <div className="container mx-auto h-full flex items-center p-3">
        {/* content section start */}
        <div className="sm:flex sm:justify-between sm:items-center p-5 h-full w-full border-2 border-blue-600 bg-black bg-opacity-30">
          {/* image section start */}
          <div className="sm:flex-1 p-5 ">
            <img src={books?.image} className="mx-auto w-full h-56 sm:h-60 md:h-[260px] lg:h-72 xl:w-full xl:h-[332px] 2xl:h-96"></img>
          </div>
          {/* image section end */}
          {/* description section start */}
          <div className="sm:flex-1 p-5">
            <ul className="space-y-2">
              <li className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-yellow-500 font-bold">{books.name}</li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:2xl">
                <strong className="text-white">Author Name :</strong> <span className="text-gray-500"> {books?.name}</span>
              </li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                <strong className="text-white">Published :</strong><span className="text-gray-500"> {books?.publishedDate}</span>
              </li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                <strong className="text-white">Rating :</strong><span className="text-gray-500"> {books?.rating}</span>
              </li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                <strong className="text-white">Price :</strong> <del className="text-gray-500"> ${books?.price}</del>
              </li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                <strong className="text-white">Discount :</strong><span className="text-gray-500"> ${books?.discount}</span>
              </li>
              <li className="w-full xl:w-[95%]">
                <strong className="text-white text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">Details :</strong><span className="text-yellow-500 text-xs sm:text-xs ms:text-xs lg:text-base xl:text-lg 2xl:text-xl"> {books?.details}</span>
              </li>
          <li className='mt-5 flex md:gap-1 gap-2 xl:gap-3'>
            {/* button section start */}
            <button onClick={() => buyBtn(books)} className='bg-gray-500 text-blue-800 font-semibold md:font-bold rounded-md hover:bg-yellow-500 hover:text-slate-100 duration-300 text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-xl px-2 py-1 2xl:px-3 2xl:py-3'>Buy Now</button>
            <button onClick={previousBtn} className='bg-yellow-500 text-slate-100 py-1 px-2 2xl:px-3 2xl:py-3 font-semibold md:font-bold rounded-md duration-300 flex items-center text-xs sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl'><ArrowLeftOnRectangleIcon className="h-5 w-5 font-bold text-slate-100" />Previous</button>
            {/* button section end */}
          </li>
            </ul>
          </div>
          {/* description section end */}
        </div>
        {/* content section end */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleBook;