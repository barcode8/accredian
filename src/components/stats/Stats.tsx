import React from 'react';
import StatCard from './StatCard';

const statsData = [
  {
    id: 1,
    value: '10K+',
    description: 'Professionals Trained For Exceptional Career Success',
  },
  {
    id: 2,
    value: '200+',
    description: 'Sessions Delivered With Unmatched Learning Excellence',
  },
  {
    id: 3,
    value: '5K+',
    description: 'Active Learners Engaged In Dynamic Courses',
  },
];

export default function Stats() {
  return (
    <section id="stats" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-gray-600 font-medium">
            The Numbers Behind <span className="text-blue-600">Our Success</span>
          </p>
        </div>

        {/* Stats Container with Dividers */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-stretch lg:justify-evenly gap-12 lg:gap-0">
          {statsData.map((stat, index) => (
            <React.Fragment key={stat.id}>
              {/* The Stat Card */}
              <div className="flex-1 flex justify-center">
                <StatCard value={stat.value} description={stat.description} />
              </div>
              
              {/* Vertical Divider (Hidden on mobile, visible on lg screens) */}
              {index < statsData.length - 1 && (
                <div className="hidden lg:block w-px bg-gray-200 self-stretch mx-4" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}
