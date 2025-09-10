import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Star, MessageCircle, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import bigb from "../assets/images/bigb.png";

const assessments = {
  "/for8th": {
    category: "Subject Selection",
    title: "Which subject is best for me?",
    subtitle: "for school students currently studying in Class 8th",
    buttonText: "Start Your Assessment",
    icon: MessageCircle,
    heroTitle1: "Discover Your ",
    heroTitle2: "Strengths Early",
    heroSubtitle: "Class 8 is the perfect time to explore your interests and build a strong foundation for the future.",
    heroCTA1: "Start Your Journey",
    heroCTA2: "Learn More",
    description: [
      "For students in Class 8, the journey of self-discovery begins much before subject and stream choices. As highlighted in the National Education Policy (NEP), early exploration of a child’s Aptitude, Personality, and Interests plays a key role in shaping confident learners and future-ready individuals.",
      `At this stage, most students are still unaware of their natural strengths, and parents too may find it difficult to identify which direction their child is best suited for. Without proper guidance, children often step into higher classes without clarity, which later leads to confusion during crucial subject and stream selections.`,
      "To prevent this, Catalyst’s Scientific Psychometric Career Assessment (SPCAT) helps Class 8 students and their parents gain early insights into a child’s learning style, abilities, and emerging interests. By building awareness at the right stage, SPCAT ensures that students enter Class 9 with clarity, confidence, and the foundation for informed subject and career decisions ahead.",
      
    ]
  },
  "/for10th": {
    category: "Subject Selection",
    title: "Which subject is best for me?",
    subtitle: "for school students currently studying in Class 9th/10th",
    buttonText: "Start Your Assessment",
    icon: Search,
    heroTitle1: "Choose the Right Subjects ",
    heroTitle2: "with Confidence",
    heroSubtitle: "Class 9 and 10 are the foundation years where your subject choices shape your career direction.",
    heroCTA1: "Start Assessment",
    heroCTA2: "Explore Streams",
    description: [
      "For students in Classes 9 and 10, choosing the right subjects for higher studies is the most crucial turning point in their academic journey. As highlighted in the National Education Policy (NEP), subject choices should reflect a student’s Aptitude, Personality and Interest, and —not just peer pressure or guesswork.",
      `Unfortunately, many students make this vital decision in confusion, often leading to mismatched career paths and frustration later in life. To address this, Catalyst’s Scientific Psychometric Career Assessment (SPCAT) provides a clear, research-backed roadmap to help students and parents take the right decision at the right time`,
      "By identifying natural strengths and aligning them with suitable subject options, SPCAT ensures that when a student enters Class XI, they are confident, focused, and future-ready.",
      
    ]
  },
  "/for12th": {
    category: "Subject Selection",
    title: "Which subject is best for me?",
    subtitle: "for school students currently studying in Class 11th/12th",
    buttonText: "Start Your Assessment",
    icon: Search,
    heroTitle1: "Turn Subject Choices ",
    heroTitle2: " into Career Paths",
    heroSubtitle: "Class 11 and 12 are not just about academics — they define your college and career opportunities.",
    heroCTA1: "Find My Career Path",
    heroCTA2: "Get Guidance",
    description: [
      "For students in Classes 11 and 12, the challenge goes beyond subject selection — it’s about deciding the right career pathway within Commerce, Arts, or Science. As emphasised in the National Education Policy (NEP), career choices must be guided by a student’s Aptitude, Personality, and Interests, and not by trends, peer influence, or societal pressure.",
      `Yet, many students continue to make these life-shaping decisions in uncertainty, often pursuing careers that do not align with their true strengths. This leads to mismatched college admissions, lack of motivation, and long-term dissatisfaction.`,
      "To solve this, the Catalyst Scientific Psychometric Career Assessment (SPCAT) offers a research-backed, personalised roadmap for senior secondary students. Whether a student is in Commerce, Arts, or Science, SPCAT helps identify the most suitable higher education courses, professional streams, and career clusters.",
      "By aligning natural strengths with the right career options, SPCAT ensures that students step into college with clarity, confidence, and a strong sense of direction — reducing confusion today and securing stability and growth for tomorrow.",
      
    ]
  },
  "/diploma": {
    category: "Career Selection",
    title: "Which career is best for me?",
    subtitle: "for students wants to or pursue Diploma/IT",
    buttonText: "Start Your Assessment",
    icon: Search,
    heroTitle1: "Select the Right Diploma ",
    heroTitle2: "or IT Career",
    heroSubtitle: "Don’t choose blindly — discover which branch, trade, or IT course matches your strengths.",
    heroCTA1: "Start Career Assessment",
    heroCTA2: "Explore Diploma Options",
    description: [
      "For students planning to pursue IT or Diploma courses after Class 10, the decision is both exciting and critical. As emphasised in the National Education Policy (NEP), such choices should be guided by a student’s Aptitude, Personality, and Interests, and not made solely on peer pressure, social influence, or short-term trends.",
      `Unfortunately, many students and parents enter this stage without clarity, often choosing a diploma or IT stream without truly understanding whether it matches the student’s skills and long-term career goals. This can lead to frustration, wasted years, and the need to switch directions later.`,
      "To prevent this, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a clear, scientific, and personalised roadmap. By identifying a student’s natural strengths and aligning them with the most suitable IT or Diploma specialisations, SPCAT ensures that students step into their chosen course with confidence, focus, and clarity of purpose.",
      "This early guidance empowers students to select the right branch or trade, setting a strong foundation for future growth in technology-driven and skill-based careers.",
      
    ]
  },
  "/skilldevelopment": {
    category: "Vocational Training",
    title: "Vocational Trade Selector",
    subtitle: "For Skill Development Courses selection",
    buttonText: "Book Your 1-1 Counselling",
    icon: Search,
    heroTitle1: "Build Skills That",
    heroTitle2: " Match Your Future",
    heroSubtitle: "Choose the right vocational training that connects your strengths with industry-ready opportunities.",
    heroCTA1: "Book Counselling",
    heroCTA2: "View Trades",
    description: [
      "For many students, Vocational Training has become an equally important pathway as traditional academic education. The National Education Policy (NEP) 2020 highlights vocational learning as a key element of school education, encouraging students to gain hands-on skills alongside academics. Choosing the right vocational stream, however, is just as critical as selecting academic subjects, and should be guided by a student’s Aptitude, Personality, and Interests rather than social influence or trial-and-error.",
      `Unfortunately, many students and parents still view vocational courses with uncertainty, often selecting them without understanding how these skills connect with long-term career opportunities. This lack of clarity can lead to wasted effort and missed potential.`,
      "To bridge this gap, the Catalyst Scientific Psychometric Career Assessment (SPCAT) provides a research-backed roadmap that helps students identify which vocational domains — whether in IT, design, healthcare, creative fields, or technical trades — best align with their strengths and aspirations.",
      "By matching natural abilities with vocational pathways, SPCAT ensures that students pursue skill-based learning with clarity, confidence, and purpose, opening doors to both higher studies and career-ready opportunities. With the right choice, vocational training becomes not just an option, but a powerful foundation for a successful and future-ready career.",

    ]
  },
};
const assessmentPaths = ["/for8th", "/for10th", "/for12th", "/diploma", "/skilldevelopment"];

