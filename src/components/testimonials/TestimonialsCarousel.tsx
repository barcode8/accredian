'use client';

import { useMemo, useState } from 'react';
import PaginationDots from './PaginationDots';
import TestimonialCard, { type Testimonial } from './TestimonialCard';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    const grouped: Testimonial[][] = [];

    for (let i = 0; i < testimonials.length; i += 2) {
      grouped.push(testimonials.slice(i, i + 2));
    }

    return grouped;
  }, [testimonials]);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
          }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full shrink-0 grid-cols-1 gap-6 md:grid-cols-2"
            >
              {page.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <PaginationDots
        count={pages.length}
        activeIndex={currentPage}
        onSelect={setCurrentPage}
      />
    </div>
  );
}