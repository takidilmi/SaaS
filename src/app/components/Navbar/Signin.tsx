'use client';
import React, { useState } from 'react';

export default function Signin() {
  // Load the initial state from localStorage when the component mounts
  const [isSignedIn, setIsSignedIn] = useState(false) ;

  const toggleSignin = () => {    
    setIsSignedIn(!isSignedIn);
  };

  return (
    <button onClick={toggleSignin}>
      {isSignedIn ? (
        <img
          className="h-10 w-10 rounded-full"
          src={`https://api.dicebear.com/7.x/micah/svg?seed=Moira&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
          alt="user-image"
        />
      ) : (
        'Signin'
      )}
    </button>
  );
}