import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Sparkles } from "lucide-react";

const cards = [
  {
    id: 1,
    category: "Career Progression in Corporate",
    title: "Just joined a Job in the previous 12 months",
    description: "For working professionals beginning their journey",
    buttonText: "Chat Now",
    path: "/coorparateprogress",
    icon: <TrendingUp size={20} />,
    accent: "from-emerald-800 to-[#23453e]",
  },
  {
    id: 2,
    category: "Change Job Profile",
    title: "Which type of Job is best for me?",
    description: "For identifying the best-fit job role in your industry",
    buttonText: "Search Now",
    path: "/changejob",
    icon: <Briefcase size={20} />,
    accent: "from-teal-700 to-[#20433C]",
  },
];

const WorkingProfessinal = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 py-20 overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-100/10 to-teal-100/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-emerald-200/50">
            <Sparkles size={16} className="animate-pulse" />
            AI-Powered Career Guidance
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
            Professional Career Scale Problem-Solution Grid
          </h1>

          <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Identify the best career moves that align with your goals and
            long-term growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-green-100/50"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>

              {/* Category Header */}
              <div
                className={`relative bg-gradient-to-r ${card.accent} text-white text-sm font-semibold px-4 py-3 rounded-b-2xl w-full text-center flex items-center justify-center gap-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                {card.category}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>

              {/* Card Body */}
              <div className="relative p-8 flex-1 flex flex-col justify-between text-center z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-emerald-700 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {card.description}
                </p>

                <Link
                  to={card.path}
                  className={`relative overflow-hidden bg-gradient-to-r ${card.accent} hover:shadow-2xl text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg text-sm group-hover:shadow-emerald-500/25`}
                >
                  <span className="relative z-10">{card.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center relative">
          <div className="inline-block p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl shadow-xl backdrop-blur-sm border border-green-100/50 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get matched with{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20433C] to-[#23453e] animate-pulse">
                career opportunities
              </span>{" "}
              that ensure long-term stability and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProfessinal;
