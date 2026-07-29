import React from "react";
import SegmentationCard from "./SegmentationCard";
import type { SegmentationCardProps } from "./SegmentationCard";

const courseData: SegmentationCardProps[] = [
  {
    image: "/course/project-management.webp",
    title: "Program Specific",
    description:
      "Certificate, Executive, Post Graduate Certificate",
  },
  {
    image: "/course/digital-transformation.webp",
    title: "Industry Specific",
    description:
      "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    image: "/course/data-science.webp",
    title: "Topic Specific",
    description:
      "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    image: "/course/senior-management.webp",
    title: "Level Specific",
    description:
      "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

export default function CourseSegmentation() {
  return (
    <section className="w-full border-t border-gray-100 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Tailored{" "}
            <span className="text-blue-600">
              Course Segmentation
            </span>
          </h2>

          <p className="text-lg font-medium text-gray-600">
            Explore{" "}
            <span className="text-blue-600">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {courseData.map((course) => (
            <SegmentationCard
              key={course.title}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}