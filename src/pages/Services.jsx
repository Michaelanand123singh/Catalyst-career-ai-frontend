import React from 'react';
import { useLocation } from "react-router-dom";
import { Star } from 'lucide-react';

const assessments = {
  "/ai-career": {
    tag: "AI Career Assistant",
    title: "Looking for Personal Career Assistant?",
    subtitle: "ask anything & anytime to scale-up your career",
    buttonText: "Chat Now",
    
    description:
      `Al Career Assistant - Your 24x7 Career Guide<br/>
“One Assistant. Every Career Answer. Anytime.”<br/> From a student confused about subjects, to a parent worried about a child’s future, to a professional stuck in the wrong job — our Al Career
Assistant is here to guide you with clarity, confidence, and science-backed solutions.<br/>
Backed by Catalyst’s vision: “No child or professional should suffer due to lack of guidance.”`
    
    
  },
  "/ai-job": {
    tag: "Career Selection",
    title: "So many hiring websites, so many confusing job descriptions?",
    subtitle: "find the best opportunitiesin market currently available as per your resume",
    buttonText: "Search Now  ",
    description:
      `Al Career Assistant - Your 24x7 Career Guide<br/>
“One Assistant. Every Career Answer. Anytime.”<br/> From a student confused about subjects, to a parent worried about a child’s future, to a professional stuck in the wrong job — our Al Career
Assistant is here to guide you with clarity, confidence, and science-backed solutions.<br/>
Backed by Catalyst’s vision: “No child or professional should suffer due to lack of guidance.”`
    
    
  },
};


const Services = () => {
  const location = useLocation(); // get current path
  const path = location.pathname;
  const data = assessments[path];
  if (!data) return null;

  return (
    <div className="">

          {/* First Section - Hero */}
          <div className="min-h-[90vh] relative overflow-hidden font-sans content-center ">
            {/* Sky + clouds */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-100 to-green-200 ">
              {/* Clouds with floating animation */}
              <div className="absolute top-10 left-20 w-24 h-16 bg-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-16 left-16 w-16 h-12 bg-white rounded-full opacity-60 animate-pulse delay-200"></div>
              <div className="absolute top-32 left-80 w-20 h-14 bg-white rounded-full opacity-70 animate-pulse delay-500"></div>
              <div className="absolute top-28 left-76 w-14 h-10 bg-white rounded-full opacity-50 animate-pulse delay-700"></div>
              <div className="absolute top-24 right-80 w-28 h-18 bg-white rounded-full opacity-75 animate-pulse delay-300"></div>
              <div className="absolute top-20 right-76 w-18 h-14 bg-white rounded-full opacity-55 animate-pulse delay-600"></div>
              <div className="absolute top-40 right-40 w-32 h-20 bg-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-36 right-36 w-20 h-16 bg-white rounded-full opacity-60 animate-pulse delay-400"></div>
              <div className="absolute top-28 right-20 w-24 h-16 bg-white rounded-full opacity-70 animate-pulse delay-800"></div>
              <div className="absolute top-24 right-16 w-16 h-12 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>

            {/* Rolling hills */}
            <div className="absolute bottom-0 w-full">
              <svg
                className="absolute bottom-0 w-full h-48 animate-bounce-slow"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C200,60 400,140 600,80 C800,20 1000,120 1200,60 L1200,200 L0,200 Z"
                  fill="#8fbc8f"
                  opacity="0.6"
                />
              </svg>
              <svg
                className="absolute bottom-0 w-full h-40"
                viewBox="0 0 1200 160"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,80 C300,20 600,100 900,40 C1050,60 1150,20 1200,40 L1200,160 L0,160 Z"
                  fill="#6b8e23"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10   px-6 py-16">
              <div className="max-w-8xl flex justify-between items-center ">
                {/* Left side - Assessment card */}
                <div className="flex justify-center">
                  
                  <div className="bg-gradient-to-br from-amber-400 via-red-500 to-pink-500 rounded-3xl p-5 text-white text-center shadow-2xl max-w-sm w-full transform hover:scale-105 hover:rotate-1 transition-transform duration-500 h-auto ">
                    <div className="mb-2">
                      <div className="text-sm font-medium bg-green-500/90 rounded-full px-5 py-2 inline-block mb-2 shadow-md">
                        {data.tag}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 drop-shadow-md">
                      {data.title}
                    </h2>
                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                      {data.subtitle}
                    </p>
                    <button className="bg-white text-green-700 hover:bg-blue-100 font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                      {data.buttonText}
                    </button>
                  </div>
                  
                </div>

                {/* Right side - Content */}
                <div className=" rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-5xl p-12 ">
                  <div className="mb-8">
                    <div className="mb-8">
                    <p  className="text-black text-xl leading-relaxed mb-6">
                      {data.description}
                    </p>
                  
                  </div>
                   
                  </div>
                    
                    
                  <div className="text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <style>
            {`
    @keyframes bounce-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(8px); }
       }
    .animate-bounce-slow {
    animation: bounce-slow 6s infinite ease-in-out;
      }
    `}
          </style>


        <div className="relative z-10 py-20 px-4 bg-white/60 backdrop-blur-sm">
         <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Message */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-8 leading-tight">
              Don't Let Confusion <br />
              <span className="bg-gradient-to-br from-[#6b8e23] to-[#a5d2af] bg-clip-text text-transparent">
                Decide Your Future.
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you are a student, parent, or professional — get instant clarity with Catalyst's AI Career Assistant.
            </p>
            
            {/* AI Assistant CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <span className="text-xl md:text-2xl text-gray-600 font-medium">
                Try the AI Career Assistant Now →
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg">
                Chat Now
              </button>
            </div>
          </div>
         
       
  </div>
  </div>
  


      {/* ✅ Testimonials always visible */}
     
    </div>
    
  );
};

export default Services;
