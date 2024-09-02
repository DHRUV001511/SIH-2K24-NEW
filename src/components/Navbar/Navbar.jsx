import React from "react";
import GranthSetu from "../../assets/GranthSetu.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <img src={GranthSetu} alt="logo" className="h-16 w-16 mr-3" /> {/* Increased logo size */}
          <span className="font-bold text-3xl font-classy-marisa">
            GranthSetu
          </span>
        </div>
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


