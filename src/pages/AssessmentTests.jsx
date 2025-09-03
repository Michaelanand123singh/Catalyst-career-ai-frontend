import React from 'react';
import { useLocation } from "react-router-dom";
import { Star } from 'lucide-react';
import bigb from "../images/bigb.png"

const assessments = {
  "/subject-selection": {
    tag: "Subject Selection",
    title: "Which subject is best for me?",
    subtitle: "for school students currently studying in class Xth",
    buttonText: "Start Your Assessment",
    
    description: [
      "For students in Classes 9 and 10, choosing the right subjects for higher studies is the most crucial turning point in their academic journey. As highlighted in the National Education Policy (NEP), subject choices should reflect a student's Aptitude, Personality and Interest, and —not just peer pressure or guesswork.",
      "Unfortunately, many students make this vital decision in confusion, often leading to mismatched career paths and frustration later in life. To address this, Catalyst's Scientific Psychometric Career Assessment (SPCAT) provides a clear, research-backed roadmap to help students and parents take the right decision at the right time.",
      "By identifying natural strengths and aligning them with suitable subject options, SPCAT ensures that when a student enters Class XI, they are confident, focused, and future-ready.",
    ],
    featureDesc: "Choosing the right subjects after Class 10 is one of the most important decisions in a student's life - yet most make it in confusion or under pressure. The Catalyst Scientific Psychometric Career Assessment (SPCAT) removes this guesswork. Helps students discover their true strengths and interests, aligns subject choices with NEP guidelines for future flexibility, prevents wrong turns in career planning, gives parents clarity and confidence in their child's decisions<br/>With one test, students gain a clear roadmap for Class XI subject selection and beyond ensuring every step ahead is confident, purposeful, and future-ready.",
    
    
  },
  "/career-selection": {
    tag: "Career Selection",
    title: "Which Career is best for me?",
    subtitle: "for school students",
    buttonText: "Start Your Assessment",
    description: [
      `Choosing the right career is no longer about guesswork or pressure from relatives asking, "Beta, what after 10th or 12th?" Under India's National Education Policy (NEP), students now have the flexibility to select subjects and streams that truly match their Interests and strengths. Yet, with so many options available, confusion is natural.`,
      " That's where Catalyst comes in. Our Scientific Psychometric Career Assessment Test (SPCAT) helps school students identify their aptitudes, interests, and personality traits, and align them with the right subjects, streams, and career pathways. Whether you are in Class 8, 10, or 12, this assessment gives you clarity and confidence in your career decisions ensuring that your passion and abilities go hand in hand with future opportunities.",
      "With Catalyst, career planning becomes a scientific, personalised, and future-ready journey, just as the NEP envisions.",
    ],
    featureDesc: "Because guessing your future is risky. The Catalyst Scientific Psychometric Career Assessment Test (SPCAT) gives students and parents clear, scientific guidance on which subjects, streams, and careers truly fit a child's strengths, interests, and personality. Instead of confusion or pressure, you get clarity, confidence, and a roadmap aligned with India's National Education Policy (NEP) -ensuring your child's choices today lead to a successful tomorrow.",
  },
  "/eng-branch-selection": {
    tag: "Engineering Branch Selection",
    title: "Which branch of Engineering is best for me?",
    subtitle: "for engineering education aspirants",
    buttonText: "Start Your Assessment",
    description: [
      `For many students in Class XI, XII, or beyond, the dream of becoming an engineer is clear-but the question that creates the most confusion is "Which branch of engineering should I choose?" With options ranging from Computer Science, Mechanical, Civil, Electrical, Electronics, Chemical, to newer fields like Al, Data Science, and Robotics, students often find themselves overwhelmed. Too often, this crucial decision is made based on peer pressure, trends, or Incomplete advice, rather than a true understanding of one's abilities and interests. Unfortunately, such choices can lead to frustration, academic struggle, or even a complete change of direction after valuable years have already been invested.`,
      "Ultimately, the Engineering Stream Fitment Assessment helps students make informed decisions that lead to academic success, career stability, and future growth in the ever-evolving world of engineering..",
    ],
    featureDesc: "Choosing the right branch of engineering can shape a student's entire future. With so many options - Computer Science, Mechanical, Civil, Electronics, and more most students decide under pressure, without truly knowing what fits them best. The Catalyst Scientific Psychometric Career Assessment (SPCAT) removes this confusion by matching a student's aptitude, interests, and personality with the engineering stream where they will thrive.<br/>For parents, it ensures that your child's choice is backed by science, not guesswork. For students, it provides the clarity and confidence needed to begin their engineering journey in the right direction",
  },
  "/career-cluster-selection": {
    tag: "Career Cluster Analysis",
    title: "Identify the best Career Cluster",
    subtitle: "for school students currently studying in class 7th/8th/9th",
    buttonText: "Start Your Assessment",
    description: [
      "The National Education Policy (NEP) encourages flexibility and exploration-but the real challenge is identifying where a child's true strengths lie. At this age, most students are still unaware of their natural abilities, and subject choices are often made without proper guidance. This early stage is critical, because understanding a student's aptitude, interests, and personality can lay the Foundation for confident decisions in higher classes.",
      "The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps parents and students uncover these strengths early, offering clear insights into the subjects and skills where a child will thrive.",
    ],
    featureDesc: "Students are still exploring who they are and what they enjoy yet these years form the foundation for all future learning. Without the right direction, children may enter higher classes confused and uncertain. The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps uncover a child's natural strengths, interests, and learning style early, so parents and students gain clarity before critical subject and stream choices arrive.<br/>This ensures child moves ahead with confidence, focus, and a clear roadmap for success.",
  },
  "/couseling-one": {
    tag: "1-1 Counselling Session",
    title: "1-1 Counselling Session",
    subtitle: "Meet our experts for Quick discussion of your career related dilemma",
    buttonText: "Book Your 1-1 Counselling",
    description: [
      "Every student, at some point in school, faces a moment of uncertainty Which subject should I choose? Which stream is best for me? Will my passion translate into a stable career? Under the National Education Policy (NEP), students now enjoy greater flexibility to explore subjects and career pathways. While this flexibility is empowering, it also brings along a new challenge: making informed choices at the right time.",
      "This is where Catalyst steps in. Our of experienced counsellors understands the dilemmas faced by both students and parents. Through a quick yet meaningful one-on-one discussion, our experts help you cut through the confusion and focus on what matters most-your child's strengths, interests, aptitude, and long-term career goals. Instead of relying on guesswork or peer pressure, you receive personalised, scientific, and practical advice to guide every next step.",
      "At Catalyst, we believe that one right conversation, at the right time, can change the course of a student's career journey. Our mission is to make sure that every child takes decisions based not on fear or confusion, but on scientific guidance, self-awareness, and future readiness"
    ],
    featureDesc: "Students are still exploring who they are and what they enjoy yet these years form the foundation for all future learning. Without the right direction, children may enter higher classes confused and uncertain. The Catalyst Scientific Psychometric Career Assessment (SPCAT) helps uncover a child's natural strengths, interests, and learning style early, so parents and students gain clarity before critical subject and stream choices arrive.<br/>This ensures child moves ahead with confidence, focus, and a clear roadmap for success.",
  },
  "/vocational-training": {
    tag: "Vocational Training",
    title: "Vocational Trade Selector",
    subtitle: "for skill Development Courses selection",
    buttonText: "Book your 1-1 Counselling",
    description: [
      `The National Education Policy (NEP) 2020 strongly emphasises the integration of vocational training into school education, starting from Class 6 onwards. The aim is simple yet powerful: to ensure that students not only learn subjects but also develop practical skills that prepare them for real-world eers. However, in today's rapidly changing economy, vocational skills are becoming equally important in securing stable jobs, opening up entrepreneurial opportunities, and ensuring career flexibility. From Grades 6, students should receive pre-vocational exposure through hands-on experiences, such as "bag-free days" and internships with local artisans, encouraging exploration of various trades and crafts. To students, Vocational courses should be offered alongside academic subjects in secondary and senior secondary levels under the Samagra Shiksha scheme-aligned with the National Skill Qualification Framework (NSQF) to ensure quality and standardization. The SEWA scheme positions vocational training as an equally valued partner to academic learning, removing outdated hierarchies and learn hands-on applications that complement classroom knowledge and propare them for higher studies or carly work experience.`,
     
    ],
    featureDesc: "At Catalyst, we understand that choosing the right vocational domain can be confusing for both students and parents. Should a student explore IT, electronics, design, healthcare, agriculture, or creative arts? Will these skills support long-term career growth? This Is where our Scientific Psychometric Career Assessment (SPCAT) makes a difference. This ensures that vocational training is not random, but purpose-driven - aligned with a student's long-term career roadmap, as encouraged by the NEP. Through vocational assessments, counselling, and guidance, Catalyst helps students make informed choices that go hand-in-hand with their academics. Whether your child chooses to pursue higher studies, professional courses, or skill-based careers, vocational training backed by scientific guidance ensures they are future-ready, confident, and industry-relevant. Because the future belongs to those who combine knowledge with skills and Catalyst ensures your child has both.",

  },
};


