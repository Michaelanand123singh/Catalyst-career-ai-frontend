import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, ChevronDown, BookOpen, Calendar, Lightbulb } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const baseLink = 'px-2 py-2 rounded-md text-sm font-medium hover:text-amber-600 hover:bg-amber-50';
  const activeClass = 'text-amber-600 bg-amber-50';

  const megaMenuItems = {
    services: {
      title: 'Services',
      icon: <Lightbulb className="h-5 w-5" />,
      items: [
        { name: 'Career Counseling', path: '/services', description: 'Professional career guidance' },
        { name: 'Assessment Tests', path: '/assessment-tests', description: 'Discover your potential' },
        { name: 'Resume Building', path: '/services', description: 'Professional resume creation' },
        { name: 'Interview Prep', path: '/services', description: 'Ace your interviews' }
      ]
    },
    learning: {
      title: 'Learning',
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { name: 'Seminars & Workshops', path: '/seminars-workshops', description: 'Interactive learning sessions' },
        { name: 'Resources', path: '/resources', description: 'Career development tools' },
        { name: 'Success Stories', path: '/success-stories', description: 'Inspiring transformations' }
      ]
    },
    events: {
      title: 'Events',
      icon: <Calendar className="h-5 w-5" />,
      items: [
        { name: 'Upcoming Events', path: '/upcoming-events', description: 'Career development events' },
        { name: 'Webinars', path: '/upcoming-events', description: 'Online learning sessions' },
        { name: 'Networking Events', path: '/upcoming-events', description: 'Connect with professionals' }
      ]
    }
  };

  const handleMegaMenuEnter = (menuKey) => {
    setActiveMegaMenu(menuKey);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <nav className="border-b bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" onClick={close}>
              <div className="h-8 w-8 grid place-items-center rounded-md bg-amber-500 text-white font-bold">C</div>
              <div className="font-semibold tracking-tight">CATALYST</div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" end onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              About Us
            </NavLink>
            
            {/* Mega Menu Items */}
            {Object.entries(megaMenuItems).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMegaMenuEnter(key)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <button className={`${baseLink} flex items-center gap-1 text-slate-700`}>
                  {menu.icon}
                  {menu.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeMegaMenu === key && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        {menu.icon}
                        <h3 className="font-semibold text-gray-900">{menu.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {menu.items.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={close}
                            className="block p-3 rounded-md hover:bg-amber-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact Us
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
            <button onClick={toggle} className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border text-slate-700">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            <NavLink to="/" end onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              About Us
            </NavLink>
            
            {/* Mobile Services Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">SERVICES</div>
              <NavLink to="/services" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Career Counseling
              </NavLink>
              <NavLink to="/assessment-tests" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Assessment Tests
              </NavLink>
            </div>
            
            {/* Mobile Learning Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">LEARNING</div>
              <NavLink to="/seminars-workshops" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Seminars & Workshops
              </NavLink>
              <NavLink to="/resources" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Resources
              </NavLink>
              <NavLink to="/success-stories" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Success Stories
              </NavLink>
            </div>
            
            {/* Mobile Events Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">EVENTS</div>
              <NavLink to="/upcoming-events" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
                Upcoming Events
              </NavLink>
            </div>
            
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact Us
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