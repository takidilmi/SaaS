import React from 'react';
import Hero from './components/Hero/Hero';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import { CardProps } from './components/Dashboard/Card';

const cardData: CardProps[] = [
  {
    title: 'Total Revenue',
    amount: '$45,231.89',
    description: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    title: 'Subscriptions',
    amount: '+2350',
    description: '+180.1% from last month',
    icon: Users,
  },
  {
    title: 'Sales',
    amount: '+12,234',
    description: '+19% from last month',
    icon: CreditCard,
  },
  {
    title: 'Active Now',
    amount: '+573',
    description: '+201 since last hour',
    icon: Activity,
  },
];

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
