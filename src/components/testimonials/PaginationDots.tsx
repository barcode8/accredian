interface PaginationDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function PaginationDots({
  count,
  activeIndex,
  onSelect,
}: PaginationDotsProps) {
  return (
    <div
      className="mt-10 flex items-center justify-center gap-3"
      aria-label="Testimonial navigation"
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Go to testimonial group ${index + 1}`}
          aria-current={activeIndex === index ? "true" : undefined}
          className={`h-3 w-3 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
            activeIndex === index
              ? "bg-[#2563eb]"
              : "bg-[#cbd5e1] hover:bg-[#94a3b8]"
          }`}
        />
      ))}
    </div>
  );
}