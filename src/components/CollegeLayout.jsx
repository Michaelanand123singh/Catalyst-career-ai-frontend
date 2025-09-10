import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Star, MessageCircle, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import bigb from "../assets/images/bigb.png";

const assessments = {
  "/bachelors": {
    category: "Bachelors Degree Selection",
    title: "Which Graduation Degree/Career is best for me?",
    subtitle: "for school students",
    buttonText: "Start Your Assessment",
    icon: MessageCircle,
    description: [
      "For students completing Class 11 and 12, the next big decision is selecting the right Bachelor’s degree and career pathway. Whether coming from Science, Commerce, or Arts, this choice plays a defining role in shaping their future. According to the National Education Policy (NEP), higher education decisions should be based on a student’s Aptitude, Personality, and Interests rather than external pressure, trends, or guesswork.",
      "Unfortunately, many students enter college without clarity, often choosing degrees that don’t align with their true potential. This mismatch leads to dissatisfaction, wasted years, and limited career growth.",
      "The Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a scientific, personalised roadmap that helps students identify the most suitable undergraduate courses and career clusters. By evaluating each student’s strengths, passions, and long-term goals, SPCAT guides them toward degree options where they are most likely to excel and build successful careers.",
      "With this clarity, students step into their Bachelor’s journey confident, focused, and future-ready — while parents gain peace of mind knowing their child is pursuing a path that balances both interest and stability."
    ],
    heroTitle1: "Choose the Right",
    heroTitle2: "Bachelor’s Degree with Confidence",
    heroSubtitle: "Discover the ideal graduation path aligned with your aptitude, personality, and interests.",
    heroCTA1: "Start Assessment",
    heroCTA2: "Explore Career Options"
  },

  "/engineeringbranch": {
    category: "Engineering Branch Selection",
    title: "Which branch of Engineering is best for me?",
    subtitle: "for engineering education aspirants",
    buttonText: "Start Your Assessment",
    icon: Search,
    description: [
      "For Students Aspiring to Pursue a Bachelor’s Degree in Engineering – Choosing the Right Branch",
      "For students preparing to pursue engineering after Class 12, the real challenge is not just clearing entrance exams, but identifying the right engineering branch that matches their long-term goals. With options like Computer Science, Mechanical, Civil, Electronics, Electrical, Chemical, and emerging fields like AI, Data Science, and Robotics, the decision can be overwhelming.",
      "As emphasised in the National Education Policy (NEP), higher education choices must be based on a student’s Aptitude, Personality, and Interests, rather than peer pressure, popularity of a stream, or societal expectations. Unfortunately, many students enter engineering without clarity, which often leads to frustration, low motivation, or mismatched career outcomes later in life.",
      "To overcome this, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a research-driven, personalised roadmap that helps students discover their optimum fitment across different branches of engineering. By aligning their natural strengths, problem-solving style, and interests with the most suitable engineering stream, SPCAT ensures students make informed choices before stepping into college.",
      "With this clarity, students begin their Bachelor of Engineering journey with confidence, while parents gain the assurance that their child’s career path is scientifically guided, future-focused, and built on both stability and passion."
    ],
    heroTitle1: "Find Your Perfect",
    heroTitle2: "Engineering Branch",
    heroSubtitle: "Identify the engineering stream that matches your skills, goals, and future opportunities.",
    heroCTA1: "Start Branch Assessment",
    heroCTA2: "Explore Engineering Careers"
  },

  "/masterdegree": {
    category: "Masters Degree Selection",
    title: "Which Post Graduation Degree/Career is best for me?",
    subtitle: "for graduate students",
    buttonText: "Start Your Assessment",
    icon: Search,
    description: [
      "For students preparing to pursue a Master’s degree, the decision goes far beyond choosing a subject — it’s about identifying the right specialization, career cluster, and long-term direction. At this stage, students often face questions like: Should I continue in the same field as my graduation? Should I switch to management, design, technology, or research? Which career path will give me both stability and growth?",
      "Unfortunately, many students make this critical decision based on peer influence, market hype, or incomplete advice, which can result in mismatched career paths and professional dissatisfaction.",
      "To bring clarity, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a data-driven, research-backed career roadmap designed for postgraduate aspirants. The assessment evaluates a student’s aptitude, personality, and interests, aligning them with the Master’s programs and career clusters where they are most likely to excel.",
      "By uncovering natural strengths and connecting them with the most suitable higher education options, SPCAT ensures that students enter their Master’s journey with confidence, focus, and a clear vision for the future. This way, pursuing a postgraduate degree becomes not just an academic milestone, but a strategic step toward long-term career success."
    ],
    heroTitle1: "Shape Your Future with the Right",
    heroTitle2: "Master’s Degree",
    heroSubtitle: "Get clarity on the best postgraduate courses and career clusters for your success.",
    heroCTA1: "Start Master’s Assessment",
    heroCTA2: "View Career Roadmap"
  },

  "/careercluster": {
    category: "Career Cluster Analysis",
    title: "Identify the best Career Cluster",
    subtitle: "Identify the best Career",
    buttonText: "Start Your Assessment",
    icon: Search,
    description: [
      "For many students and young professionals, the bigger challenge is not just choosing subjects or streams, but finding the right career cluster where their skills and passions truly belong. With countless options available — from engineering, healthcare, finance, design, media, law, technology, and more — the decision often becomes overwhelming. Too often, choices are made based on trends, peer pressure, or limited awareness, leading to careers that don’t align with individual strengths.",
      "The National Education Policy (NEP) emphasises that education and career planning should be built on a student’s Aptitude, Personality, and Interests. This is exactly what the Catalyst Scientific Psychometric Career Assessment (SPCAT) delivers. By analysing these factors, SPCAT helps identify the best-fit career cluster for each student or professional, offering a clear, research-backed roadmap to long-term stability and growth.",
      "Whether you are a Class 11–12 student preparing for college, a graduate exploring higher studies, or even a professional considering a career shift, SPCAT ensures your decision is made with clarity, confidence, and purpose. Instead of walking blindly into a field, you step into a career cluster where you can excel, grow, and thrive."
    ],
    heroTitle1: "Discover Your Ideal",
    heroTitle2: "Career Cluster",
    heroSubtitle: "Uncover the industries and professions where your strengths and passions align.",
    heroCTA1: "Start Career Cluster Test",
    heroCTA2: "See Matching Careers"
  }
};

