import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  Sparkles,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Lightbulb,
  LogOut,
  Settings,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [authOpen, setAuthOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // desktop mega menu
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // desktop user dropdown
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState({}); // collapsible sections for mobile
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const userDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toggle mobile menu
  const toggle = () => {
    setIsOpen((p) => !p);
    // ensure desktop dropdowns are closed
    setUserDropdownOpen(false);
    setActiveMegaMenu(null);
  };
  const closeMobile = () => setIsOpen(false);

  // Close everything helper
  const closeAll = () => {
    setIsOpen(false);
    setActiveMegaMenu(null);
    setUserDropdownOpen(false);
    setMobileMegaOpen({});
  };

  // logout handler
  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to sign out?")) return;
    setIsLoggingOut(true);
    try {
      logout();
      closeAll();
      if (location.pathname === "/chat") navigate("/");
      const message = document.createElement("div");
      message.className =
        "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
      message.textContent = "Successfully signed out!";
      document.body.appendChild(message);
      setTimeout(() => document.body.removeChild(message), 3000);
    } catch (err) {
      console.error(err);
      const message = document.createElement("div");
      message.className =
        "fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
      message.textContent = "Error signing out. Try again.";
      document.body.appendChild(message);
      setTimeout(() => document.body.removeChild(message), 3000);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Accessibility: focus first item when user dropdown opens (desktop)
  useEffect(() => {
    if (userDropdownOpen) {
      const firstMenuItem =
        userDropdownRef.current?.querySelector('[role="menuitem"]');
      firstMenuItem?.focus();
    }
  }, [userDropdownOpen]);

  // Body scroll lock while mobile menu is open + focus first link
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // focus first focusable inside mobile menu
      setTimeout(() => {
        mobileMenuRef.current?.querySelector("a,button")?.focus();
      }, 80);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Desktop dropdown close on outside or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setUserDropdownOpen(false);
        setActiveMegaMenu(null);
        setIsOpen(false);
      }
    };

    if (userDropdownOpen || isOpen || activeMegaMenu) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [userDropdownOpen, isOpen, activeMegaMenu]);

  const baseLink =
    "px-2 py-1 rounded-full text-sm hover:text-white hover:bg-[#395f56] hover:font-bold";
  const activeClass = "text-white bg-[#395f56] font-bold text-md px-1";

  const megaMenuItems = {
    Assessment: {
      title: "Assessment Test",
      icon: <BookOpen className="h-5 w-5" />,
      items: [
        { name: "For School Students", path: "/school-students" },
        { name: "For College Students", path: "/college-students" },
        { name: "For Working Professionals", path: "/working-professional" },
      ],
    },
    services: {
      title: "Additional Services",
      icon: <Lightbulb className="h-5 w-5" />,
      items: [
        { name: "AI Career Assistant", path: "/ai-career" },
        { name: "AI Job Search", path: "/ai-job" },
      ],
    },
  };

  const toggleMobileMega = (key) =>
    setMobileMegaOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <>
      {/* Top Info Bar */}
<div className="relative w-full bg-gray-50 text-[#2d4d45] shadow-lg">
  <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 px-4 py-3 text-center sm:text-left">
    <i className="font-semibold text-sm sm:text-base md:text-lg text-[#20433C]">
      Queries: <span className="font-bold">help@catalystcareers.in</span>
    </i>
    <span className="hidden sm:inline">|</span>
    <i className="font-semibold text-sm sm:text-base md:text-lg text-[#20433C]">
      Direct Appointment: <span className="font-bold">+91 7277277477</span>
    </i>
  </div>
