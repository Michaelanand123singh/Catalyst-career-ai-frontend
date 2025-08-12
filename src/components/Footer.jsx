import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Assessment Tests", path: "/assessment-tests" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Resources", path: "/resources" },
    { name: "Upcoming Events", path: "/upcoming-events" },
    { name: "Contact Us", path: "/contact" }
  ];

  const services = [
    { name: "SPCAT Assessment", path: "/assessment-tests" },
    { name: "Academic Building Program", path: "/services" },
    { name: "Career Building Program", path: "/services" },
    { name: "School & College Programs", path: "/services" },
    { name: "1-on-1 Counseling", path: "/contact" }
  ];

  const resources = [
    { name: "Blog & Articles", path: "/blog" },
    { name: "Career Guides", path: "/resources" },
    { name: "Study Materials", path: "/resources" },
    { name: "FAQs", path: "/resources" },
    { name: "Success Stories", path: "/success-stories" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://instagram.com/careerwithcatalyst",
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="h-5 w-5" />, 
      url: "https://facebook.com/careerwithcatalyst",
      color: "hover:text-blue-600"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com/company/careerwithcatalyst",
      color: "hover:text-blue-700"
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="h-5 w-5" />, 
      url: "https://youtube.com/@careerwithcatalyst",
      color: "hover:text-red-600"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">CATALYST</h3>
              <p className="text-gray-300 text-sm">
                Empowering students with practical learning while uniting students, parents, teachers, and schools.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-3 text-amber-500" />
                <a href="tel:+917277277477" className="hover:text-amber-400 transition-colors">
                  +91 7277277477
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-3 text-amber-500" />
                <a href="mailto:yug@careerwithcatalyst.com" className="hover:text-amber-400 transition-colors">
                  yug@careerwithcatalyst.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-amber-500" />
                <span>Gandhidham, Kutch, Gujarat</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MessageCircle className="h-4 w-4 mr-3 text-amber-500" />
                <a href="https://wa.me/917277277477" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-colors ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest career guidance tips, upcoming events, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} CATALYST. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-3 px-4 z-50 transform translate-y-full hover:translate-y-0 transition-transform duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Take Career Fit Test</span>
            <span className="text-amber-200">|</span>
            <span className="font-semibold">Talk to a Counsellor</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/assessment-tests"
              className="px-4 py-2 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
            >
              Start Test
            </Link>
            <a
              href="tel:+917277277477"
              className="px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


