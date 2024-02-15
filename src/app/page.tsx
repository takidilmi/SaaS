import React from 'react';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';
import ContactForm from './components/Contact/ContactForm';

const page = () => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  // We check if the formId is not defined (it could be undefined if the environment variable is not set)
  if (!formId) {
    // If the formId is not defined, we throw an error. This stops the execution of the code here and prints an error message.
    throw new Error('Formspree form ID is not set in environment variables');
  }

  return (
    <>
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <ContactForm formId={formId} />
      </main>
    </>
  );
};

export default page;
