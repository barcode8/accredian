'use client';

import React, { useState } from 'react';
import FAQCategory from './FAQCategory';
import FAQAccordion from './FAQAccordion';
import EnquireNowButton from '../EnquireNowButton';

// Type definitions
type CategoryId = 'course' | 'delivery' | 'misc';

interface CategoryData {
  id: CategoryId;
  label: string;
}

// Data structures
const categories: CategoryData[] = [
  { id: 'course', label: 'About the Course' },
  { id: 'delivery', label: 'About the Delivery' },
  { id: 'misc', label: 'Miscellaneous' },
];

const faqData: Record<CategoryId, { id: string; question: string; answer: string }[]> = {
  course: [
    {
      id: 'q1',
      question: 'What types of corporate training programs does Accredian offer?',
      answer: 'We offer a wide range of corporate training programs covering Data Science, Product Management, AI, and Leadership.',
    },
    {
      id: 'q2',
      question: 'What domain specializations are available?',
      answer: 'Our specializations include BFSI, Healthcare, Supply Chain, Retail, and Manufacturing.',
    },
  ],
  delivery: [
    {
      id: 'q3',
      question: 'Are the sessions live or pre-recorded?',
      answer: 'We offer both live interactive sessions and self-paced pre-recorded modules depending on your organizational needs.',
    }
  ],
  misc: [
    {
      id: 'q4',
      question: 'Do you offer bulk discounts for large teams?',
      answer: 'Yes, we provide specialized enterprise pricing for teams larger than 10 members.',
    }
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('course');

  return (
    <section id="faqs" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Categories */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {categories.map((cat) => (
              <FAQCategory
                key={cat.id}
                id={cat.id}
                label={cat.label}
                isActive={activeCategory === cat.id}
                onClick={(id) => setActiveCategory(id as CategoryId)}
              />
            ))}
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-2/3">
            <FAQAccordion questions={faqData[activeCategory]} />
          </div>

        </div>

        {/* Enquire Button */}
        <div className="mt-16 text-center">
          <EnquireNowButton className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors shadow-sm" />
        </div>

      </div>
    </section>
  );
}
