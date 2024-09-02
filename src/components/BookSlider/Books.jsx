import React from "react";
import Book1 from "../../assets/books/sihbook1.jpg";
import Book2 from "../../assets/books/sihbook2.jpg";
import Book3 from "../../assets/books/sihbook3.jpg";
import Book4 from "../../assets/books/sihbook4.jpg";
import Book5 from "../../assets/books/sihbook5.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Computer System Architecture",
    rating: 5.0,
    author: "By M.Morris Mano",
    price: 300,
  },
  {
    id: 2,
    img: Book2,
    title: "Database Management System",
    rating: 4.5,
    author: "By A.A.Puntambekar",
    price: 350,
  },
  {
    id: 3,
    img: Book3,
    title: "Discrete Maths",
    rating: 4.7,
    author: "By Kenneth H Rosen",
    price: 250,
  },
  {
    id: 4,
    img: Book4,
    title: "Computer Networking",
    rating: 4.4,
    author: "By Abhishek Jaguessar",
    price: 320,
  },
  {
    id: 5,
    img: Book5,
    title: "General Medicine",
    rating: 4.5,
    author: "By Neeraj Mahajan",
    price: 280,
  },
];

const Books = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F0FFFF" }}>
        <div className="container py-14">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1
              className="text-3xl font-bold"
              style={{ fontFamily: "'ARKHIP', sans-serif" }} // Updated font style
            >
              Top Books
            </h1>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-5 gap-6 place-items-center">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author, price }) => (
                <div
                  key={id}
                  className="space-y-8 p-9 bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-[#004aad] transition-shadow duration-300"
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-[200px] w-[150px] object-cover rounded-md"
                  />
                  <div className="text-black text-center">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center justify-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                    <div className="text-lg font-bold">
                      Rs. {price}
                    </div>
                    {/* Add to Cart Button */}
                    <button className="mt-3 bg-[#ff914d] text-white py-1 px-4 rounded-md hover:bg-[#e67b38] transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Books Button */}
            <div className="flex justify-center mt-10">
              <button className="text-center cursor-pointer bg-[#004aad] text-white py-2 px-6 rounded-md hover:bg-[#003a8c] transition-colors duration-300">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;

