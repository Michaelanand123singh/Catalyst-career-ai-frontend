import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './whatsappchat'
import { 
  Phone, 
  Mail, 
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navbar Main Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Assessment Tests", path: "/assessment-tests" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Resources", path: "/resources" },
    { name: "Upcoming Events", path: "/upcoming-events" },
    { name: "Contact Us", path: "/contact" }
  ];

  // Services dropdown from navbar
  const services = [
    { name: "Subject Selection", path: "/services/subject-selection" },
    { name: "Career Selection", path: "/services/career-selection" },
    { name: "Engineering Branch Selection", path: "/services/engineering-branch" },
    { name: "Career Cluster Analysis", path: "/services/career-cluster" },
    { name: "1-1 Counselling", path: "/services/counselling" },
    { name: "Vocational Training", path: "/services/vocational-training" },
    { name: "AI Career Assistant", path: "/services/ai-career" },
    { name: "AI Job Search", path: "/services/ai-job" }
  ];

  // Resources dropdown from navbar
  const resources = [
    { name: "Blog & Articles", path: "/blog" },
    { name: "Study Materials", path: "/resources/study-materials" },
    { name: "Success Stories", path: "/success-stories" }
  ];

  const socialLinks = [
    { 
      name: "YouTube", 
      icon: <Youtube className="h-5 w-5" />, 
      url: " https://youtube.com/@catalystcareersindia?si=_4MD50aYLIpQ3U9n",
      color: "hover:text-red-600"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://www.instagram.com/catalyst_yugsingh?igsh=MXkyb202a2Y1cDdrYg==",
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      icon: <Facebook className="h-5 w-5" />, 
      url: "https://www.facebook.com/share/17GGn6aBmt/?mibextid=wwXIfr",
      color: "hover:text-blue-600"
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="h-5 w-5" />, 
      url: "https://x.com/catalyst_career",
      color: "hover:text-blue-700"
    },
    
  ];

  return (
    <>

    <section className="py-20 bg-gray-50"> <div className="relative"> {/* Elfsight Google Reviews */} <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-2"> <script src="https://elfsightcdn.com/platform.js" async></script> <div className="elfsight-app-64502bac-6a51-4521-bf12-58dcc8f39827" data-elfsight-app-lazy ></div> </div> {/* White overlapping bar */} <div className="absolute bottom-1 left-0 w-screen h-10 bg-gray-50 z-20"></div> </div> </section>
    <footer className="bg-[#20433C] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src="/images/Artboard3.png" alt="" className='w-40 h-30 object-contain mb-3'/>
              <p className="text-gray-300 text-sm">
                Empowering students with practical learning while uniting students, parents, teachers, and schools.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-3 text-white" />
                <a href="tel:+917277277477" className="hover:text-green-300 transition-colors">
                  +91 7277277477
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-3 text-white" />
                <a href="mailto:yug@careerwithcatalyst.com" className="hover:text-green-300 transition-colors">
                  yug@careerwithcatalyst.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MessageCircle className="h-4 w-4 mr-3 text-white" />
                {/* <a href="https://wa.me/917277277477" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                  WhatsApp Quick Chat
                </a> */}
                <WhatsAppButton/>
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
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm flex items-center"
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
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm flex items-center"
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
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm flex items-center"
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © {currentYear} CATALYST. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-green-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-green-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-green-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
