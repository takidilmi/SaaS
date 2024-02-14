import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-end z-50 text-white w-full fixed top-0">
      <a
        className="self-center"
        href="/"
      >
        Logo
      </a>
      <div className="flex justify-between items-center w-1/2 p-1 gap-2 px-2 bg-purple-800 bg-opacity-10 backdrop-blur-lg rounded-xl">
        <div className="flex space-x-4">
          <div className="bg-purple-800 h-[2px] w-[120px] self-center"></div>
          <a href="">Product</a>
          <div className="dropdown">
            <span>Learn</span>
            <div className="dropdown-content">
              <a href="">Learn 1</a>
              <a href="">Learn 2</a>
              <a href="">Learn 3</a>
            </div>
          </div>
          <div className="dropdown">
            <span>Solutions</span>
            <div className="dropdown-content">
              <a href="">Solution 1</a>
              <a href="">Solution 2</a>
              <a href="">Solution 3</a>
            </div>
          </div>
          <a href="">Pricing</a>
        </div>
        <div className="flex space-x-3 flex-wrap items-center">
          <a href="">Contact</a>
          <a href="">SignIn</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
