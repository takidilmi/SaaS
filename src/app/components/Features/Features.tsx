import React from 'react';
import { MultipleTabs } from './MultipleTabs';

const Features = () => {
  return (
    <>
      <section className="bg-black pb-20 w-screen flex flex-col gap-2">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Our Features
        </h2>
        <MultipleTabs />
      </section>
    </>
  );
};

export default Features;
