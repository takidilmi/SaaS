import { LucideIcon } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  amount: string;
};

export default function Card(props: CardProps) {
  return (
    <>
      <CardContent>
        <section className='flex justify-between gap-2'>
          <p className="text-sm">{props.title}</p>
          <props.icon className='h-4 w-4 text-gray-400' />
        </section>
        <section className='flex flex-col'>
          <h2 className='text-2xl font-semibold'>{props.amount}</h2>
          <p className='text-xs text-gray-500'>{props.description}</p>
        </section>
      </CardContent>
    </>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div
        {...props}
        className={cn(
          'flex w-full flex-col gap-3 rounded-xl border p-5 shadow',
          props.className
        )}
      />
    </>
  );
}
