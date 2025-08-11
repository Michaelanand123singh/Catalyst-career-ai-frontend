import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center py-10 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800">
          Empowering Careers. Elevating Education.
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Established in 2019, CATALYST empowers students, professionals, and institutions
          through innovative learning techniques and personalized guidance.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/chat" className="px-5 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600">Try Career AI</Link>
          <Link to="/services" className="px-5 py-3 rounded-md border border-amber-200 text-amber-700 font-semibold hover:bg-amber-50">Explore Services</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="rounded-xl border bg-white p-6">
          <div className="text-sm font-semibold text-amber-600">Personal Branding Growth</div>
          <p className="mt-2 text-slate-600">Tailored programs to build a strong personal brand and accelerate professional identity.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <div className="text-sm font-semibold text-amber-600">Psychometric Assessment</div>
          <p className="mt-2 text-slate-600">Scientific career assessment to uncover strengths, interests, and ideal paths.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <div className="text-sm font-semibold text-amber-600">Profile Acceleration</div>
          <p className="mt-2 text-slate-600">ABP, CBP, and SBP programs to enhance academics, careers, and skills.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;


