'use client';
import React, { useState } from 'react';

type Props = {};

export default function Signin({}: Props) {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    // Load the initial state from localStorage when the component mounts
    const savedState = localStorage.getItem('isSignedIn');
    return savedState === 'true';
  });

  const toggleSignin = () => {
    const newState = !isSignedIn;
    setIsSignedIn(newState);

    // Save the state to localStorage whenever it changes
    localStorage.setItem('isSignedIn', String(newState));
  };

  return (
    <>
      <button onClick={toggleSignin}>
        {isSignedIn ? (
          <img
            className="h-10 w-10 rounded-full"
            src={`https://api.dicebear.com/7.x/micah/svg?seed=User&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
            alt="user-image"
          />
        ) : (
          'Signin'
        )}
      </button>
    </>
  );
}
