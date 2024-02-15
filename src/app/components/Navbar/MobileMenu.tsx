'use client';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Signin from './Signin';

function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);
  return (
    <nav className="lg:hidden absolute right-0 z-50 no-scrollbar navbar-end no-scrollbar">
      {!open && (
        <button
          onClick={handleClick}
          className="z-50 justify-center px-3 py-2 text-sm font-semibold"
          aria-label="Open Menu"
        >
          <HiOutlineMenuAlt3 className="w-6 h-6 text-purple-800" />
        </button>
      )}
      <motion.div
        animate={
          open ? { width: '100%', height: '100vh' } : { width: 0, height: 0 }
        }
        transition={{ duration: 0.5 }}
        className={`${
          open ? 'flex' : 'hidden'
        } flex-col fixed justify-center overflow-hidden w-screen h-screen bg-purple-800 bg-opacity-30 backdrop-blur-lg top-0 right-0`}
      >
        <div className="mx-10 pl-10 rounded-3xl normal-case font-normal text-white tracking-wider w-[80%] self-end">
          <Signin />
        </div>
        {open && (
          <button
            onClick={handleClick}
            className="z-50 justify-center px-3 absolute right-0 top-0 py-2 text-sm font-semibold"
            aria-label="Close Menu"
          >
            <HiOutlineX className="text-purple-800 w-6 h-6" />
          </button>
        )}
        <Link
          className="py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-red-600 tracking-wider"
          href=""
        >
          Product
        </Link>

        <div className="py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-red-600 tracking-wider">
          <div className="dropdown z-10">
            <span>
              Learn <i className="arrow"></i>
            </span>
            <div className="dropdown-content bg-purple-300 bg-opacity-70 backdrop-blur-lg rounded-[4px]">
              <a href="">Learn 1</a>
              <a href="">Learn 2</a>
              <a href="">Learn 3</a>
            </div>
          </div>
        </div>        
        <Link
          className="py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-red-600 tracking-wider"
          href=""
        >
          Pricing
        </Link>
        <Link
          className="py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-red-600 tracking-wider"
          href=""
        >
          Contact
        </Link>
        <div className="py-8 text-center transition-all duration-500 hover:translate-x-1 normal-case font-light text-5xl text-red-600 tracking-wider">
          <div className="dropdown">
            <span>
              Solutions <i className="arrow"></i>
            </span>
            <div className="dropdown-content bg-purple-300 bg-opacity-70 backdrop-blur-lg rounded-[4px]">
              <a href="">Solution 1</a>
              <a href="">Solution 2</a>
              <a href="">Solution 3</a>
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

export default MobileMenu;
