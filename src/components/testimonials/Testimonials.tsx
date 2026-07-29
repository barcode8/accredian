import TestimonialsCarousel from "./TestimonialsCarousel";
import type { Testimonial } from "./TestimonialCard";

const testimonials: Testimonial[] = [
  {
    id: "adp",
    quote:
      '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
    company: "ADP",
    logo: "/logos/adp.png",
  },
  {
    id: "bayer",
    quote:
      '"Accredian’s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
    company: "Bayer",
    logo: "/logos/bayer.png",
  },
  {
    id: "reliance",
    quote:
      '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."',
    company: "Reliance",
    logo: "/logos/rel.png",
  },
  {
    id: "ibm",
    quote:
      '"The customized learning approach helped our teams apply concepts immediately. The engagement and execution exceeded expectations."',
    company: "IBM",
    logo: "/logos/ibm.png",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#222]">
            Testimonials from{" "}
            <span className="text-[#2563eb]">
              Our Partners
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            What{" "}
            <span className="text-[#2563eb]">
              Our Clients
            </span>{" "}
            Are Saying
          </p>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />

      </div>
    </section>
  );
}