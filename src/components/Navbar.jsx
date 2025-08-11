import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const baseLink = 'px-3 py-2 rounded-md text-sm font-medium hover:text-amber-600 hover:bg-amber-50';
  const activeClass = 'text-amber-600 bg-amber-50';

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" onClick={close}>
              <div className="h-8 w-8 grid place-items-center rounded-md bg-amber-500 text-white font-bold">C</div>
              <div className="font-semibold tracking-tight">CATALYST</div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Services
            </NavLink>
            <NavLink to="/gallery" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Gallery
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (user) {
                  close();
                  navigate('/chat');
                } else {
                  setAuthOpen(true);
                }
              }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600"
            >
              <Sparkles className="h-4 w-4" />
              Career AI
            </button>
            <button onClick={toggle} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border text-slate-700">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            <NavLink to="/" end onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Services
            </NavLink>
            <NavLink to="/gallery" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Gallery
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact
            </NavLink>
            <button
              onClick={() => {
                if (user) {
                  close();
                  navigate('/chat');
                } else {
                  setAuthOpen(true);
                }
              }}
              className="mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600"
            >
              <Sparkles className="h-4 w-4" />
              Career AI
            </button>
          </div>
        </div>
      )}
      <AuthModal
        isOpen={authOpen}
        onClose={() => {
          setAuthOpen(false);
          if (user) navigate('/chat');
        }}
      />
    </nav>
  );
};

export default Navbar;