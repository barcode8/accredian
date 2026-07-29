'use client';

import React, { useState } from 'react';
import FAQItem from './FAQItem';

export interface FAQData {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQData[];
}

export default function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full">
      {questions.map((item) => (
        <FAQItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
      
      {questions.length === 0 && (
        <p className="text-gray-500 py-4">No questions available for this category.</p>
      )}
    </div>
  );
}