const AssessmentTests = () => {
  const location = useLocation(); // get current path
  const path = location.pathname;
  const data = assessments[path];
  if (!data) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={bigb} alt="" className='h-full w-full object-cover opacity-10' />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 py-12 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
            
            {/* Left side - Assessment card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="max-w-sm w-full">
                {/* Category Tag */}
                <div className="mb-6">
                  <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg w-full text-center">
                    {data.tag}
                  </span>
                </div>
                
                {/* Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold mb-6 leading-tight text-center">
                    {data.title}
                  </h3>
                  <p className="text-white/90 text-base mb-8 text-center leading-relaxed">
                    {data.subtitle}
                  </p>
                </div>
                
                <button className="w-full mt-6 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white font-semibold py-4 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                  {data.buttonText}
                </button>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:col-span-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-2xl border border-emerald-100">
                <div className="space-y-8">
                  {data.description.map((para, i) => (
                    <p key={i} className="text-gray-700 text-lg leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="text-center mt-10">
                  <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                    {data.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Take This Test Section */}
      <div className="bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Take This Test?</h2>
            <div className="max-w-5xl mx-auto">
              <p 
                className="text-xl text-gray-700 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: data.featureDesc }}
              />
            </div>
            
            <div className="mt-12">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                Start Your Assessment
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Personalised Career Guidance</h3>
              <p className="text-emerald-100 text-center leading-relaxed">
                Our expert counsellors evaluate each student's personality, interests, skills, and values to provide tailored advice, ensuring career choices align perfectly with their unique strengths and future aspirations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">Strategic Career Planning</h3>
              <p className="text-teal-100 text-center leading-relaxed">
                From selecting the right college major to navigating career transitions or overcoming job dissatisfaction, our counsellors offer structured guidance and actionable strategies at every stage of the career journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentTests;