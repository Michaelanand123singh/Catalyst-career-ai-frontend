import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
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
      "For many professionals, entering the corporate world is just the beginning — but ensuring consistent growth and satisfaction in one’s career is the real challenge.",
      "Unfortunately, a large number of professionals make these decisions reactively — influenced by peer comparisons, short-term gains, or workplace pressure — which can lead to stagnation, lack of motivation, or even burnout.",
      "To address this, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a scientific, research-backed roadmap for career progression in the corporate world.",
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
      "For many working professionals, career choices made years ago may no longer feel relevant or fulfilling today.",
      "Unfortunately, such decisions are often made in haste, driven by salary comparisons, peer influence, or temporary dissatisfaction — leading to repeated switches and long-term frustration.",
      "The Catalyst Scientific Psychometric Career Assessment (SPCAT) is designed to provide professionals with a research-backed, personalised career roadmap.",
      "With this clarity, professionals can confidently plan a career shift that is aligned with their strengths and long-term goals — ensuring that the next move is not just another change, but the right step forward."
    ]
  }
};

const assessmentPaths = ["/coorparateprogress", "/changejob"];

const WorkingLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const data = assessments[path];
  if (!data) return null;

  const IconComponent = data.icon;
  const currentIndex = assessmentPaths.indexOf(path);
  const prevPath = currentIndex > 0 ? assessmentPaths[currentIndex - 1] : null;
  const nextPath = currentIndex < assessmentPaths.length - 1 ? assessmentPaths[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={bigb} alt="AI Services Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-teal-800/60 to-green-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              {data.heroTitle1}
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                {data.heroTitle2}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-medium mb-8 sm:mb-12 leading-relaxed">
              {data.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-lg inline-flex items-center gap-2">
                <MessageCircle size={18} />
                {data.heroCTA1}
              </button>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-lg inline-flex items-center gap-2">
                <Search size={18} />
                {data.heroCTA2}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back & Next Buttons */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {prevPath ? (
          <button
            onClick={() => navigate(prevPath)}
            className="flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        ) : <div />}

        {nextPath ? (
          <button
            onClick={() => navigate(nextPath)}
            className="flex items-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl text-sm sm:text-base"
          >
            Next
            <ArrowRight size={18} />
          </button>
        ) : <div />}
      </div>

      {/* Service Section */}
      <div className="relative pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left side - Service card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="max-w-sm w-full">
                {/* Category */}
                <div className="mb-4 sm:mb-6">
                  <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-lg w-full text-center">
                    <IconComponent size={16} />
                    {data.category}
                  </span>
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-[#20433C] to-[#3A6B5E] text-white rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center mb-4 sm:mb-6">
                    <IconComponent size={36} className="mx-auto mb-4 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-tight text-center">
                    {data.title}
                  </h3>
                  <p className="text-emerald-100 text-xs sm:text-sm mb-6 sm:mb-8 text-center leading-relaxed">
                    {data.subtitle}
                  </p>
                </div>

                <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] text-white font-semibold py-2 px-4 sm:py-4 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-lg flex items-center justify-center gap-2">
                  <IconComponent size={18} />
                  {data.buttonText}
                </button>
              </div>
            </div>

            {/* Right side - Content */}
         <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100">
             <div className="space-y-4 sm:space-y-8">
  {data.description.map((para, i) => (
    <p
      key={i}
      className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-medium text-justify"
    >
      {para}
    </p>
  ))}
</div>


              <div className="text-center mt-8 sm:mt-10">
                <button className="bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-3 sm:py-4 px-6 sm:px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg inline-flex items-center gap-2">
                  <IconComponent size={20} /> {data.buttonText}
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              Take Charge of Your Career <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                With Science, Not Guesswork.
              </span>
            </h2>

            <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-medium max-w-3xl sm:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Whether you’re exploring subjects, planning a career shift, or growing in the corporate world — Catalyst’s AI-driven assessments give you clarity, confidence, and a clear roadmap.
            </p>

            {/* AI Assistant CTA */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100 max-w-3xl sm:max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Start Your Career Clarity Journey
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-600">
                    Get personalized insights and actionable guidance for your next step
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl text-sm sm:text-lg inline-flex items-center gap-2">
                    <MessageCircle size={18} />
                    Talk to AI Coach
                  </button>
                  <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-4 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl text-sm sm:text-lg inline-flex items-center gap-2">
                    <Search size={18} />
                    Explore Career Options
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <MessageCircle className="text-white" size={20} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Guidance That Adapts to You</h4>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                From school to corporate — get insights designed for your stage, your goals, and your challenges.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Search className="text-white" size={20} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Science-Backed Assessments</h4>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Get results powered by psychometrics and AI — not guesswork — so your decisions are clear and confident.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Star className="text-white" size={20} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Actionable Career Roadmaps</h4>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Go beyond recommendations with clear strategies and next steps to achieve your academic and career goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingLayout;
