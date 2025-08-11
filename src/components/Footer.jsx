import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} CATALYST. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-amber-600">About</Link>
            <Link to="/services" className="hover:text-amber-600">Services</Link>
            <Link to="/contact" className="hover:text-amber-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


