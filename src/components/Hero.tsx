import Image from "next/image";
import EnquireNowButton from './EnquireNowButton';

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16"
    >
      <div className="mesh rounded-[2.5rem] overflow-hidden shadow-sm relative">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
          {/* Left Content Area */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center z-10">
            <h1 className="text-4xl lg:text-[3.5rem] leading-[1.1] font-bold text-gray-900 mb-6">
              Next-Gen <br className="hidden sm:block" />
              <span className="text-blue-600">Expertise</span> For{" "}
              <br className="hidden sm:block" />
              Your <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="text-gray-800 text-lg lg:text-xl font-medium max-w-md mb-8">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span className="text-sm font-semibold text-gray-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <EnquireNowButton className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-medium text-lg hover:bg-blue-700 transition-colors shadow-sm w-fit" />
          </div>

          {/* Right Image Area */}
          <div className="relative flex w-full lg:w-1/2 items-center justify-center min-h-[320px] lg:min-h-[500px] p-6 lg:p-10">
            <Image
              src="/images/hero.webp"
              alt="Corporate learning illustration"
              width={700}
              height={650}
              priority
              className="w-full max-w-[620px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
