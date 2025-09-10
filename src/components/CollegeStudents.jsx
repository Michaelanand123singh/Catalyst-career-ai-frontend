import React from "react";
import { GraduationCap, Briefcase, Wrench, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    category: "Bachelors Degree Selection",
    title: "Which Graduation Degree/Career is best for me?",
    description: "For school students moving into higher education",
    buttonText: "Start Your Assessment",
    path: "/bachelors",
    icon: <GraduationCap size={20} />,
    accent: "from-emerald-800 to-[#23453e]",
  },
  {
    id: 2,
    category: "Engineering Branch Selection",
    title: "Which branch of Engineering is best for me?",
    description: "For students preparing for engineering education",
    buttonText: "Start Your Assessment",
    path: "/engineeringbranch",
    icon: <Wrench size={20} />,
    accent: "from-teal-700 to-[#20433C]",
  },
  {
    id: 3,
    category: "Masters Degree Selection",
    title: "Which Post Graduation Degree/Career is best for me?",
    description: "For graduate students looking at higher studies",
    buttonText: "Start Your Assessment",
    path: "/masterdegree",
    icon: <GraduationCap size={20} />,
    accent: "from-green-800 to-teal-800",
  },
  {
    id: 4,
    category: "Career Cluster Analysis",
    title: "Identify the best Career Cluster",
    description: "Get guidance on the most suitable career cluster",
    buttonText: "Start Your Assessment",
    path: "/careercluster",
    icon: <Briefcase size={20} />,
    accent: "from-[#20433C] to-green-800",
  },
];

const CollegeStudents = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 py-16 sm:py-20 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -left-32 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-green-100/10 to-teal-100/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-lg border border-emerald-200/50">
            <Sparkles size={16} className="animate-pulse" />
            AI-Powered Academic Guidance
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6 sm:mb-8">
            Academic Career Problem-Solution Grid <br />
            <span className="bg-gradient-to-r from-[#20433C] via-green-600 to-[#23453e] bg-clip-text text-transparent">
              For College Students
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
            Discover the best-fit degrees, specializations, and careers with
            Catalyst's AI-powered career assessments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-green-100/50 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category */}
              <div
                className={`relative bg-gradient-to-r ${card.accent} text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-b-2xl w-full text-center flex items-center justify-center gap-2 shadow-lg`}
              >
                {card.icon}
                {card.category}
              </div>

              {/* Card Body */}
              <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between text-center z-10">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug group-hover:text-emerald-700 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {card.description}
                </p>

                <Link
                  to={card.path}
                  className={`relative overflow-hidden bg-gradient-to-r ${card.accent} text-white font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg text-sm`}
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center relative">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl sm:rounded-3xl shadow-xl backdrop-blur-sm border border-green-100/50">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Get matched with degrees, branches, and careers that ensure
              long-term stability and growth through our{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#20433C] to-[#23453e] animate-pulse">
                Advanced Psychometric Assessment.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeStudents;
