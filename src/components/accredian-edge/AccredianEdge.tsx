import Image from 'next/image';

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>

          <p className="text-lg font-medium text-gray-600">
            Key Aspects of{' '}
            <span className="text-blue-600">Our Strategic Training</span>
          </p>
        </div>

        {/* Accredian Edge Graphic */}
        <div className="flex justify-center">
          <Image
            src="/banner/accredian-edge-usp-v3.svg"
            alt="Accredian Edge"
            width={1400}
            height={700}
            priority
            className="h-auto w-full max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
}