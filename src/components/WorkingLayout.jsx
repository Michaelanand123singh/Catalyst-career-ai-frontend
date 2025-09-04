import React from 'react';
import { useLocation ,useNavigate } from "react-router-dom";
import { Star, MessageCircle, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import bigb from "../assets/images/bigb.png"

const assessments = {
  "/coorparateprogress": {
    category: "Career Progression in Corporate",
    title: "Just joined a Job in the previous 12 months",
    subtitle: "for working professionals",
    buttonText: "Chat Now",
    icon: MessageCircle,
    heroTitle1: "Your Corporate Journey",
    heroTitle2: "Doesn’t Have to Be a Guesswork.",
    heroSubtitle:
      "Take control of your career growth with AI-powered insights and proven strategies designed for working professionals.",
    heroCTA1: "Chat with AI Career Coach",
    heroCTA2: "Discover Growth Paths",
    description: [
      "For many professionals, entering the corporate world is just the beginning — but ensuring consistent growth and satisfaction in one’s career is the real challenge. As career paths evolve, employees often face questions such as: Am I in the right role? Should I upskill or reskill? Is it time to explore a new industry or leadership track?",
      "Unfortunately, a large number of professionals make these decisions reactively — influenced by peer comparisons, short-term gains, or workplace pressure — which can lead to stagnation, lack of motivation, or even burnout.",
      "To address this, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a scientific, research-backed roadmap for career progression in the corporate world. By evaluating a professional’s aptitude, personality, skills, and career interests, SPCAT highlights the most suitable career moves, skill development areas, and growth opportunities.",
      "With these insights, working professionals can make confident, future-focused decisions, ensuring their career progression is not left to chance but driven by clarity, purpose, and long-term stability."
    ]
  },

  "/changejob": {
    category: "Change Job Profile",
    title: "Which type of Job is best for me?",
    subtitle: "for best fitment job role in the specific industry",
    buttonText: "Search Now",
    icon: Search,
    heroTitle1: "Not Satisfied With Your Job?",
    heroTitle2: "Find the Role That Truly Fits You.",
    heroSubtitle:
      "Discover your best-fit career role with SPCAT’s scientific assessments and make confident, future-ready transitions.",
    heroCTA1: "Find My Best Job Role",
    heroCTA2: "Plan My Career Shift",
    description: [
      "For many working professionals, career choices made years ago may no longer feel relevant or fulfilling today. Just like students at a turning point, professionals too often find themselves questioning their current role: “Am I in the right field? Should I explore new opportunities? Will a career shift give me both growth and stability?”",
      "Unfortunately, such decisions are often made in haste, driven by salary comparisons, peer influence, or temporary dissatisfaction — leading to repeated switches and long-term frustration.",
      "The Catalyst Scientific Psychometric Career Assessment (SPCAT) is designed to provide professionals with a research-backed, personalised career roadmap. By evaluating your aptitude, personality, interests, and skills, SPCAT helps you identify the job profiles and career domains where you are most likely to succeed and stay motivated.",
      "With this clarity, professionals can confidently plan a career shift that is aligned with their strengths and long-term goals — ensuring that the next move is not just another change, but the right step forward."
    ]
  }
};


const assessmentPaths = [
  "/coorparateprogress",
  "/changejob",
];

const WorkingLayout = () => {
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
              {data.heroTitle1}
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
              {data.heroTitle2}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
              {data.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <MessageCircle size={20} />
                {data.heroCTA1}
              </button>
              
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <Search size={20} />
                {data.heroCTA2}
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
      {/* Back & Next Buttons */}
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
                         {data.category}
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
      Take Charge of Your Career <br />
      <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
        With Science, Not Guesswork.
      </span>
    </h2>

    <p className="text-2xl md:text-3xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed mb-12">
      Whether you’re exploring subjects, planning a career shift, or growing in the corporate world — 
      Catalyst’s AI-driven assessments give you clarity, confidence, and a clear roadmap.
    </p>

    {/* AI Assistant CTA */}
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-100 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Start Your Career Clarity Journey
          </h3>
          <p className="text-lg text-gray-600">
            Get personalized insights and actionable guidance for your next step
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
            <MessageCircle size={20} />
            Talk to AI Coach
          </button>

          <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
            <Search size={20} />
            Explore Career Options
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
      <h4 className="text-xl font-bold text-gray-900 mb-3">Guidance That Adapts to You</h4>
      <p className="text-gray-600 text-center">
        From school to corporate — get insights designed for your stage, your goals, and your challenges.
      </p>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Search className="text-white" size={24} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">Science-Backed Assessments</h4>
      <p className="text-gray-600 text-center">
        Get results powered by psychometrics and AI — not guesswork — so your decisions are clear and confident.
      </p>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
        <Star className="text-white" size={24} />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">Actionable Career Roadmaps</h4>
      <p className="text-gray-600 text-center">
        Go beyond recommendations with clear strategies and next steps to achieve your academic and career goals.
      </p>
    </div>
  </div>
</div>



      </div>
  
  );
};

export default WorkingLayout;
