import React from "react";

import {
  ChartColumnIncreasing,
  MonitorCog,
  MonitorPlay,
} from "lucide-react";

import ProcessCard from "./ProcessCard";
import ProcessConnector from "./ProcessConnector";
import type { ProcessCardProps } from "./ProcessCard";

const processData: ProcessCardProps[] = [
  {
    step: 1,
    icon: ChartColumnIncreasing,
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs.",
  },
  {
    step: 2,
    icon: MonitorCog,
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
  },
  {
    step: 3,
    icon: MonitorPlay,
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function DeliveryProcess() {
  return (
    <section
      id="process"
      className="overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-5xl">
            How We{" "}
            <span className="text-blue-600">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="text-lg text-gray-600">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-stretch lg:gap-0">

          {processData.map((process, index) => (
            <React.Fragment key={process.step}>

              <div className="w-full max-w-[330px]">
                <ProcessCard {...process} />
              </div>

              {index < processData.length - 1 && (
                <ProcessConnector />
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
}