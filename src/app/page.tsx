import React from 'react';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';

const page = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </>
  );
};

export default page;
