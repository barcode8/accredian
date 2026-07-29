import React from "react";
import type { LucideIcon } from "lucide-react";

export interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AudienceCard({
  icon: Icon,
  title,
  description,
}: AudienceCardProps) {
  return (
    <div className="flex flex-col items-start text-white">
      <div className="mb-5">
        <Icon
          size={48}
          strokeWidth={1.8}
          className="text-white"
        />
      </div>

      <h3 className="mb-2 text-[22px] font-semibold">
        {title}
      </h3>

      <p className="max-w-[260px] text-[17px] leading-7 text-blue-100">
        {description}
      </p>
    </div>
  );
}