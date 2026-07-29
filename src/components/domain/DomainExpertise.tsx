import React from "react";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Cog,
  Globe,
  CreditCard,
} from "lucide-react";

import DomainCard from "./DomainCard";
import type { DomainCardProps } from "./DomainCard";

const domainData: DomainCardProps[] = [
  {
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    title: "Leadership Elevation",
    icon: Users,
  },
  {
    title: "Tech & Data Insights",
    icon: BarChart3,
  },
  {
    title: "Operations Excellence",
    icon: Cog,
  },
  {
    title: "Digital Enterprise",
    icon: Globe,
  },
  {
    title: "Fintech Innovation Lab",
    icon: CreditCard,
  },
];

export default function DomainExpertise() {
  return (
    <section className="w-full bg-[#fafbfc] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Our <span className="text-blue-600">Domain Expertise</span>
          </h2>

          <p className="text-lg font-medium text-gray-600">
            <span className="text-blue-600">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {domainData.map((domain) => (
            <div
              key={domain.title}
              className="flex w-full justify-center sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <DomainCard {...domain} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}