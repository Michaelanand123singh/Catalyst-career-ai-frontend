import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Users, Target, BookOpen,
  Calendar, Clock, User
} from 'lucide-react';
import api from '../services/api';
import SchoolStudents from '../components/SchoolStudents';
import CollegeStudents from '../components/CollegeStudents';
import WorkingProfessinal from '../components/WorkingProfessinal';
import ProblemSolutionGrid from '../components/ProblemSolutionGrid';

const Home = () => {
const [recentBlogs, setRecentBlogs] = useState([]);
const [loadingBlogs, setLoadingBlogs] = useState(true);


  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const [data, error] = await api.getBlogPosts();
        if (!error) setRecentBlogs((data || []).slice(0, 3));
      } catch {
        setRecentBlogs([]);
      } finally {
        setLoadingBlogs(false);
      }
    };
    fetchRecentBlogs();
  }, []);

  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Personalized Insights",
      description: "Tailored career assessments that reveal your true potential."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practical Learning",
      description: "Beyond theory, we focus on skills for real-world success."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Aligned with NEP",
      description: "Guidance designed in harmony with India's National Education Policy."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted Expertise",
      description: "Founded by experienced educators passionate about your growth."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 w-full lg:w-1/2 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Career, Your Future – Let's Find the Perfect Path Together
                </h1>
                <p className="text-lg sm:text-xl text-gray-700">
                  Personalised career guidance backed by scientific psychometric career assessment tests & expert counselling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/assessment-tests"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#4d756b] transition-colors shadow-lg"
                >
                  START YOUR ASSESSEMENT
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/assessment-tests"
                  className="inline-flex items-center justify-center px-5 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#568075] transition-colors shadow-lg"
                >
                  BOOK YOUR 1-1 COUNSELLING
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative w-full lg:w-1/2 flex flex-col items-center">
              <p className="text-lg sm:text-xl md:text-2xl pb-6 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-pink-600 to-amber-500">
                Scientific Psychometric Career Assessment Test for School, College Students and for Working Professionals
              </p>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-transform duration-500 max-w-lg w-full">
                <div className="bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl p-6 shadow-inner">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900 text-lg">Career Assessment Results</h3>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                  {/* Progress Bars */}
                  {[
                    { label: "Analytical Skills", value: 85, color: "bg-amber-500", text: "text-amber-600" },
                    { label: "Creative Thinking", value: 92, color: "bg-blue-500", text: "text-blue-600" },
                    { label: "Leadership", value: 78, color: "bg-green-500", text: "text-green-600" }
                  ].map((skill, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                        <span className={`text-sm font-semibold ${skill.text}`}>{skill.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`${skill.color} h-2 rounded-full`}
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Sections */}
      <SchoolStudents />
      <CollegeStudents />
      <WorkingProfessinal />
      <ProblemSolutionGrid />

      {/* How Catalyst Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20433C] mb-4">
              Catalyst works on "3A" workframe
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Three simple steps to unlock your career potential
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Assess", "Analyse", "Achieve"].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{i + 1}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{step}</h3>
                <p className="text-gray-600">
                  {i === 0
                    ? "Take our Scientific Psychometric Career Assessment Test."
                    : i === 1
                    ? "Get personalised reports with clear guidance."
                    : "Follow your customised career roadmap."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Comprehensive support for students, parents, teachers, and institutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
    {/* Left Column */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        Additional Benefits
      </h3>
      <ul className="space-y-3 sm:space-y-4">
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          1-on-1 academic & career counselling
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Proven success stories
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Personalized, Scientific Career Assessment
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Hands-On Practical Learning Approach
        </li>
      </ul>
    </div>

    {/* Right Column */}
    <div>
      <ul className="space-y-3 sm:space-y-4">
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Expert Support from Experienced Educators
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Experienced mentors & renowned speakers
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          Empowering Students, Parents, and Teachers
        </li>
        <li className="flex items-center text-gray-700 text-sm sm:text-base">
          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3" />
          NEP-aligned guidance
        </li>
      </ul>
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default Home;
