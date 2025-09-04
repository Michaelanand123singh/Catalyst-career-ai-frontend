import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Sparkles, Menu, X, ChevronDown, BookOpen,
  Lightbulb, LogOut, Settings
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userDropdownRef = useRef(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleLogout = async () => {
    if (!window.confirm('Are you sure you want to sign out?')) return;
    setIsLoggingOut(true);

    try {
      logout();
      setUserDropdownOpen(false);
      close();

      if (location.pathname === '/chat') navigate('/');

      // success message
      const message = document.createElement('div');
      message.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      message.textContent = 'Successfully signed out!';
      document.body.appendChild(message);
      setTimeout(() => document.body.removeChild(message), 3000);
    } catch (error) {
      console.error('Logout error:', error);
      const message = document.createElement('div');
      message.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      message.textContent = 'Error signing out. Please try again.';
      document.body.appendChild(message);
      setTimeout(() => document.body.removeChild(message), 3000);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Dropdown focus management
  useEffect(() => {
    if (userDropdownOpen) {
      const firstMenuItem = userDropdownRef.current?.querySelector('[role="menuitem"]');
      firstMenuItem?.focus();
    } else {
      const button = userDropdownRef.current?.querySelector('#user-menu-button');
      button?.focus();
    }
  }, [userDropdownOpen]);

  // Dropdown click/esc/arrow handling
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    const handleEscape = (e) => e.key === 'Escape' && setUserDropdownOpen(false);
    const handleKeyDown = (e) => {
      if (!userDropdownOpen) return;
      const items = userDropdownRef.current?.querySelectorAll('[role="menuitem"]');
      const currentIndex = Array.from(items || []).findIndex(i => i === document.activeElement);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        items?.[currentIndex + 1]?.focus() || items?.[0]?.focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        items?.[currentIndex - 1]?.focus() || items?.[items.length - 1]?.focus();
      }
      if (e.key === 'Home') {
        e.preventDefault(); items?.[0]?.focus();
      }
      if (e.key === 'End') {
        e.preventDefault(); items?.[items.length - 1]?.focus();
      }
    };
    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [userDropdownOpen]);

  const baseLink =
    'px-2 py-1 rounded-full text-sm hover:text-white hover:bg-[#395f56] hover:font-bold';
  const activeClass =
    'text-white bg-[#395f56] font-bold text-md px-1';

  const megaMenuItems = {
    Assessment: {
      title: 'Assessment Test',
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { name: 'For School Students', path: '/school-students' },
        { name: 'For College Students', path: '/college-students' },
        { name: 'For Working Professionals', path: '/working-professional' },
      ],
    },
    services: {
      title: 'Additional Services',
      icon: <Lightbulb className="h-5 w-5" />,
      items: [
        { name: 'AI Career Assistant', path: '/ai-career' },
        { name: 'AI Job Search', path: '/ai-job' },
      ],
    },
  };

  const handleMegaMenuEnter = (menuKey) => setActiveMegaMenu(menuKey);
  const handleMegaMenuLeave = () => setActiveMegaMenu(null);

  return (
    <>
      {/* Top Info Bar */}
      <div className="relative w-full bg-white text-[#2d4d45] shadow-md">
        <div className="flex items-center justify-end px-6 py-3">
          <div className="flex items-center space-x-4">
            <i className="font-semibold text-md sm:text-xl md:text-2xl tracking-wide text-[#20433C]">
              Quries: <span className="font-bold text-md">help@catalystcareers.in</span>
            </i>
            <i className="font-semibold text-md sm:text-xl md:text-2xl tracking-wide text-[#20433C]">
              Direct Appointment: <span className="font-bold text-md">+91 7277277477</span>
            </i>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-2 p-1 sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-around">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={close}>
  <img 
    src="/images/CATT.png" 
    alt="Catalyst" 
    className="h-20 w-auto max-w-[12rem] rounded-full object-contain" 
  />
</Link>


            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-[#20433C] border rounded-full p-2 px-4 text-white">
              <NavLink to="/" end onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                About Us
              </NavLink>

              {/* Mega Menu */}
              {Object.entries(megaMenuItems).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMegaMenuEnter(key)}
                  onMouseLeave={handleMegaMenuLeave}
                >
                  <button
                    onClick={() => setActiveMegaMenu(activeMegaMenu === key ? null : key)}
                    className={`${baseLink} flex items-center gap-1 ${
                      activeMegaMenu === key ? "bg-[#3d5f56] font-bold px-3 py-2 rounded-lg" : ""
                    }`}
                  >
                    {menu.icon}
                    {menu.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Dropdown */}
                  {activeMegaMenu === key && (
                    <div className="absolute top-full left-0 w-80 rounded-lg bg-[#20433C] shadow-xl z-50 mt-1">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                          {menu.icon}
                          <h3 className="font-semibold text-white">{menu.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {menu.items.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.path}
                              onClick={close}
                              className={({ isActive }) =>
                                `block p-3 rounded-lg text-sm font-medium transition-colors ${
                                  isActive
                                    ? "bg-[#395f56] text-white font-bold"
                                    : "text-white hover:bg-[#395f56]"
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <NavLink to="/upcoming-events" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                Events
              </NavLink>
              <NavLink to="/success-stories" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                Success Stories
              </NavLink>
              <NavLink to="/blog" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                Blog
              </NavLink>
              <NavLink to="/contact" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ''}`}>
                Contact Us
              </NavLink>
            </div>

            {/* Right Section */}
          <div className="flex items-center gap-2">
  {user ? (
    // User Dropdown
    <div className="relative" ref={userDropdownRef}>
      <button
        id="user-menu-button"
        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#20433C] text-white text-lg font-semibold hover:bg-[#1b382f]"
        aria-expanded={userDropdownOpen}
      >
        <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
          {user.profile_picture ? (
            <img
              src={user.profile_picture}
              alt={user.name || 'User'}
              className="h-6 w-6 rounded-full object-cover"
            />
          ) : (
            (user.name || user.email || 'U').charAt(0).toUpperCase()
          )}
        </div>
        {user.name || user.email?.split('@')[0] || 'User'}
        <ChevronDown className="h-4 w-4" />
      </button>

      {userDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="text-lg font-medium text-gray-900">{user.name || 'User'}</div>
              <div className="text-md text-gray-500">{user.email}</div>
            </div>
            <div className="py-1">
              <button
                onClick={() => { setUserDropdownOpen(false); close(); navigate('/chat'); }}
                className="w-full flex items-center gap-3 px-4 py-2 text-md text-[#20433C] hover:bg-[#20433C]/10"
                role="menuitem"
              >
                <Sparkles className="h-4 w-4" />
                Career AI Chat
              </button>
              <button
                onClick={() => { setUserDropdownOpen(false); close(); }}
                className="w-full flex items-center gap-3 px-4 py-2 text-md text-[#20433C] hover:bg-[#20433C]/10"
                role="menuitem"
              >
                <Settings className="h-4 w-4" />
                Profile Settings
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full flex items-center gap-3 px-4 py-2 text-md text-red-600 hover:bg-red-50 disabled:opacity-50"
                role="menuitem"
              >
                <LogOut className="h-4 w-4" />
                {isLoggingOut ? 'Signing out...' : 'Sign Out'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    // Login Button
    <button
      onClick={() => setAuthOpen(true)}
      className="relative inline-flex items-center gap-2 px-4 py-3 rounded-full
                 bg-[#20433C] text-white text-md font-semibold shadow-lg hover:shadow-2xl animate-pulse"
    >
      <span className="relative flex items-center gap-2">
        <Sparkles className="h-6 w-6 animate-bounce" />
        Catalyst AI
      </span>
    </button>
  )}

  {/* Mobile Toggle */}
  <button
    onClick={toggle}
    className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border text-[#20433C]"
  >
    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </button>
</div>

          </div>
        </div>

        {/* Mobile Menu (unchanged for brevity) */}
        {/* Keep your mobile code here as it is... */}

        <AuthModal
          isOpen={authOpen}
          onClose={() => {
            setAuthOpen(false);
            if (user) navigate('/chat');
          }}
        />
      </nav>
    </>
  );
};

export default Navbar;