const assessmentPaths = [
  "/bachelors",
  "/engineeringbranch",
  "/masterdegree",
  "/careercluster"
];

const CollegeLayout = () => {
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
        <div className="absolute inset-0">
          <img src={bigb} alt="Background" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-teal-800/60 to-green-900/70"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
              {data.heroTitle1}
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                {data.heroTitle2}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-8 md:mb-12 leading-relaxed">
              {data.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                {data.heroCTA1}
              </button>
              <button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2">
                <Search size={20} />
                {data.heroCTA2}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Back & Next */}
 <div className="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
         {prevPath ? (
           <button
             onClick={() => navigate(prevPath)}
             className="flex items-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
           >
             <ArrowLeft size={16} />
             Back
           </button>
         ) : <div />}
         {nextPath ? (
           <button
             onClick={() => navigate(nextPath)}
             className="flex items-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-bold py-2 px-3 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
           >
             Next
             <ArrowRight size={16} />
           </button>
         ) : <div />}
       </div>

      {/* Service Section */}
      <div className="relative pb-12 sm:pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="max-w-sm w-full">
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold shadow-lg w-full">
                  <IconComponent size={18} />
                  {data.category}
                </span>
              </div>

              <div className="bg-gradient-to-br from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-center mb-4 sm:mb-6">
                  <IconComponent size={48} className="mx-auto mb-2 sm:mb-4 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 leading-tight text-center">{data.title}</h3>
                <p className="text-emerald-100 text-sm sm:text-base mb-4 sm:mb-8 text-center leading-relaxed">{data.subtitle}</p>
              </div>

              <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                <IconComponent size={20} /> {data.buttonText}
              </button>
            </div>
          </div>

          {/* Right Content */}
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

      {/* CTA Section */}
      <div className="relative py-16 sm:py-24 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
            Find the Right Path for <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Your Education & Career.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Whether you’re a school student, graduate, or professional — make confident choices with our scientific career assessments.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Start Your Career Journey Today</h3>
                <p className="text-base sm:text-lg text-gray-600">Get clear, personalized guidance to plan your future with confidence.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                  <MessageCircle size={20} /> Start Assessment
                </button>
                <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-flex items-center gap-2">
                  <Search size={20} /> Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Clarity & Confidence</h4>
              <p className="text-gray-600 text-sm sm:text-base">Make informed choices about your studies and career with research-backed guidance.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Search className="text-white" size={24} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Discover Opportunities</h4>
              <p className="text-gray-600 text-sm sm:text-base">Explore education paths and career options that align with your strengths and goals.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-emerald-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Star className="text-white" size={24} />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Personalized Roadmap</h4>
              <p className="text-gray-600 text-sm sm:text-base">Get a tailored plan designed to help you excel academically and professionally.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeLayout;
