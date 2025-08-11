import React from 'react';

const items = [
  { id: 1, title: 'Workshops', desc: 'Interactive career workshops and seminars.' },
  { id: 2, title: 'Student Success', desc: 'Celebrating our students’ milestones.' },
  { id: 3, title: 'Programs', desc: 'Highlights from ABP, CBP, and SBP.' },
  { id: 4, title: 'Institutions', desc: 'Collaborations with schools and colleges.' },
  { id: 5, title: 'Branding', desc: 'Personal branding sessions and outcomes.' },
  { id: 6, title: 'Community', desc: 'Building a vibrant learning community.' },
];

const Gallery = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Gallery</h1>
      <p className="mt-2 text-slate-600 max-w-3xl">A glimpse into our initiatives, programs, and success stories.</p>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.id} className="rounded-xl border bg-white p-6">
            <div className="h-32 rounded-md bg-amber-100 mb-4" />
            <div className="font-semibold text-slate-800">{it.title}</div>
            <div className="text-sm text-slate-600 mt-1">{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


