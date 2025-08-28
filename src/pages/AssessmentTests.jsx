import React from 'react';
import { useLocation } from "react-router-dom";
import { Star } from 'lucide-react';

const assessments = {
  "/subject-selection": {
    tag: "Subject Selection",
    title: "Which subject is best for me?",
    subtitle: "for school students currently studying in class Xth",
    buttonText: "Start Your Assessment",
    
    description: [
      "For students In Classes 9 and 10, choosing the right subjects for higher studles is the most crucial turning point in their academic Journey. As highlighted in the National Education Policy (NEP), subject cholces should reflect a student's Aptitude, Personality and Interest, and -not Just peer pressure or guesswork.",
      "UUnfortunately, many students make this vital decision in confusion, often leading to mismatched career paths and frustration later In life. To address this,  <strong> Catalyst's Scientific Psychometric Career Assessment (SPCAT)  </strong>provides a clear, research-backed roadmap to help students and parents take the right decision at the right time. Unfortunately, many students make this vital decision in confusion...",
      "By Identifying natural strengths and allgning them with suitable subject options, SPCAT ensures that when a student enters Class XI, they are confident, focused, and future-ready.",
    ],
    featureDesc: "Choosing the right subjects after Class 10 is one of the most important decisions in a student's life - yet most make it in confusion or under pressure. The Catalyst Scientific Psychometric Career Assessment (SPCAT) removes this guesswork. Helps students discover their true strengths and interests, aligns subject choices with NEP guidelines for future flexibility, prevents wrong turns in career planning, gives parents clarity and confidence in their child's decisions<br/>With one test, students gain a clear roadmap for Class XI subject selection and beyond ensuring every step ahead is confident, purposeful, and future-ready.",
    
    
  },
  "/career-selection": {
    tag: "Career Selection",
    title: "Which Career is best for me?",
    subtitle: "for school students",
    buttonText: "Start Your Assessment",
    description: [
      `Choosing the right career is no longer about guesswork or pressure from relatives asking, "Beta, what after 10th or 12th?" Under India's National Education Policy (NEP), students now have the flexibility to select subjects and streams that truly match their Interests and strengths. Yet, with so many options available, confusion is natural.`,
      " That's where Catalyst comes in. Our Scientific Psychometric Career Assessment Test (SPCAT) helps school students identify their aptitudes, interests, and personality traits, and align them with the right subjects, streams, and career pathways. Whether you are in Class 8, 10, or 12, this assessment gives you clarity and confidence in your career decisions ensuring that your passion and abilities go hand in hand with future opportunities.",
      "With Catalyst, career planning becomes a scientific, personalised, and future-ready journey, just as the NEP envisions.",
    ],
    featureDesc: "Because guessing your future is risky. The Catalyst Scientific Psychometric Career Assessment Test (SPCAT) gives students and parents clear, scientific guidance on which subjects, streams, and careers truly fit a child's strengths, interests, and personality. Instead of confusion or pressure, you get clarity, confidence, and a roadmap aligned with India's National Education Policy (NEP) -ensuring your child's choices today lead to a successful tomorrow.",
  },
  "/eng-branch-selection": {
    tag: "Engineering Branch Selection",
    title: "Which branch of Engineering is best for me?",
    subtitle: "for engineering education aspirants",
    buttonText: "Start Your Assessment",
    description: [
      `For many students in Class XI, XII, or beyond, the dream of becoming an engineer is clear-but the question that creates the most confusion is "Which branch of engineering should I choose?" With options ranging from Computer Science, Mechanical, Civil, Electrical, Electronics, Chemical, to newer fields like Al, Data Science, and Robotics, students often find themselves overwhelmed. Too often, this crucial decision is made based on peer pressure, trends, or Incomplete advice, rather than a true understanding of one's abilities and interests. Unfortunately, such choices can lead to frustration, academic struggle, or even a complete change of direction after valuable years have already been invested.`,
      "Ultimately, the Engineering Stream Fitment Assessment helps students make informed decisions that lead to academic success, career stability, and future growth in the ever-evolving world of engineering..",
    ],
    featureDesc: "Choosing the right branch of engineering can shape a student's entire future. With so many options - Computer Science, Mechanical, Civil, Electronics, and more most students decide under pressure, without truly knowing what fits them best. The Catalyst Scientific Psychometric Career Assessment (SPCAT) removes this confusion by matching a student's aptitude, interests, and personality with the engineering stream where they will thrive.<br/>For parents, it ensures that your child's choice is backed by science, not guesswork. For students, it provides the clarity and confidence needed to begin their engineering journey in the right direction",
  },
  "/career-cluster-selection": {
    tag: "Career Cluster Analysis",
    title: "Identify the best Career Cluster",
    subtitle: "for school students currently studying in class 7th/8th/9th",
    buttonText: "Start Your Assessment",
    description: [
      "The National Education Policy (NEP) encourages flexibility and exploration-but the real challenge is identifying where a child's true strengths lie. At this age, most students are still unaware of their natural abilities, and subject choices are often made without proper guidance. This early stage is critical, because understanding a student's aptitude, interests, and personality can lay the Foundation for confident decisions in higher classes.",
      "The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps parents and students uncover these strengths early, offering clear insights into the subjects and skills where a child will thrive.",
    ],
    featureDesc: "Students are still exploring who they are and what they enjoy yet these years form the foundation for all future learning. Without the right direction, children may enter higher classes confused and uncertain. The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps uncover a child's natural strengths, interests, and learning style early, so parents and students gain clarity before critical subject and stream choices arrive.<br/>This ensures child moves ahead with confidence, focus, and a clear roadmap for success.",
  },
  "/couseling-one": {
    tag: "1-1 Counselling Session",
    title: "1-1 Counselling Session",
    subtitle: "Meet our experts for Quick discussion of your career related dilemma",
    buttonText: "Book Your 1-1 Counselling",
    description: [
      "Every student, at some point in school, faces a moment of uncertainty Which subject should I choose? Which stream is best for me? Will my passion translate into a stable career? Under the National Education Policy (NEP), students now enjoy greater flexibility to explore subjects and career pathways. While this flexibility is empowering, it also brings along a new challenge: making informed choices at the right time.",
      "This is where Catalyst steps in. Our of experienced counsellors understands the dilemmas faced by both students and parents. Through a quick yet meaningful one-on-one discussion, our experts help you cut through the confusion and focus on what matters most-your child's strengths, interests, aptitude, and long-term career goals. Instead of relying on guesswork or peer pressure, you receive personalised, scientific, and practical advice to guide every next step.",
      "At Catalyst, we believe that one right conversation, at the right time, can change the course of a student's career journey. Our mission is to make sure that every child takes decisions based not on fear or confusion, but on scientific guidance, self-awareness, and future readiness"
    ],
    featureDesc: "Students are still exploring who they are and what they enjoy yet these years form the foundation for all future learning. Without the right direction, children may enter higher classes confused and uncertain. The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps uncover a child's natural strengths, interests, and learning style early, so parents and students gain clarity before critical subject and stream choices arrive.<br/>This ensures child moves ahead with confidence, focus, and a clear roadmap for success.",
  },
  "/vocational-training": {
    tag: "Vocational Training",
    title: "Vocational Trade Selector",
    subtitle: "for skill Development Courses selection",
    buttonText: "Book your 1-1 Counselling",
    description: [
      `The National Education Policy (NEP) 2020 strongly emphasises the integration of vocational training into school education, starting from Class 6 onwards. The aim is simple yet powerful: to ensure that students not only learn subjects but also develop practical skills that prepare them for real-world eers. However, in today's rapidly changing economy, vocational skills are becoming equally important in securing stable jobs, opening up entrepreneurial opportunities, and ensuring career flexibility. From Grades 6, students should receive pre-vocational exposure through hands-on experiences, such as "bag-free days" and internships with local artisans, encouraging exploration of various trades and crafts. To students, Vocational courses should be offered alongside academic subjects in secondary and senior secondary levels under the Samagra Shiksha scheme-aligned with the National Skill Qualification Framework (NSQF) to ensure quality and standardization. The SEWA scheme positions vocational training as an equally valued partner to academic learning, removing outdated hierarchies and learn hands-on applications that complement classroom knowledge and propare them for higher studies or carly work experience.`,
     
    ],
    featureDesc: "At Catalyst, we understand that choosing the right vocational domain can be confusing for both students and parents. Should a student explore IT, electronics, design, healthcare, agriculture, or creative arts? Will these skills support long-term career growth? This Is where our Scientific Psychometric Career Assessment (SPCAT) makes a difference. This ensures that vocational training is not random, but purpose-driven - aligned with a student's long-term career roadmap, as encouraged by the NEP. Through vocational assessments, counselling, and guidance, Catalyst helps students make informed choices that go hand-in-hand with their academics. Whether your child chooses to pursue higher studies, professional courses, or skill-based careers, vocational training backed by scientific guidance ensures they are future-ready, confident, and industry-relevant. Because the future belongs to those who combine knowledge with skills and Catalyst ensures your child has both.",

  },
};



const AssessmentTests = () => {
  const location = useLocation(); // get current path
  const path = location.pathname;
  const data = assessments[path];
  if (!data) return null;

  return (
    <div className="min-h-screen">
      {/* ✅ Subject selection only visible on /subject-selection */}

        <>
          {/* First Section - Hero */}
          <div className="min-h-screen relative overflow-hidden font-sans">
            {/* Sky + clouds */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-100 to-green-200">
              {/* Clouds with floating animation */}
              <div className="absolute top-20 left-20 w-24 h-16 bg-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-16 left-16 w-16 h-12 bg-white rounded-full opacity-60 animate-pulse delay-200"></div>
              <div className="absolute top-32 left-80 w-20 h-14 bg-white rounded-full opacity-70 animate-pulse delay-500"></div>
              <div className="absolute top-28 left-76 w-14 h-10 bg-white rounded-full opacity-50 animate-pulse delay-700"></div>
              <div className="absolute top-24 right-80 w-28 h-18 bg-white rounded-full opacity-75 animate-pulse delay-300"></div>
              <div className="absolute top-20 right-76 w-18 h-14 bg-white rounded-full opacity-55 animate-pulse delay-600"></div>
              <div className="absolute top-40 right-40 w-32 h-20 bg-white rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute top-36 right-36 w-20 h-16 bg-white rounded-full opacity-60 animate-pulse delay-400"></div>
              <div className="absolute top-28 right-20 w-24 h-16 bg-white rounded-full opacity-70 animate-pulse delay-800"></div>
              <div className="absolute top-24 right-16 w-16 h-12 bg-white rounded-full opacity-50 animate-pulse delay-1000"></div>
            </div>

            {/* Rolling hills */}
            <div className="absolute bottom-0 w-full">
              <svg
                className="absolute bottom-0 w-full h-48 animate-bounce-slow"
                viewBox="0 0 1200 200"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C200,60 400,140 600,80 C800,20 1000,120 1200,60 L1200,200 L0,200 Z"
                  fill="#8fbc8f"
                  opacity="0.6"
                />
              </svg>
              <svg
                className="absolute bottom-0 w-full h-40"
                viewBox="0 0 1200 160"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,80 C300,20 600,100 900,40 C1050,60 1150,20 1200,40 L1200,160 L0,160 Z"
                  fill="#6b8e23"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10  top-0 bottom-0  px-6 py-16">
              <div className="max-w-8xl flex justify-between items-center ">
                {/* Left side - Assessment card */}
                <div className="flex justify-center">
                  
                  <div className="bg-gradient-to-br from-amber-400 via-red-500 to-pink-500 rounded-3xl p-5 text-white text-center shadow-2xl max-w-sm w-full transform hover:scale-105 hover:rotate-1 transition-transform duration-500 h-auto">
                    <div className="mb-2">
                      <div className="text-sm font-medium bg-green-500/90 rounded-full px-5 py-2 inline-block mb-2 shadow-md">
                        {data.tag}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 drop-shadow-md">
                      {data.title}
                    </h2>
                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                      {data.subtitle}
                    </p>
                    <button className="bg-white text-green-700 hover:bg-blue-100 font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                      {data.buttonText}
                    </button>
                  </div>


              
                 
                 
                 
                  
                  
                </div>

                {/* Right side - Content */}
                <div className=" rounded-3xl p-4 shadow-2xl hover:shadow-3xl transition-shadow duration-500 max-w-5xl  ">
                  <div className="mb-8">
                    <div className="mb-8">
                    {data.description.map((para, i) => (
                    <p key={i} className="text-black text-lg leading-relaxed mb-6">
                      {para}
                    </p>
                    ))}
                  
                  </div>
                   
                  </div>
                    
                    
                  <div className="text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                     {data.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>
            {`
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(8px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 6s infinite ease-in-out;
  }
`}
          </style>


          {/* Second Section - Why Take This Test */}
          <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Take This Test?</h2>
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                 {data.featureDesc}
                </p>
               
                <div className="mt-12">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                    Start Your Assessment
                  </button>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center">Personalised Career Guidance</h3>
                  <p className="text-orange-100 text-center">Our expert counsellors evaluate each student's personality, interests, skills, and values to provide tailored advice, ensuring career choices align perfectly with their unique strengths and future aspirations.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6 text-center">Strategic Career Planning</h3>
                  <p className="text-orange-100 text-center">From selecting the right college major to navigating career transitions or overcoming job dissatisfaction, our counsellors offer structured guidance and actionable strategies at every stage of the career journey</p>
                </div>
              </div>

              {/* Additional CTA */}
              <div className="text-center mt-16">
                <div className="bg-white rounded-2xl p-8 shadow-xl max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Discover Your Path?</h3>
                  <p className="text-gray-600 mb-6">Take the first step towards a confident future.</p>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                    Begin Assessment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
         
        </>
  
  


    
    </div>
  );
};

export default AssessmentTests;
