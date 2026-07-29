import React from "react";
import type { LucideIcon } from "lucide-react";

export interface DomainCardProps {
  title: string;
  icon: LucideIcon;
}

export default function DomainCard({
  title,
  icon: Icon,
}: DomainCardProps) {
  return (
    <div className="flex h-[145px] w-full max-w-[315px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Icon
        size={44}
        strokeWidth={2.2}
        className="mb-5 text-[#2563eb]"
      />

      <h3 className="text-center text-[18px] font-semibold leading-snug text-gray-900">
        {title}
      </h3>
    </div>
  );
}