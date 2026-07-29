import Image from "next/image";

export interface Testimonial {
  id: string;
  quote: string;
  company: string;
  logo: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#d9e2f1] bg-white p-8 transition-shadow duration-300 hover:shadow-md lg:p-10">
      {/* Company Logo */}
      <div className="mb-8 flex h-14 items-center">
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={140}
          height={60}
          className="h-12 w-auto object-contain object-left"
        />
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-[17px] leading-8 text-[#4b5563]">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}