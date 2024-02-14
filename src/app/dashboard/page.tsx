import React from 'react';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import Card, { CardContent, CardProps } from '../components/Dashboard/Card';
import BarChart from '../components/Dashboard/BarChart';

const cardData: CardProps[] = [
  {
    title: 'Customers',
    description: 'Total number of customers',
    icon: DollarSign,
    amount: '10k+',
  },
  {
    title: 'Customers',
    description: 'Total number of customers',
    icon: Users,
    amount: '10k+',
  },
  {
    title: 'Customers',
    description: 'Total number of customers',
    icon: CreditCard,
    amount: '10k+',
  },
  {
    title: 'Customers',
    description: 'Total number of customers',
    icon: Activity,
    amount: '10k+',
  },
];
const page = () => {
  return (
    <>
      <div className="bg-white p-8">
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((d, i) => (
            <Card
              key={i}
              title={d.title}
              description={d.description}
              icon={d.icon}
              amount={d.amount}
            />
          ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
          <CardContent>
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made 49 more sales this month
              </p>
            </section>
          </CardContent>
        </section>
      </div>
    </>
  );
};

export default page;
