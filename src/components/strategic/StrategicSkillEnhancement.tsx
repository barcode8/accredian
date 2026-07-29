import React from "react";
import Image from "next/image";

import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import AudienceCard from "./AudienceCard";
import type { AudienceCardProps } from "./AudienceCard";

const audienceData: AudienceCardProps[] = [
  {
    icon: MonitorCheck,
    title: "Tech Professionals",
    description:
      "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    icon: MonitorX,
    title: "Non-Tech Professionals",
    description:
      "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: GraduationCap,
    title: "Emerging Professionals",
    description:
      "Develop powerful skills for rapid career growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Senior Professionals",
    description:
      "Strengthen leadership, enhance strategic decisions.",
  },
];

export default function StrategicSkillEnhancement() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto flex max-w-[1400px] flex-col overflow-hidden rounded-[42px] bg-[#2569d8] px-10 pt-12 shadow-sm lg:flex-row lg:px-16 lg:pt-16">

        {/* Left */}
        <div className="flex w-full flex-col justify-between lg:w-1/2">
          <div>
            <p className="mb-3 text-xl text-blue-100">
              Who Should Join?
            </p>

            <h2 className="max-w-md text-6xl font-bold leading-tight text-white">
              Strategic Skill Enhancement
            </h2>
          </div>

          <div className="relative mt-10 h-[360px] w-full">
            <Image
              src="/images/imagehuman.png"
              alt="Strategic Skill Enhancement"
              fill
              className="object-contain object-bottom-left"
              priority
            />
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-16 py-14 sm:grid-cols-2 lg:w-1/2 lg:pl-8">
          {audienceData.map((audience) => (
            <AudienceCard
              key={audience.title}
              {...audience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}