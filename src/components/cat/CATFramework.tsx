import Image from "next/image";

export default function CATFramework() {
  return (
    <section
      id="cat"
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>

          <p className="text-lg font-medium text-gray-600">
            Our Proven Approach to{" "}
            <span className="text-blue-600">
              Learning Excellence
            </span>
          </p>
        </div>

        {/* CAT Framework Illustration */}
        <div className="flex justify-center">
          <Image
            src="/banner/cat.svg"
            alt="CAT Framework"
            width={1200}
            height={520}
            priority
            className="h-auto w-full max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
}