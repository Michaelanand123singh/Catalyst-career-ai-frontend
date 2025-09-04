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
  ArrowRight,
  Star
} from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student, Class 12",
    content: "Catalyst helped me discover my passion for psychology. The assessment was incredibly accurate!",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Rajesh Kumar",
    role: "Parent",
    content: "As a parent, I was worried about my son's career choice. Catalyst provided clear guidance and peace of mind.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Anjali Patel",
    role: "College Student",
    content: "The personalized career roadmap helped me choose the right subjects and now I'm confident about my future.",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];
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

  // Services - updated as per screenshot
const services = [
  { name: "Subject Selection", path: "/services" },
  { name: "Career Selection", path: "/services" },
  { name: "Engineering Branch Selection", path: "/services" },
  { name: "Career Cluster Analysis", path: "/services" },
  { name: "1-1 Counselling", path: "/contact" },
  { name: "Vocational Training", path: "/services" },
  { name: "AI Career Assistant", path: "/services" },
  { name: "AI Job Search", path: "/services" }
];

// Resources - removed Career Guides & FAQs
const resources = [
  { name: "Blog & Articles", path: "/blog" },
  { name: "Study Materials", path: "/resources" },
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
    <>
     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from students and parents who transformed their careers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-300 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
                <a href="https://wa.me/917277277477" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
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
    
    </>
  );
};

export default Footer;


