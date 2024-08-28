import React from "react";
import GranthSetu from "../../assets/GranthSetu.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-2">
        {}
        <div className="flex items-center">
          <img src={GranthSetu} alt="logo" className="h-10 w-10 mr-2" />
          <span className="font-bold text-xl">GranthSetu</span>
        </div>
        {}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Signup</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
