import React from 'react';

export interface FAQCategoryProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export default function FAQCategory({ id, label, isActive, onClick }: FAQCategoryProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full text-left px-6 py-4 rounded-xl border text-base font-semibold transition-all duration-200 shadow-sm ${
        isActive
          ? 'bg-white border-blue-100 text-blue-600 shadow-md ring-1 ring-blue-50'
          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
