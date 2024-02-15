'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Signin() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignin = () => {    
    setIsSignedIn(!isSignedIn);
  };

  return (
    <Link href="" onClick={toggleSignin}>
      {isSignedIn ? (
        <div className="dropdown">
          <img
            className="h-10 w-10 rounded-full"
            src={`https://api.dicebear.com/7.x/micah/svg?seed=Moira&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
            alt="user-image"
          />
          <div className="dropdown-content -right-[70px] pt-3">
            <a href="/dashboard" className='text-white hover:text-violet-800'>Dashboard</a>
            <a href="/users" className='text-white hover:text-violet-800'>Users</a>
            <a href="/orders" className='text-white hover:text-violet-800'>Orders</a>
          </div>
        </div>
      ) : (
        'Signin'
      )}
    </Link>
  );
}
