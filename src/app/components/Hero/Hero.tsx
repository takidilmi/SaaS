import React from 'react';
import { GoogleEffect } from './GoogleEffect';
import { Parallax } from './Parallax';

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <GoogleEffect />
      <Parallax />
    </>
  );
}
