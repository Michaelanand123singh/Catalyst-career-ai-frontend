import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from "framer-motion";


import Img1 from "../assets/icons/1.png";
import Img2 from "../assets/icons/2.png";
import Img3 from "../assets/icons/3.png";
import Img4 from "../assets/icons/4.png";
import Img5 from "../assets/icons/5.png";
import Img6 from "../assets/icons/6.png";
import Img7 from "../assets/icons/7.png";
import Img8 from "../assets/icons/8.png";

import bg from "../assets/images/bg.png";
import about from "../assets/images/about.png";
import vision from "../assets/images/vision.png";
import mission from "../assets/images/mission.png";
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
    { icon: <img src={Img1} alt="Student-Centric" className="w-14 h-14 md:w-16 md:h-16" />, title: "Student-Centric Approach", description: "Every decision we make is focused on empowering students to reach their full potential." },
    { icon: <img src={Img2} alt="Trust & Credibility" className="w-14 h-14 md:w-16 md:h-16" />, title: "Trust & Credibility", description: "Built on the foundation of experienced educators and proven methodologies." },
    { icon: <img src={Img3} alt="Innovation" className="w-14 h-14 md:w-16 md:h-16" />, title: "Innovation", description: "Continuously evolving our methods to stay ahead of educational trends." },
    { icon: <img src={Img4} alt="Inclusivity" className="w-14 h-14 md:w-16 md:h-16" />, title: "Inclusivity", description: "Ensuring no child is left behind due to lack of educational resources." }
  ];

  const teamHighlights = [
    { icon: <img src={Img5} alt="Expert Counselors" className="w-14 h-14 md:w-16 md:h-16" />, title: "Expert Counselors", description: "Team of experienced career counselors" },
    { icon: <img src={Img6} alt="Research-Based" className="w-14 h-14 md:w-16 md:h-16" />, title: "Research-Based", description: "All assessments backed by scientific research and validation" },
    { icon: <img src={Img7} alt="Personalized Approach" className="w-14 h-14 md:w-16 md:h-16" />, title: "Personalized Approach", description: "Individual attention and customized guidance for every student" },
    { icon: <img src={Img8} alt="Proven Results" className="w-14 h-14 md:w-16 md:h-16" />, title: "Proven Results", description: "Thousands of success stories and satisfied families" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Founded in 2019
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-green-600 leading-snug mb-4 sm:mb-6">
            About Us –{" "}
            <span className="text-[#20433C]">The Catalyst Story</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            At <span className="font-semibold text-[#20433C]">Catalyst</span>, 
            we believe that every student's potential is unique - and so should be their career path.
            In today's competitive world, most career choices in India are influenced by peer pressure, trends, or incomplete advice.
            This often leads to misplaced ambitions, wasted years, and unfulfilled dreams - We're here to change that!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-4 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#4d756b] transition-colors shadow-lg w-full sm:w-auto"
            >
              START YOUR ASSESSMENT
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-4 py-3 bg-[#20433C] text-white font-semibold rounded-3xl hover:bg-[#568075] transition-colors shadow-lg w-full sm:w-auto"
            >
              BOOK YOUR 1-1 COUNSELLING
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About + Quote */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16 sm:py-20 px-4">
  {/* Large green circle */}
  <div className="absolute top-[3%] right-[5%] w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-200 rounded-full opacity-30"></div>

  {/* White circle */}
  <div className="absolute top-[10%] right-[20%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full opacity-60"></div>

  {/* Emerald circle */}
  <div className="absolute top-[5%] right-[6%] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-300 rounded-full opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text */}
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Founded in 2019
            </div>
            <div className="space-y-4 sm:space-y-6 text-justify">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-green-600">Haryug Singh</span> — with dual MBAs, one in Product and Brand Management from IIM Rohtak and another in Business Management from Narsee Monjee Institute of Management Studies, Mumbai — Catalyst was built on a mission to ensure no child ever suffers from the lack of proper guidance. Backed by years of experience in teaching, mentoring, and educational leadership, our platform careerwithcatalyst.in offers the Scientific Psychometric Career Assessment Test (SPCAT), designed to help students discover their true strengths, interests, and ideal career pathways.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
But we don't stop at assessment. We provide personalised reports, one-on-one counselling sessions, and actionable career roadmaps that balance what students love with what will last.              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
 Over the years, Catalyst has partnered with leading schools, conducted impactful seminars, and guided hundreds of families toward informed career decisions — creating a generation of confident, future-ready individuals.              </p>
            </div>
          </div>

          {/* Quote */}

<div className="flex-1 text-center relative px-4">
  {/* Image with Framer Motion */}
  <motion.div
    className="relative inline-block group"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
    <motion.img
      src={about}
      alt="About Catalyst"
      className="relative w-48 sm:w-60 md:w-72 lg:w-80 mx-auto mb-6 object-contain rounded-2xl shadow-xl group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500"
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    />
  </motion.div>

  {/* Quote with Animation */}
  <motion.blockquote
    className="relative text-lg sm:text-xl lg:text-2xl font-extrabold leading-snug sm:leading-tight text-gray-800 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
    viewport={{ once: true }}
  >
    "Because at Catalyst, your future isn't a guess — it's a{" "}
    <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
      guided journey
    </span>
    "
  </motion.blockquote>

  {/* Decorative Circles */}
  <motion.div
    className="absolute -top-6 -left-6 w-16 sm:w-20 h-16 sm:h-20 bg-green-300 rounded-full opacity-50 blur-xl"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-6 -right-4 w-8 sm:w-10 h-8 sm:h-10 bg-emerald-300 rounded-full opacity-40 blur-lg"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
</div>


          
        </div>
        </div>
        </div>
      </section>

{/* Vision & Mission */}
<section className="py-16 sm:py-20 bg-white px-4">
  <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
    {/* Vision */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
        Our Vision
      </h3>
      <div className="border-2 sm:border-4 border-black p-6 sm:p-8 bg-white">
        <p className="text-base sm:text-lg text-gray-700 text-center mb-6 leading-relaxed">
          To ensure no child suffers from lack of educational resources. We
          believe every student deserves access to quality career guidance and
          the tools to discover true potential.
        </p>
        <div className="flex justify-center">
          <img src={vision} alt="Vision Icon" className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
      </div>
    </div>

    {/* Mission */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
        Our Mission
      </h3>
      <div className="border-2 sm:border-4 border-black p-6 sm:p-8 bg-white">
        <p className="text-base sm:text-lg text-gray-700 text-center mb-6 leading-relaxed">
          Our mission is to inspire and equip individuals with the tools,
          knowledge, and resources needed to unlock their potential and achieve
          success.
        </p>
        <div className="flex justify-center">
          <img src={mission} alt="Mission Icon" className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#20433c] mb-3">Our Core Values</h2>
            <p className="text-base sm:text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-xl text-center transition">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Why Trust Catalyst?</h2>
            <p className="text-base sm:text-lg text-gray-600">Our expertise and commitment to excellence</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
            {teamHighlights.map((highlight, idx) => (
              <div key={idx} className="text-center p-5 sm:p-6">
                <div className="flex justify-center mb-4">{highlight.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
           <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Scientific psychometric assessments
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Personalized career roadmaps
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Expert one-on-one counseling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    NEP-aligned guidance
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Practical learning approach
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Comprehensive support system
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Proven success stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Continuous innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default About;
