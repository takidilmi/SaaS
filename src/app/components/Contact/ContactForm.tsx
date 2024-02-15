'use client';
import { useState, FormEvent, useEffect } from 'react';

type FormProps = {
  formId: string;
};

const ContactForm: React.FC<FormProps> = ({ formId }) => {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = form.elements.namedItem('message') as HTMLTextAreaElement;

    if (message.value.length < 50) {
      setStatus('VALIDATION_ERROR');
      return;
    }

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus('SUCCESS');
          form.reset();
        } else {
          setStatus('ERROR');
        }
      })
      .catch((error) => {
        setStatus('ERROR');
      });
  };

  return (
    <div className="bg-black p-5">
      <form
        onSubmit={submitForm}
        action={`https://formspree.io/f/${formId}`}
        method="POST"
        className="flex bg-white flex-col gap-4 max-w-md mx-auto p-4 border-2 border-gray-300 rounded-md"
      >
        <label
          htmlFor="fullName"
          className="flex flex-col"
        >
          Full Name:
          <input
            placeholder="ex: Linus Torvalds"
            type="text"
            name="fullName"
            id="fullName"
            required
            className="p-2 border-2 border-gray-300 rounded-md"
          />
        </label>
        <label
          htmlFor="phone"
          className="flex flex-col"
        >
          Phone Number:
          <input
            placeholder="ex: +1234567890"
            type="tel"
            name="phone"
            id="phone"
            required
            className="p-2 border-2 border-gray-300 rounded-md"
          />
        </label>
        <label
          htmlFor="email"
          className="flex flex-col"
        >
          Your Email:
          <input
            placeholder="ex: 2Gh1I@example.com"
            type="email"
            name="email"
            id="email"
            required
            className="p-2 border-2 border-gray-300 rounded-md"
          />
        </label>
        <label
          htmlFor="message"
          className="flex flex-col"
        >
          Your Message:
          <textarea
            placeholder="What can we help you with?"
            name="message"
            id="message"
            required
            className="p-2 border-2 border-gray-300 rounded-md"
          />
        </label>
        {status === 'SUCCESS' ? (
          <p className="text-green-500 text-center">
            Thanks for contacting us!
          </p>
        ) : (
          <button className="p-2 bg-blue-500 text-white rounded-md">
            Submit
          </button>
        )}
        {status === 'ERROR' && (
          <p className="text-red-600 text-center">
            Ooops! There was an error. If you&apos;ve been sending a lot of
            messages, you may have exceeded the monthly quota. Please try again
            later.
          </p>
        )}
        {status === 'VALIDATION_ERROR' && (
          <p className="text-red-600 text-center">
            Please ensure the message is at least 50 characters long.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
