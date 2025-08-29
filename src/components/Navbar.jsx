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

  const baseLink = 'px-2 py-2 rounded-full text-md font-medium hover:text-white hover:bg-[#395f56] hover:font-bold hover:px-2';
  const activeClass = 'text-white bg-[#395f56] font-bold text-lg px-2';

  const megaMenuItems = {
      Assessment: {
      title: 'Assessment Test',
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { name: 'Subject Selection', path: '/subject-selection', description: 'Professional career guidance' },
        { name: 'Career Selection', path: '/career-selection', description: 'Discover your potential' },
        { name: 'Engineering Branch Selection', path: '/eng-branch-selection', description: 'Professional resume creation' },
        { name: 'Career Cluster Analysis ', path: '/career-cluster-selection', description: 'Ace your interviews' },
        { name: '1-1 Counselling ', path: '/couseling-one', description: 'Ace your interviews' },
        { name: 'Vocation Training', path: '/vocational-training', description: 'Ace your interviews' }
      ]
    },
    services: {
      title: 'Additional Services',
      icon: <Lightbulb className="h-5 w-5" />,
      items: [
        { name: 'AI Career Assistant', path: '/ai-career', description: 'Professional career guidance' },
        { name: 'AI Job Searh', path: '/ai-job', description: 'Discover your potential' },
     
      ]
    },
  
    // learning: {
    //   title: 'Learning',
    //   icon: <BookOpen className="h-5 w-5" />,
    //   items: [
    //     { name: 'Seminars & Workshops', path: '/seminars-workshops', description: 'Interactive learning sessions' },
    //     { name: 'Resources', path: '/resources', description: 'Career development tools' },
    //     { name: 'Success Stories', path: '/success-stories', description: 'Inspiring transformations' }
    //   ]
    // },
    
  };

  const handleMegaMenuEnter = (menuKey) => {
    setActiveMegaMenu(menuKey);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  return (
    <>
  <div className="relative w-full bg-white text-[#2d4d45] shadow-md">
    <div className="flex items-center justify-end  px-6 py-3">
    {/* Left side - icon + message */}
      <div className="flex items-center space-x-4">

       <i className="font-semibold text-lg sm:text-xl md:text-2xl tracking-wide text-[#25483f]">
        Quries: <span className="font-bold text-md">help@catalystcareers.in</span>
        </i>
        <i className="font-semibold text-lg sm:text-xl md:text-2xl tracking-wide text-[#25483f]">
        Direct Appointment: <span className="font-bold text-md">+91 7277277477</span>
        </i>
      
      </div>

    {/* Right side - Call button */}
    </div>

  </div>


    <nav className="border-2 border-t-[#25483f] bg-white relative p-2">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 content-center">
        <div className="flex h-16 items-center justify-around ">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2" onClick={close}>
              <div className="h-8 w-8 grid place-items-center rounded-md bg-amber-500 text-white font-bold">C</div>
              <div className="font-semibold tracking-tight">CATALYST</div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-[#25483f] border rounded-full p-2 px-4 text-white ">
            <NavLink to="/" end onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
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
                <button className={`${baseLink} flex items-center gap-1 text-white`}>
                  {menu.icon}
                  {menu.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {activeMegaMenu === key && (
                  <div className="absolute top-full left-0 w-80 rounded-lg  text-md font-medium hover:text-white bg-[#25483f] hover:font-bold hover:px-2  shadow-xl z-50 mt-1">
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        {menu.icon}
                        <h3 className="font-semibold text-white">{menu.title}</h3>
                      </div>
                      <div className="space-y-2">
                        {menu.items.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            onClick={close}
                            className="block p-3 rounded-lg text-md font-medium hover:text-white hover:bg-[#395f56] hover:font-bold hover:px-2  transition-colors"
                          >
                            <div className="font-medium text-white">{item.name}</div>
                            <div className="text-lg text-gray-200">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
         
            <NavLink to="/upcoming-events" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
               Events
            </NavLink>
            <NavLink to="/success-stories" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
               Success Stories
            </NavLink>
            
            <NavLink to="/blog" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
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
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-lg font-semibold hover:bg-amber-600 transition-colors"
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
                        <div className="text-lg font-medium text-gray-900">
                          {user.name || 'User'}
                        </div>
                        <div className="text-lg text-gray-500">
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
                          className="w-full flex items-center gap-3 px-4 py-2 text-lg text-gray-700 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors"
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
                          className="w-full flex items-center gap-3 px-4 py-2 text-lg text-gray-700 hover:bg-amber-50 focus:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset transition-colors"
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
                          className="w-full flex items-center gap-3 px-4 py-2 text-lg text-red-600 hover:bg-red-50 focus:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
  className="relative inline-flex items-center gap-2 px-4 py-3 rounded-full 
             bg-gradient-to-r to-[#25483f] from-green-900 via-[#25483f]
             text-white text-lg font-semibold 
             shadow-lg hover:shadow-2xl 
             animate-pulse transition-all duration-900"
>
  {/* Rainbow Glow Effect */}
  <span className="absolute -inset-1 rounded-md bg-gradient-to-r from-green-800 via-[#25483f] to-green-800 opacity-75 blur-md animate-pulse py-4"></span>

  {/* Actual button content (above glow) */}
  <span className="relative flex items-center gap-2">
    <Sparkles className="h-6 w-6 animate-bounce" />
    Catalyst AI
  </span>
</button>

            )}
            
            <button onClick={toggle} className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border text-white">
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
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              About Us
            </NavLink>
            
            {/* Mobile Services Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">SERVICES</div>
              <NavLink to="/services" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
                Career Counseling
              </NavLink>
              <NavLink to="/assessment-tests" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
                Assessment Tests
              </NavLink>
            </div>
            
            {/* Mobile Learning Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">LEARNING</div>
              <NavLink to="/seminars-workshops" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
                Seminars & Workshops
              </NavLink>
              <NavLink to="/resources" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
                Resources
              </NavLink>
              
            </div>
            
            {/* Mobile Events Section */}
            <div className="border-l-2 border-amber-200 pl-3 ml-2">
              <div className="text-xs font-medium text-amber-600 mb-2">EVENTS</div>
              <NavLink to="/upcoming-events" onClick={close}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
                Upcoming Events
              </NavLink>
            </div>
     
            
            <NavLink to="/success-stories" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
               Success Stories
            </NavLink>
            <NavLink to="/blog" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onClick={close}
              className={({ isActive }) => `${baseLink} ${isActive ? activeClass : 'text-white'}`}>
              Contact Us
            </NavLink>
            
            {/* Mobile User Section */}
            {user ? (
              <div className="border-t border-gray-200 pt-3 mt-2">
                <div className="text-xs font-medium text-amber-600 mb-2">ACCOUNT</div>
                <div className="px-3 py-2 text-md text-gray-700">
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
                  className="w-full mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-md font-semibold hover:bg-amber-600"
                >
                  <Sparkles className="h-4 w-4" />
                  Career AI Chat
                </button>
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-red-300 text-red-600 text-md font-semibold hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
  className="mt-1 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-md font-semibold hover:bg-amber-600 transition-colors animate-glow"
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
    </>
  );
};

export default Navbar;