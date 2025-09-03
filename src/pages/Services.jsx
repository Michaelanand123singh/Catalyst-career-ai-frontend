import React from 'react';
import { useLocation } from "react-router-dom";
import { Star } from 'lucide-react';
import bigb from "../images/bigb.png"

const assessments = {
  "/ai-career": {
    tag: "AI Career Assistant",
    title: "Looking for Personal Career Assistant?",
    subtitle: "ask anything & anytime to scale-up your career",
    buttonText: "Chat Now",

    description: [
      "Career confusion doesn’t come with fixed hours — it can strike a student unsure about subjects, a parent worried about future stability, or a professional questioning their career choices. ",
      `To solve this, Catalyst introduces the Personal 24x7 AI Career Assistant — your always-available career mentor. Powered by advanced psychometric science, real-world career data, and years of educational expertise, the AI Assistant gives instant, personalised answers to everyday career dilemmas.`,
      "Whether it’s a Class 9 student asking “Which stream should I take?”, a parent wondering “Will this course secure my child’s future?”, or a working professional asking “Should I switch careers or upskill?” — the AI Career Assistant provides clear, research-backed guidance at the very moment it is needed.",
      "By turning confusion into clarity and aligning decisions with a person’s aptitude, personality, and interests, Catalyst’s AI Career Assistant ensures that students, parents, and professionals can take confident steps toward a future that is stable, fulfilling, and future-ready — all at the convenience of a single click."

    ]
  },
  "/ai-job": {
    tag: "Career Selection",
    title: "So many hiring websites, so many confusing job descriptions?",
    subtitle: "find the best opportunitiesin market currently available as per your resume",
    buttonText: "Search Now  ",
    description: [
      "For graduates and working professionals, finding the right job is one of the most crucial turning points in their career journey. Often, applications are sent blindly to dozens of companies without knowing whether the role truly matches one’s skills and strengths. This leads to repeated rejections, mismatched roles, and long-term frustration at work",
      `To address this, Catalyst’s AI Job Search Assistant uses advanced algorithms to analyse your resume, skills, and experience and instantly match them with company job descriptions that best fit your profile. Instead of guesswork, you receive science-driven, personalised job recommendations that align with your career aspirations and growth potential.`,
      "By bridging the gap between what you offer and what companies seek, Catalyst’s AI Job Search ensures that every application you make is purposeful, targeted, and future-ready — helping you land the job where you can truly thrive."
    ]

  },
};


const Services = () => {
  const location = useLocation(); // get current path
  const path = location.pathname;
  const data = assessments[path];
  if (!data) return null;

  return (
    <div className="min-h-screen">

      <div className="min-h-screen relative overflow-hidden font-sans">
        {/* Sky + clouds */}




        {/* Content */}
        <div className="relative z-10  top-0 bottom-0    h-full justify-center content-center">
          <img src={bigb} alt="" srcset="" className='h-full w-full mb-6 ' />
          <div className=" flex justify-between  px-6">
            {/* Left side - Assessment card */}
            <div className="flex justify-center w-1/4 h-full">


              <div key={data.id} className="flex flex-col items-center max-w-[250px] hover:rotate-1 transition-transform duration-500 ">
                {/* Category Tag */}
                <div className="mb-4 content-center w-full text-center">
                  <span className="inline-block bg-[#20433C] text-amber-300 px-4 py-2 rounded-full text-sm font-medium w-full">
                    {data.tag}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-[#20433C] text-white rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] text-center ">

                  <h3 className="text-xl font-bold mb-4 leading-tight">
                    {data.title}
                  </h3>
                  <p className="text-amber-300  text-sm mb-6 text-center ">
                    {data.subtitle}
                  </p>


                </div>
                <button className="bg-[#20433C] hover:bg-[#346256] text-amber-300  font-semibold p-3 rounded-full transition-colors duration-200 mt-5 w-full">
                  {data.buttonText}
                </button>
              </div>

            </div>

            {/* Right side - Content */}
            <div className=" p-6 pr-6  hover:shadow-3xl transition-shadow duration-500 w-3/4 ">
              <div className="mb-8">
                <div className="mb-8">

                  {data.description.map((para, i) => (
                    <p key={i} className="text-black text-lg leading-relaxed mb-2 font-semibold">
                      {para}
                    </p>
                  ))}

                </div>
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-[#20433C] to-[#284a43] hover:from-[#20433C] hover:to-[#24453e] text-amber-300  font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  Sart Your Assessement
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


      <div className="relative z-10 py-10 px-4 bg-white/60 backdrop-blur-sm  items-center justify-center content-center flex mt-12">
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
              <button className="bg-[#20433c] hover:bg-[#264a43] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg">
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
