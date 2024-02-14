import React from 'react';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import Card, { CardContent, CardProps } from '../components/Dashboard/Card';
import BarChart from '../components/Dashboard/BarChart';
import SalesCard, { SalesProps } from '../components/Dashboard/SalesCard';

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
const userSalesData: SalesProps[] = [
  {
    name: 'Asmaa Dilmi',
    email: 'asmaa.dilmi@email.com',
    saleAmount: '+$599.00',
  },
  {
    name: 'Muhammed Boune',
    email: 'Muhammed.Boune@email.com',
    saleAmount: '+$999.00',
  },
  {
    name: 'Seif Eddine',
    email: 'seif.eddine@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'Halla Dilmi',
    email: 'halla@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    saleAmount: '+$79.00',
  },
];
const page = () => {
  return (
    <>
      <div className="bg-white p-8 flex flex-col gap-5 pt-20 w-full">
        <h1 className="text-3xl font-bold">Dashboard</h1>
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
          <CardContent className=" flex justify-between gap-4">
            <section>
              <p>Recent Sales</p>
              <p className="text-sm text-gray-400">
                You made 49 more sales this month
              </p>
            </section>
            {userSalesData.map((d, i) => (
              <SalesCard
                key={i}
                email={d.email}
                name={d.name}
                saleAmount={d.saleAmount}
              />
            ))}
          </CardContent>
        </section>
      </div>
    </>
  );
};

export default page;
