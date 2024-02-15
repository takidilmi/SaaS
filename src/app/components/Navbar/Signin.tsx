'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Signin() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignin = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div onClick={toggleSignin}>
      {isSignedIn ? (
        <div className="dropdown">
          <img
            className="h-10 w-10 rounded-full"
            src={`https://api.dicebear.com/7.x/micah/svg?seed=Moira&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
            alt="user-image"
          />
          <div className="dropdown-content -right-[70px] pt-3">
            <Link
              href="/dashboard"
              className="text-violet-800 hover:text-white transition-all duration-300"
            >
              Dashboard
            </Link>
            <Link
              href="/users"
              className="text-violet-800 hover:text-white transition-all duration-300"
            >
              Users
            </Link>
            <Link
              href="/orders"
              className="text-violet-800 hover:text-white transition-all duration-300"
            >
              Orders
            </Link>
          </div>
        </div>
      ) : (
        <Link href="">Signin</Link>
      )}
    </div>
  );
}
