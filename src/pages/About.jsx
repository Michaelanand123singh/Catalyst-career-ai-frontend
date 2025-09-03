import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Star,
  GraduationCap,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

import bg from "../images/bg.png"
import vision from "../images/vision.png"
import mission from "../images/mission.png"

// Custom SVG Icons
const StudentCentricIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="currentColor" fillOpacity="0.1"/>
    <path d="M25 20L39 32L25 44M28 32H45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const TrustCredibilityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="currentColor" fillOpacity="0.1"/>
    <path d="M25 25L32 20L39 25V35C39 38.866 35.866 42 32 42C28.134 42 25 38.866 25 35V25Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="30" r="2" fill="currentColor"/>
    <circle cx="36" cy="30" r="2" fill="currentColor"/>
    <path d="M28 35L32 38L36 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const InnovationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="32" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 33H36M30 36H34M32 41V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 22L26 24M40 22L38 24M22 30H20M44 30H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const InclusivityIcon = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" fill="currentColor" fillOpacity="0.1"/>
    <circle cx="28" cy="26" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="36" cy="26" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M22 38C22 34.686 24.686 32 28 32H36C39.314 32 42 34.686 42 38V42H22V38Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M18 35L22 38M46 35L42 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const About = () => {
  const values = [
    {
      icon: <StudentCentricIcon />,
      title: "Student-Centric Approach",
      description: "Every decision we make is focused on empowering students to reach their full potential."
    },
    {
      icon: <TrustCredibilityIcon />,
      title: "Trust & Credibility",
      description: "Built on the foundation of experienced educators and proven methodologies."
    },
    {
      icon: <InnovationIcon />,
      title: "Innovation",
      description: "Continuously evolving our methods to stay ahead of educational trends."
    },
    {
      icon: <InclusivityIcon />,
      title: "Inclusivity",
      description: "Ensuring no child is left behind due to lack of educational resources."
    }
  ];

  const teamHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert Counselors",
      description: "Team of experienced career counselors"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Research-Based",
      description: "All assessments backed by scientific research and validation"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Approach",
      description: "Individual attention and customized guidance for every student"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Proven Results",
      description: "Thousands of success stories and satisfied families"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#20433c]-100 text-amber-700 rounded-full text-sm font-medium mb-6">
             
              Founded in 2019
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-600 leading-tight mb-6">
              About Us –{" "}
              <span className="text-[#20433C]">The Catalyst Story</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At <span className="font-semibold text-[#20433C]">Catalyst</span>, 
                we believe that every student's potential is unique - and so should be their career path.
In today's competitive world, most career choices in India are influenced by peer pressure, trends, or incomplete advice.
This often leads to misplaced ambitions, wasted years, and unfulfilled dreams - We're here to change that!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                               to="/assessment-tests"
                               className="inline-flex items-center justify-center px-3 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#4d756b] hover:font-bold transition-colors shadow-lg animate-pulse"
                             >
                               START YOUR ASSESSEMENT
                               <ArrowRight className="ml-2 h-5 w-5" />
                             </Link>
                             <Link
                               to="/assessment-tests"
                               className="inline-flex items-center justify-center px-3 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#568075] hover:font-bold transition-colors shadow-lg animate-pulse"
                             >
                               BOOK YOUR 1-1 COUNSELLING
                               <ArrowRight className="ml-2 h-5 w-5" />
                             </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-40"></div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-8">
                <Award className="h-4 w-4 mr-2" />
                Founded in 2019
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-amber-600">Haryug Singh</span> — with dual MBAs, one in Product and Brand Management from IIM Rohtak and another in Business Management from Narsee Monjee Institute of Management Studies, Mumbai — Catalyst was built on a mission to ensure no child ever suffers from the lack of proper guidance. Backed by years of experience in teaching, mentoring, and educational leadership, our platform careerwithcatalyst.in offers the Scientific Psychometric Career Assessment Test (SPCAT), designed to help students discover their true strengths, interests, and ideal career pathways.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  But we don't stop at assessment. We provide personalised reports, one-on-one counselling sessions, and actionable career roadmaps that balance what students love with what will last.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Over the years, Catalyst has partnered with leading schools, conducted impactful seminars, and guided hundreds of families toward informed career decisions — creating a generation of confident, future-ready individuals.
                </p>
              </div>
            </div>
            
            {/* Quote Section */}
            <div className="flex-1 max-w-lg">
              <div className="relative flex flex-col items-center text-center">
                <img src={bg} alt="" className="w-80 h-80 mb-8 object-contain" />
                <blockquote className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                  "Because at Catalyst, your future isn't a guess — it's a{' '}
                  <span className="text-amber-600">guided journey</span>"
                </blockquote>
                
                {/* Decorative elements around quote */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-200 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
     <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-2xl text-gray-600 font-medium">
            Driving educational transformation through innovation and personalized guidance
          </h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision Card */}
            <div>
<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Vision</h3>
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              "To ensure no child suffers from lack of educational resources. We believe every student deserves access to quality career guidance and the tools to discover true potential."
            </p>
            
            {/* Icon - Person with magnifying glass */}
            <div className=" flex justify-center">

            <img src={vision} alt="" className='w-20 h-20'/>
            </div>
          </div>
            </div>

          {/* Mission Card */}
          <div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Mission</h3>
          <div className="border-4 border-black p-8 bg-white">
            <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
              "Our mission is to inspire and equip individuals with the tools, knowledge, and resources needed to unlock their potential and achieve success."
            </p>
            
            {/* Icon - Person with puzzle pieces */}
            <div className=" flex justify-center">

            <img src={mission} alt="" className='w-20 h-20'/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Catalyst
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-amber-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Team & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Trust Catalyst?
            </h2>
            <p className="text-xl text-gray-600">
              Our expertise and commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-amber-600">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Scientific psychometric assessments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Personalized career roadmaps
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Expert one-on-one counseling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    NEP-aligned guidance
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Practical learning approach
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Comprehensive support system
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Proven success stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Continuous innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of students who have discovered their true potential with Catalyst
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-[#20433c] text-white  rounded-3xl hover:bg-amber-600 transition-colors shadow-lg  font-bold">
                Take Our Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#20433c] text-[#20433c] font-semibold rounded-3xl hover:bg-green-700 transition-colors  hover:text-white ">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;