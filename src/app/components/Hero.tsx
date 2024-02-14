import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className='flex flex-col items-center w-2/3 gap-3'>
          <Link href="">Discover our latest updates and features</Link>
          <h1 className="text-7xl text-center font-bold">
            The app that simplifies your life
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Link className='text-3xl bg-red-600 hover:bg-purple-600 transition-all duration-300 hover:scale-90 rounded-[8px] p-2' href="">Get Started, Don&apos;t Miss out</Link>
            <p>based on 10000+ reviews from</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
