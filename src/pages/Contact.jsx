import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Contact Us</h1>
      <p className="mt-2 text-slate-600">We would love to hear from you. Send us a message and we will respond promptly.</p>

      {submitted ? (
        <div className="mt-6 rounded-lg border bg-white p-6 text-slate-700">
          Thank you! Your message has been received. We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 rounded-lg border bg-white p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={onChange}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows={4} value={form.message} onChange={onChange}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <button type="submit" className="px-5 py-2 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600">
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;


