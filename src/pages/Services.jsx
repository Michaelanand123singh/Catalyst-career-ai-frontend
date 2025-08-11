import React from 'react';

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Our Services</h1>
      <p className="mt-2 text-slate-600 max-w-3xl">
        At CATALYST, we bridge the gap in traditional learning with specialized services designed for holistic development and career success.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold text-amber-600">Personal Branding Growth Solutions</h2>
          <p className="mt-2 text-slate-600">Tailored programs to build a strong personal brand and accelerate professional identity.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold text-amber-600">Scientific Psychometric Career Assessment</h2>
          <p className="mt-2 text-slate-600">A comprehensive tool to identify strengths, interests, and ideal career paths using proven frameworks.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold text-amber-600">Profile Acceleration Programs</h2>
          <p className="mt-2 text-slate-600">ABP (Academic Booster), CBP (Career Booster), and SBP (Skill Booster) to enhance performance and development.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;


