import React from 'react';

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export default function SalesCard(props: SalesProps) {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3">
        <section className="flex justify-between gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
            <img
              src={`https://api.dicebear.com/7.x/micah/svg?seed=${props.name}&backgroundType=gradientLinear&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`}
              alt="avatar"
              width={200}
              height={200}
            />
          </div>
          <div className="text-sm">
            <p>{props.name}</p>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
              {props.email}
            </div>
          </div>
        </section>
        <p>{props.saleAmount}</p>
      </div>
    </>
  );
}
