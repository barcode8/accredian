import React from 'react';

export interface StatCardProps {
  value: string;
  description: string;
}

export default function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="bg-[#e6f0ff] text-blue-600 font-bold text-2xl lg:text-3xl px-8 py-3 rounded-full mb-4 inline-flex items-center justify-center min-w-[120px]">
        {value}
      </div>
      <p className="text-gray-800 font-medium text-sm lg:text-base leading-snug max-w-[250px]">
        {description}
      </p>
    </div>
  );
}