</div>




      {/* Main Navbar */}
      <nav className="border-b-2 sticky top-0 z-50 bg-white">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" onClick={closeAll}>
              <img
                src="/images/CATT.png"
                alt="Catalyst"
                className="h-16 w-auto max-w-[12rem] rounded-full object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-[#20433C] border rounded-full p-2 px-4 text-white">
              <NavLink
                to="/"
                end
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                About Us
              </NavLink>

              {/* Desktop Mega Menu */}
              {Object.entries(megaMenuItems).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMegaMenu(key)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button
                    onClick={() =>
                      setActiveMegaMenu(activeMegaMenu === key ? null : key)
                    }
                    className={`${baseLink} flex items-center gap-1 ${
                      activeMegaMenu === key ? "bg-[#3d5f56] font-bold px-3 py-2 rounded-lg" : ""
                    }`}
                  >
                    {menu.icon}
                    {menu.title}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeMegaMenu === key && (
                    <div className="absolute top-full left-0 w-72 rounded-lg bg-[#20433C] shadow-xl z-50 mt-2">
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3 border-b border-gray-200 pb-2">
                          {menu.icon}
                          <h3 className="font-semibold text-white">{menu.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {menu.items.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.path}
                              onClick={closeAll}
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

              <NavLink
                to="/upcoming-events"
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                Events
              </NavLink>
              <NavLink
                to="/success-stories"
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                Success Stories
              </NavLink>
              <NavLink
                to="/blog"
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeAll}
                className={({ isActive }) => `${baseLink} ${isActive ? activeClass : ""}`}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Right Section (desktop + mobile toggle) */}
            <div className="flex items-center gap-3">
              {/* Desktop User / Login */}
              <div className="hidden lg:flex items-center gap-3">
                {user ? (
                  <div className="relative" ref={userDropdownRef}>
                    <button
                      id="user-menu-button"
                      onClick={() => setUserDropdownOpen((p) => !p)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#20433C] text-white text-md font-semibold hover:bg-[#1b382f]"
                      aria-expanded={userDropdownOpen}
                    >
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                        {user.profile_picture ? (
                          <img
                            src={user.profile_picture}
                            alt={user.name || "User"}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                        ) : (
                          (user.name || user.email || "U").charAt(0).toUpperCase()
                        )}
                      </div>
                      {user.name || user.email?.split("@")[0] || "User"}
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
                            <div className="text-md font-semibold text-gray-900">{user.name || "User"}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                          <div className="py-1">
                            <button
                              onClick={() => {
                                setUserDropdownOpen(false);
                                closeAll();
                                navigate("/chat");
                              }}
                              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#20433C] hover:bg-[#20433C]/10"
                              role="menuitem"
                            >
                              <Sparkles className="h-4 w-4" />
                              Career AI Chat
                            </button>
                            <button
                              onClick={() => {
                                setUserDropdownOpen(false);
                                closeAll();
                                navigate("/profile");
                              }}
                              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#20433C] hover:bg-[#20433C]/10"
                              role="menuitem"
                            >
                              <Settings className="h-4 w-4" />
                              Profile Settings
                            </button>
                            <div className="border-t border-gray-100 my-1"></div>
                            <button
                              onClick={handleLogout}
                              disabled={isLoggingOut}
                              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
                              role="menuitem"
                            >
                              <LogOut className="h-4 w-4" />
                              {isLoggingOut ? "Signing out..." : "Sign Out"}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setAuthOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20433C] text-white text-md font-semibold shadow-md hover:shadow-xl animate-pulse"
                  >
                    <Sparkles className="h-5 w-5 animate-bounce" />
                    Catalyst AI
                  </button>
                )}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={toggle}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border text-[#20433C]"
                aria-label="Open menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* === Mobile Fullscreen Menu === */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          aria-hidden={!isOpen}
        >
          <div
            ref={mobileMenuRef}
            className="h-full w-full bg-white overflow-auto p-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Mobile header with logo + close */}
            <div className="flex items-center justify-between mb-4">
              <Link to="/" onClick={closeAll} className="flex items-center gap-2">
                <img src="/images/CATT.png" alt="Catalyst" className="h-12 w-auto rounded-full" />
              </Link>
              <div className="flex items-center gap-3">
                {user ? (
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#20433C] text-white flex items-center justify-center text-sm font-bold">
                      {user.profile_picture ? (
                        <img src={user.profile_picture} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
                      ) : ((user.name || user.email || "U").charAt(0).toUpperCase())}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold">{user.name || user.email?.split('@')[0]}</div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                ) : null}
                <button onClick={toggle} aria-label="Close menu" className="p-2 rounded-md border">
                  <X className="h-6 w-6 text-[#20433C]" />
                </button>
              </div>
            </div>

            {/* Mobile Links */}
            <div className="space-y-4">
              <NavLink
                to="/"
                end
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                About Us
              </NavLink>

              {/* Mobile collapsible mega menus */}
              {Object.entries(megaMenuItems).map(([key, menu]) => (
                <div key={key} className="border-t pt-3">
                  <button
                    onClick={() => toggleMobileMega(key)}
                    className="w-full flex items-center justify-between p-3 rounded-md text-left text-lg font-semibold text-gray-800 hover:bg-gray-50"
                    aria-expanded={!!mobileMegaOpen[key]}
                  >
                    <div className="flex items-center gap-2">
                      {menu.icon}
                      {menu.title}
                    </div>
                    <ChevronDown className={`h-5 w-5 transform ${mobileMegaOpen[key] ? "rotate-180" : "rotate-0"}`} />
                  </button>

                  {mobileMegaOpen[key] && (
                    <div className="mt-2 space-y-1 pl-6">
                      {menu.items.map((it, idx) => (
                        <NavLink
                          key={idx}
                          to={it.path}
                          onClick={closeAll}
                          className="block p-2 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                          {it.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <NavLink
                to="/upcoming-events"
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                Events
              </NavLink>

              <NavLink
                to="/success-stories"
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                Success Stories
              </NavLink>

              <NavLink
                to="/blog"
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeAll}
                className={({ isActive }) => `block text-lg font-semibold p-3 rounded-md ${isActive ? "bg-[#20433C] text-white" : "text-gray-800 hover:bg-gray-50"}`}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile user actions */}
            <div className="mt-6 border-t pt-4">
              {user ? (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      closeAll();
                      navigate("/chat");
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#20433C] text-white font-semibold"
                  >
                    <Sparkles className="h-5 w-5" />
                    Career AI Chat
                  </button>

                  <button
                    onClick={() => {
                      closeAll();
                      navigate("/profile");
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-gray-200 text-gray-800"
                  >
                    <Settings className="h-5 w-5" />
                    Profile Settings
                  </button>

                  <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-red-600 border border-red-100 hover:bg-red-50 disabled:opacity-50"
                  >
                    <LogOut className="h-5 w-5" />
                    {isLoggingOut ? "Signing out..." : "Sign Out"}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setAuthOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#20433C] text-white font-semibold"
                  >
                    <Sparkles className="h-5 w-5" />
                    Sign In / Sign Up
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    New here? Create an account to get personalized guidance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <AuthModal
          isOpen={authOpen}
          onClose={() => {
            setAuthOpen(false);
            if (user) navigate("/chat");
          }}
        />
      </nav>
    </>
  );
};

export default Navbar;
