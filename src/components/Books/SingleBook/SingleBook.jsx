import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleBook = () => {
  //get params data
  const {id} = useParams();

  //get data
  const [books, setBooks] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("/dreamBooks.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data?.find((item) => item.id == id);
        setBooks(items)
      });
  }, [id]);

  console.log(books)

  return (
    <div className="py-10">
      <div className="container mx-auto">
        {/* content section start */}
        <div className="flex justify-between items-center px-5">
          {/* image section start */}
          <div className="sm:flex-1">
            <img src={books.image}></img>
          </div>
          {/* image section end */}
          {/* description section start */}
          <div className="sm:flex-1">
            <ul>
              <li className="text-xl text-white">{books.name}</li>
            </ul>
          </div>
          {/* description section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default SingleBook;