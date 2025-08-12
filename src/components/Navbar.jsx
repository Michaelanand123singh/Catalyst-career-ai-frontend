import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, ChevronDown, BookOpen, Calendar, Lightbulb, User, LogOut, Settings } from 'lucide-react';
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
    // Show confirmation dialog
    if (!window.confirm('Are you sure you want to sign out?')) {
      return;
    }
    
    setIsLoggingOut(true);
    
    try {
      logout();
      setUserDropdownOpen(false);
      close();
      
      // If user is on a protected route (like /chat), redirect to home
      if (location.pathname === '/chat') {
        navigate('/');
      }
      
      // Show a brief success message
      const message = document.createElement('div');
      message.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      message.textContent = 'Successfully signed out!';
      document.body.appendChild(message);
      
      setTimeout(() => {
        document.body.removeChild(message);
      }, 3000);
    } catch (error) {
      console.error('Logout error:', error);
      // Show error message
      const message = document.createElement('div');
      message.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
      message.textContent = 'Error signing out. Please try again.';
      document.body.appendChild(message);
      
      setTimeout(() => {
        document.body.removeChild(message);
      }, 3000);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Focus management for dropdown
  useEffect(() => {
    if (userDropdownOpen) {
      const firstMenuItem = userDropdownRef.current?.querySelector('[role="menuitem"]');
      if (firstMenuItem) {
        firstMenuItem.focus();
      }
    } else {
      // Return focus to the button when dropdown closes
      const button = userDropdownRef.current?.querySelector('#user-menu-button');
      if (button) {
        button.focus();
      }
    }
  }, [userDropdownOpen]);

  // Handle clicking outside the user dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setUserDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (!userDropdownOpen) return;
      
      const menuItems = userDropdownRef.current?.querySelectorAll('[role="menuitem"]');
      const currentIndex = Array.from(menuItems || []).findIndex(item => item === document.activeElement);
      
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (menuItems && currentIndex < menuItems.length - 1) {
            menuItems[currentIndex + 1].focus();
          } else if (menuItems && menuItems.length > 0) {
            menuItems[0].focus();
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (menuItems && currentIndex > 0) {
            menuItems[currentIndex - 1].focus();
          } else if (menuItems && menuItems.length > 0) {
            menuItems[menuItems.length - 1].focus();
          }
          break;
        case 'Home':
          event.preventDefault();
          if (menuItems && menuItems.length > 0) {
            menuItems[0].focus();
          }
          break;
        case 'End':
          event.preventDefault();
          if (menuItems && menuItems.length > 0) {
            menuItems[menuItems.length - 1].focus();
          }
          break;
      }
    };

    if (userDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [userDropdownOpen]);

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
            
            <NavLink to="/blog" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact Us
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              // User is logged in - show user dropdown
              <div className="relative" ref={userDropdownRef}>
                <button
                  id="user-menu-button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
                  aria-expanded={userDropdownOpen}
                  aria-haspopup="true"
                  aria-label={`User menu for ${user.name || user.email || 'User'}`}
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
                    aria-labelledby="user-menu-button"
                  >
                    <div className="py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name || 'User'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            close();
                            navigate('/chat');
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors"
                          role="menuitem"
                          tabIndex={0}
                          aria-label="Open Career AI Chat"
                        >
                          <Sparkles className="h-4 w-4" />
                          Career AI Chat
                        </button>
                        
                        <button
                          onClick={() => {
                            setUserDropdownOpen(false);
                            close();
                            // Add profile page navigation here when available
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors"
                          role="menuitem"
                          tabIndex={0}
                          aria-label="Open Profile Settings"
                        >
                          <Settings className="h-4 w-4" />
                          Profile Settings
                        </button>
                        
                        <div className="border-t border-gray-100 my-1"></div>
                        
                        <button
                          onClick={handleLogout}
                          disabled={isLoggingOut}
                          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          role="menuitem"
                          tabIndex={0}
                          aria-label={isLoggingOut ? 'Signing out...' : 'Sign out of your account'}
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
              // User is not logged in - show login button
              <button
                onClick={() => setAuthOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Career AI
              </button>
            )}
            
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
            
            <NavLink to="/blog" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-slate-700'}`}>
              Contact Us
            </NavLink>
            
            {/* Mobile User Section */}
            {user ? (
              <div className="border-t border-gray-200 pt-3 mt-2">
                <div className="text-xs font-medium text-amber-600 mb-2">ACCOUNT</div>
                <div className="px-3 py-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">
                      {user.profile_picture ? (
                        <img 
                          src={user.profile_picture} 
                          alt={user.name || 'User'} 
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        (user.name || user.email || 'U').charAt(0).toUpperCase()
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{user.name || 'User'}</div>
                      <div className="text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    close();
                    navigate('/chat');
                  }}
                  className="w-full mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600"
                >
                  <Sparkles className="h-4 w-4" />
                  Career AI Chat
                </button>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-300 text-red-600 text-sm font-semibold hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LogOut className="h-4 w-4" />
                  {isLoggingOut ? 'Signing out...' : 'Sign Out'}
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthOpen(true);
                  close();
                }}
                className="mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600"
              >
                <Sparkles className="h-4 w-4" />
                Career AI
              </button>
            )}
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