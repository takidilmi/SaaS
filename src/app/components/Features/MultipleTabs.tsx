'use client';

import Image from 'next/image';
import { Tabs } from '@/components/ui/tabs';

export function MultipleTabs() {
  const tabs = [
    {
      title: 'Management',
      value: 'management',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Sales Management</p>
          <DummyContent
            height={1000}
            width={1000}
            src="/Tabs/SalesManagement.webp"
          />
        </div>
      ),
    },
    {
      title: 'Inventory',
      value: 'inventory',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Inventory Management</p>
          <DummyContent
            height={1000}
            width={1000}
            src="/Tabs/InventoryManagement.webp"
          />
        </div>
      ),
    },
    {
      title: 'Analytics',
      value: 'analytics',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Analytics and Reporting</p>
          <DummyContent
            height={1000}
            width={1000}
            src="/Tabs/AnalyticsandReporting.webp"
          />
        </div>
      ),
    },
    {
      title: 'Pricing',
      value: 'pricing',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Pricing Optimization</p>
          <DummyContent
            height={1000}
            width={1000}
            src="/Tabs/PricingOptimization.webp"
          />
        </div>
      ),
    },
    {
      title: 'Insights',
      value: 'insights',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Business Insights</p>
          <DummyContent
            src="/Tabs/BusinessInsights.webp"
            height={1000}
            width={1000}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center mb-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({
  src,
  height,
  width,
}: {
  src: string;
  height: number;
  width: number;
}) => {
  return (
    <Image
      src={src}
      alt="dummy image"
      width={width}
      height={height}
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
