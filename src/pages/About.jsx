import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Heart, 
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
const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Student-Centric Approach",
      description: "Every decision we make is focused on empowering students to reach their full potential."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Credibility",
      description: "Built on the foundation of experienced educators and proven methodologies."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Continuously evolving our methods to stay ahead of educational trends."
    },
    {
      icon: <Globe className="h-8 w-8" />,
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
This often leads to misplaced ambitions, wasted years, and unfulfilled dreams - We're here to change that!
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
    
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex  gap-2 items-center justify-center ">
          {/* Text Content */}
          <div className="space-y-6 w-1/2 p-3">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              Founded in 2019
            </div>
         
            
            <div className="space-y-6  items-center flex justify-center flex-col">
              <p className="text-lg text-gray-700 leading-relaxed ">
                 <span className="font-semibold text-amber-600">Haryug Singh</span>  —  with dual MBAs, one in Product and Brand Management from IIM Rohtak and another in Business Management from Narsee Monjee Institute of Management Studies, Mumbai — Catalyst was built on a mission to ensure no child ever suffers from the lack of proper guidance. Backed by years of experience in teaching, mentoring, and educational leadership, our platform careerwithcatalyst.in offers the Scientific Psychometric Career Assessment Test (SPCAT), designed to help students discover their true strengths, interests, and ideal career pathways.
              </p>
              <div className=' mt-2 max-w-[550px] text-center'>

              <p className="text-md text-gray-700 leading-relaxed mb-4">
                But we don't stop at assessment. We provide personalised reports, one-on-one counselling sessions, and actionable career roadmaps that balance what 
                students love with what will last.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                 Over the years, Catalyst has partnered with leading schools, conducted 
                impactful seminars, and guided hundreds of families toward informed career 
                decisions — creating a generation of confident, future-ready individuals.
              </p>
              </div>
              
              
            </div>
            
     
          </div>
          
          {/* Quote Section */}
          <div className="relative w-1/2 items-center content-center flex flex-col">
            <img src={bg} alt="" srcset="" className='w-90 h-90 mb-10'/>
              <blockquote className="text-md lg:text-lg font-bold text-gray-800 text-center leading-tight">
                "Because at Catalyst, your future isn't a guess — it's a{' '}
                <span className="text-amber-600">guided journey</span>"
              </blockquote>
            
            {/* Decorative elements around quote */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-200 rounded-full opacity-70"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#20433c] mb-4">
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
      <section className="py-20 bg-gradient-to-r from-[#20433C] to-[#274e46]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 mb-6">
            Ready to Transform Your Career Journey?
          </h2>
          <p className="text-xl text-amber-600 mb-8">
            Join thousands of students who have discovered their true potential with Catalyst
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                               to="/assessment-tests"
                               className="inline-flex items-center justify-center px-3 py-3 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-400 hover:font-bold transition-colors shadow-lg animate-pulse"
                             >
                               START YOUR ASSESSEMENT
                               <ArrowRight className="ml-2 h-5 w-5" />
                             </Link>
                             <Link
                               to="/assessment-tests"
                               className="inline-flex items-center justify-center px-3 py-3 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-orange-400 hover:font-bold transition-colors shadow-lg animate-pulse"
                             >
                               BOOK YOUR 1-1 COUNSELLING
                               <ArrowRight className="ml-2 h-5 w-5" />
                             </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;