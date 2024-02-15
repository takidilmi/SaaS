import React from 'react';
import { WavyBackgroundDemo } from './WavyBackground';

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <>
      <section className="overflow-hidden flex relative flex-col items-center justify-center">
        <WavyBackgroundDemo />
      </section>
    </>
  );
}