const SchoolLayout = () => {
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

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {data.heroTitle1}
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                {data.heroTitle2}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-8 leading-relaxed max-w-4xl mx-auto">
              {data.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base flex items-center gap-2">
                <MessageCircle size={16} className="sm:mr-1" />
                {data.heroCTA1}
              </button>

              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base flex items-center gap-2">
                <Search size={16} className="sm:mr-1" />
                {data.heroCTA2}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Back & Next Buttons */}
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
      <div className="relative pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="max-w-sm w-full">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md w-full">
                    <IconComponent size={16} />
                    {data.category}
                  </span>
                </div>

                <div className="bg-gradient-to-br from-[#20433C] to-[#3A6B5E] text-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center mb-4">
                    <IconComponent size={40} className="mx-auto mb-2 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">{data.title}</h3>
                  <p className="text-emerald-100 text-xs sm:text-sm mb-4 text-center">{data.subtitle}</p>
                </div>

                <button className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-2 px-4 sm:py-4 sm:px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base flex items-center justify-center gap-2">
                  <IconComponent size={16} />
                  {data.buttonText}
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
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


                <div className="text-center mt-6 sm:mt-10">
                  <button className="bg-gradient-to-r from-[#20433C] to-[#3A6B5E] hover:from-[#163029] hover:to-[#20433C] text-white font-semibold py-2 px-6 sm:py-4 sm:px-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-lg inline-flex items-center gap-2">
                    <IconComponent size={16} />
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
            Your Career, <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
              Guided by Clarity, Not Confusion.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl sm:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            From choosing school subjects to landing your dream job — Catalyst helps students, parents, and professionals make informed choices with the power of AI + expert guidance.
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 max-w-3xl sm:max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
            <div className="flex-1 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Start Your Career Clarity Journey</h3>
              <p className="text-sm sm:text-base text-gray-600">Assessments, counselling, and AI guidance — everything you need to find your right path.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base inline-flex items-center gap-2">
                <MessageCircle size={16} />
                Get Guidance
              </button>

              <button className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base inline-flex items-center gap-2">
                <Search size={16} />
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLayout;
