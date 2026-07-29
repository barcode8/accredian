import React from "react";
import type { LucideIcon } from "lucide-react";

export interface ProcessCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProcessCard({
  step,
  icon: Icon,
  title,
  description,
}: ProcessCardProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center rounded-2xl border border-[#9ec3ff] bg-[#f5f9ff] px-8 pb-10 pt-14 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Step Number */}
      <div className="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#9ec3ff] bg-white text-sm font-bold text-gray-700 shadow">
        {step}
      </div>

      {/* Icon */}
      <div className="mb-8 flex h-18 w-18 items-center justify-center rounded-full bg-[#2563eb] shadow-lg">
        <Icon
          size={30}
          strokeWidth={2}
          className="text-white"
        />
      </div>

      <h3 className="mb-4 text-[20px] font-bold text-gray-900">
        {title}
      </h3>

      <p className="max-w-[220px] text-[16px] leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}