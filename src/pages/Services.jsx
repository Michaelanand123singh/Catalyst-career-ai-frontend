import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Star, MessageCircle, Search,ArrowLeft,ArrowRight } from 'lucide-react';
import bigb from "../images/bigb.png"

const assessments = {
  "/ai-career": {
    tag: "AI Career Assistant",
    title: "Looking for Personal Career Assistant?",
    subtitle: "ask anything & anytime to scale-up your career",
    buttonText: "Chat Now",
    icon: MessageCircle,
    description: [
      "Career confusion doesn’t come with fixed hours — it can strike a student unsure about subjects, a parent worried about future stability, or a professional questioning their career choices. ",
      `To solve this, Catalyst introduces the Personal 24x7 AI Career Assistant — your always-available career mentor. Powered by advanced psychometric science, real-world career data, and years of educational expertise, the AI Assistant gives instant, personalised answers to everyday career dilemmas.`,
      "Whether it’s a Class 9 student asking “Which stream should I take?”, a parent wondering “Will this course secure my child’s future?”, or a working professional asking “Should I switch careers or upskill?” — the AI Career Assistant provides clear, research-backed guidance at the very moment it is needed.",
      "By turning confusion into clarity and aligning decisions with a person’s aptitude, personality, and interests, Catalyst’s AI Career Assistant ensures that students, parents, and professionals can take confident steps toward a future that is stable, fulfilling, and future-ready — all at the convenience of a single click."

    ]
  },
  "/ai-job": {
    tag: "Job Search Assistant",
    title: "So many hiring websites, so many confusing job descriptions?",
    subtitle: "find the best opportunities in market currently available as per your resume",
    buttonText: "Search Now",
    icon: Search,
    description: [
      "For graduates and working professionals, finding the right job is one of the most crucial turning points in their career journey. Often, applications are sent blindly to dozens of companies without knowing whether the role truly matches one’s skills and strengths. This leads to repeated rejections, mismatched roles, and long-term frustration at work",
      `To address this, Catalyst’s AI Job Search Assistant uses advanced algorithms to analyse your resume, skills, and experience and instantly match them with company job descriptions that best fit your profile. Instead of guesswork, you receive science-driven, personalised job recommendations that align with your career aspirations and growth potential.`,
      "By bridging the gap between what you offer and what companies seek, Catalyst’s AI Job Search ensures that every application you make is purposeful, targeted, and future-ready — helping you land the job where you can truly thrive."
    ]
  },
};
const assessmentPaths = [
  "/ai-career",
  "/ai-job",
];

const Services = () => {
  const location = useLocation(); // get current path
  const path = location.pathname;
    const navigate = useNavigate();   // ✅ inside component

  const data = assessments[path];
  if (!data) return null;

  const IconComponent = data.icon;
   const currentIndex = assessmentPaths.indexOf(path);
  const prevPath = currentIndex > 0 ? assessmentPaths[currentIndex - 1] : null;
  const nextPath = currentIndex < assessmentPaths.length - 1 ? assessmentPaths[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Common Hero Section */}
      <div className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={bigb} alt="AI Services Background" className='h-full w-full object-cover' />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-teal-800/60 to-green-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Career Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
              Experience the future of career guidance with our intelligent AI assistants. 
              Get personalized recommendations, find perfect job matches, and accelerate your professional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <MessageCircle size={20} />
                Try AI Career Assistant
              </button>
              
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <Search size={20} />
                Explore Job Search
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

     <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-6">
              {prevPath ? (
                <button
                  onClick={() => navigate(prevPath)}
                  className="flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
              ) : <div></div>}
      
              {nextPath ? (
                <button
                  onClick={() => navigate(nextPath)}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Next
                  <ArrowRight size={20} />
                </button>
              ) : <div></div>}
            </div>

      {/* Service-Specific Section */}
       <div className=" relative pb-20">
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
            
            {/* Left side - Service card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="max-w-sm w-full">
                {/* category category */}
                <div className="mb-6">
                  <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg w-full">
                    <IconComponent size={18} />
                    {data.tag}
                  </span>
                </div>
                
                {/* Card */}
                <div className="bg-gradient-to-br from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center mb-6">
                    <IconComponent size={48} className="mx-auto mb-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 leading-tight text-center">
                    {data.title}
                  </h3>
                  <p className="text-emerald-100 text-sm mb-8 text-center leading-relaxed">
                    {data.subtitle}
                  </p>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                  <IconComponent size={20} />
                  {data.buttonText}
                </button>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl border border-gray-100">
                <div className="space-y-8">
                  {data.description.map((para, i) => (
                    <p key={i} className="text-gray-800 text-lg leading-relaxed font-medium">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="text-center mt-10">
                  <button className="bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg inline-flex items-center gap-2">
                    <IconComponent size={20} />
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-24 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        {/* Background Pattern */}
       <div
  className="absolute inset-0"
  style={{
    backgroundImage: "radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)",
    backgroundSize: "40px 40px",
  }}
></div>

        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Don't Let Confusion <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                Decide Your Future.
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you are a student, parent, or professional — get instant clarity with Catalyst's AI Career Assistant.
            </p>

            {/* AI Assistant CTA */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-100 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Try the AI Career Assistant Now
                  </h3>
                  <p className="text-lg text-gray-600">
                    Get personalized guidance tailored to your unique career journey
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                    <MessageCircle size={20} />
                    Chat Now
                  </button>
                  
                  <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                    <Search size={20} />
                    Explore Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 AI Guidance</h4>
              <p className="text-gray-600 text-center">
                Get instant answers to your career questions anytime, anywhere with our intelligent assistant
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Smart Job Matching</h4>
              <p className="text-gray-600 text-center">
                Find opportunities that perfectly align with your skills, experience, and career goals
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Strategy</h4>
              <p className="text-gray-600 text-center">
                Receive customized career roadmaps based on your unique strengths and aspirations
              </p>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Services;
