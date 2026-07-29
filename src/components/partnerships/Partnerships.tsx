import React from 'react';
import LogoGrid from './LogoGrid';

const logoData = [
  {
    id: 'bayer',
    src: '/logos/bayer.png',
    alt: 'Bayer',
    width: 110,
    height: 50,
  },
  {
    id: 'adp',
    src: '/logos/adp.png',
    alt: 'ADP',
    width: 120,
    height: 50,
  },
  {
    id: 'reliance',
    src: '/logos/rel.png',
    alt: 'Reliance Industries Limited',
    width: 170,
    height: 50,
  },
  {
    id: 'hcl',
    src: '/logos/hcl.png',
    alt: 'HCL',
    width: 120,
    height: 50,
  },
  {
    id: 'ibm',
    src: '/logos/ibm.png',
    alt: 'IBM',
    width: 100,
    height: 50,
  },
  {
    id: 'crif',
    src: '/logos/crif.png',
    alt: 'CRIF',
    width: 120,
    height: 50,
  },
];

export default function Partnerships() {
  return (
    <section
      id="clients"
      className="w-full border-t border-gray-100 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Our Proven <span className="text-blue-600">Partnerships</span>
          </h2>

          <p className="text-lg font-medium text-gray-600">
            Successful Collaborations With the{' '}
            <span className="text-blue-600">Industry&apos;s Best</span>
          </p>
        </div>

        {/* Logo Grid */}
        <LogoGrid logos={logoData} />
      </div>
    </section>
  );
}