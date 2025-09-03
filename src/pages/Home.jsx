import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, BookOpen, Calendar, Clock, User,Briefcase,Cpu,MessageCircle,Wrench, Bot, Search, Star, TrendingUp, Award,   } from 'lucide-react';
import api from '../services/api';

const Home = () => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        console.log('🔍 Fetching recent blog posts...');
        const [data, error] = await api.getBlogPosts();

        if (error) {
          console.error('❌ Failed to fetch recent blogs:', error);
          // Don't show error on home page, just silently fail
          setRecentBlogs([]);
        } else {
          console.log('✅ Recent blogs fetched successfully:', data);
          // Limit to 3 posts for the home page
          setRecentBlogs((data || []).slice(0, 3));
        }
      } catch (error) {
        console.error('❌ Error fetching recent blogs:', error);
        // Don't show error on home page, just silently fail
        setRecentBlogs([]);
      } finally {
        setLoadingBlogs(false);
      }
    };

    fetchRecentBlogs();
  }, []);
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student, Class 12",
      content: "Catalyst helped me discover my passion for psychology. The assessment was incredibly accurate!",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "Parent",
      content: "As a parent, I was worried about my son's career choice. Catalyst provided clear guidance and peace of mind.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anjali Patel",
      role: "College Student",
      content: "The personalized career roadmap helped me choose the right subjects and now I'm confident about my future.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];
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
  const [hoveredCard, setHoveredCard] = useState(null);
  const services = [
    {
      id: 'subject-selection',
      title: 'Subject Selection',
      description: 'Which subject is best for me?',
      subtitle: 'For Class X students',
      gradient: 'from-rose-400 to-pink-600',
      bgGradient: 'from-rose-50 to-rose-100',
      icon: BookOpen,
      buttonText: 'Start Your Assessment',
      features: ['Aptitude Analysis', 'Interest Mapping', 'Future Scope'],
      popularity: '95%'
    },
    {
      id: 'career-selection',
      title: 'Career Selection',
      description: 'Which career is best for me?',
      subtitle: 'For school students',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      icon: Briefcase,
      buttonText: 'Start Your Assessment',
      features: ['Personality Test', 'Skills Assessment', 'Market Trends'],
      popularity: '92%'
    },
    {
      id: 'engineering-branch',
      title: 'Engineering Branch',
      description: 'Which branch of Engineering suits me?',
      subtitle: 'For engineering aspirants',
      gradient: 'from-green-400 to-emerald-600',
      bgGradient: 'from-green-50 to-green-100',
      icon: Cpu,
      buttonText: 'Start Your Assessment',
      features: ['Technical Aptitude', 'Industry Insights', 'Placement Stats'],
      popularity: '88%'
    },
    {
      id: 'career-cluster',
      title: 'Career Cluster',
      description: 'Identify the best career cluster',
      subtitle: 'For Class 7th / 8th / 9th',
      gradient: 'from-purple-400 to-violet-600',
      bgGradient: 'from-purple-50 to-purple-100',
      icon: Target,
      buttonText: 'Start Your Assessment',
      features: ['Early Guidance', 'Broad Categories', 'Foundation Building'],
      popularity: '90%'
    },
    {
      id: 'counselling',
      title: '1-1 Counselling',
      description: 'Discuss directly with experts',
      subtitle: 'Quick career guidance',
      gradient: 'from-pink-400 to-rose-600',
      bgGradient: 'from-pink-50 to-pink-100',
      icon: MessageCircle,
      buttonText: 'Book Counselling',
      features: ['Expert Guidance', 'Personalized Advice', 'Instant Clarity'],
      popularity: '97%'
    },
    {
      id: 'vocational-training',
      title: 'Vocational Training',
      description: 'Select your vocational trade',
      subtitle: 'For skill development',
      gradient: 'from-cyan-400 to-teal-600',
      bgGradient: 'from-cyan-50 to-cyan-100',
      icon: Wrench,
      buttonText: 'Explore Trades',
      features: ['Hands-on Skills', 'Industry Ready', 'Quick Employment'],
      popularity: '85%'
    },
    {
      id: 'ai-career-assistant',
      title: 'AI Career Assistant',
      description: 'Looking for Personal Career assistant?',
      subtitle: 'Ask anything & anytime to scale-up your career',
      gradient: 'from-indigo-400 to-purple-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      icon: Bot,
      buttonText: 'Chat Now',
      features: ['24/7 Available', 'Instant Responses', 'Personalized AI'],
      popularity: '94%',
      badge: 'NEW'
    },
    {
      id: 'ai-job-assistant',
      title: 'AI Job Assistant',
      description: 'So many hiring websites, so many confusing job descriptions?',
      subtitle: 'Find the best opportunities in market currently available as per your resume',
      gradient: 'from-amber-400 to-orange-600',
      bgGradient: 'from-amber-50 to-amber-100',
      icon: Search,
      buttonText: 'Search Now',
      features: ['Resume Matching', 'Market Analysis', 'Real-time Jobs'],
      popularity: '89%',
      badge: 'HOT'
    }
  ];
  const cards = [
    {
      id: 1,
      category: "Subject Selection",
      title: "Which subject is best for me?",
      description: "for school students currently studying in Class 8th",
      buttonText: "Start Your Assessment"
    },
    {
      id: 2,
      category: "Subject Selection",
      title: "Which subject is best for me?",
      description: "for school students currently studying in Class 9th/10th",
      buttonText: "Start Your Assessment"
    },
    {
      id: 3,
      category: "Subject Selection",
      title: "Which subject is best for me?",
      description: "for school students currently studying in Class 11th/12th",
      buttonText: "Start Your Assessment"
    },
    {
      id: 4,
      category: "Career Selection",
      title: "Which career is best for me?",
      description: "for students wants to or pursue Diploma/IT",
      buttonText: "Start Your Assessment"
    },

    {
      id: 5,
      category: "Vocational Training",
      title: "Vocational Trade Selector",
      description: "For Skill Development Courses selection",
      buttonText: "Book Your 1-1 Counselling"
    }
  ];
  const cards2 = [
    {
      id: 1,
      category: "Bachelors Degree Selection",
      title: "Which Graduation Degree/Career is best for me?",
      description: "for school students",
      buttonText: "Start Your Assessment"
    },
    {
      id: 2,
      category: "Engineering Branch Selection",
      title: "Which branch of Engineering is best for me?",
      description: "for engineering education aspirants ",
      buttonText: "Start Your Assessment"
    },
    {
      id: 3,
      category: "Masters Degree Selection",
      title: "Which Post Graduation Degree/Career  is best for me?",
      description: "for graduate students ",
      buttonText: "Start Your Assessment"
    },
    {
      id: 4,
      category: "Creer Cluster Analysis",
      title: "Identify the best Career Cluster",
      description: "Identify the best Career",
      buttonText: "Start Your Assessment"
    },

    
  ];
  const cards1 = [
    {
      id: 1,
      category: "AI Career Assistant",
      title: "Looking for Personal Career assiatnt?",
      description: "ask anything & anytime to scale-up your career",
      buttonText: "Chat Now"
    },
    {
      id: 2,
      category: "AI Job Search",
      title: "So many hiring websites, so many confusing job descriptions?",
      description: "find the best opportunities in market currently available as per your resume",
      buttonText: "Search Now"
    },
 
  ];
  const cards3 = [
    {
      id: 1,
      category: "Career Progression in Corporate",
      title: "Just joined a Job in the previous 12 months",
      description: "for working professionals",
      buttonText: "Chat Now"
    },
    {
      id: 2,
      category: "Change Job Profile",
      title: "Which type of Job is best for me? ",
      description: "for best fitment job role in the specific industry",
      buttonText: "Search Now"
    },
 
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20 min-h-screen">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 ">
          <div className="flex  gap-12 items-center">
            <div className="space-y-8 w-1/2">
              <div className="space-y-4 p-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Career, Your Future – Let's Find the Perfect Path Together
                </h1>
                <p className="text-2xl text-gray-700">
                  Personalised career guidance backed by scientific psychometric career assessment tests & expert counselling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="relative w-1/2 mx-auto flex flex-col items-center justify-center">
              {/* Heading */}
              <p className="text-xl md:text-2xl pb-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-pink-600 to-amber-500 ">
                Scientific Psychometric Career Assessment Test for School , College Students and for Working Professionals
              </p>
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105 max-w-[900px] ">
                <div className="bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl p-6 shadow-inner ">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 p-4 gap-6">
                    <h3 className="font-semibold text-gray-900 text-lg">Career Assessment Results</h3>
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                      <span className="text-xs text-gray-500">Live</span>
                    </div>
                  </div>
                  {/* Skills Section */}
                  <div className="space-y-4">
                    {/* Analytical Skills */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Analytical Skills</span>
                        <span className="text-sm text-amber-600 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-amber-500 h-2 rounded-full animate-[progress_2s_ease-in-out_forwards]" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    {/* Creative Thinking */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Creative Thinking</span>
                        <span className="text-sm text-blue-600 font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-2 rounded-full animate-[progress_2.5s_ease-in-out_forwards]" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    {/* Leadership */}
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Leadership</span>
                        <span className="text-sm text-green-600 font-semibold">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-green-500 h-2 rounded-full animate-[progress_3s_ease-in-out_forwards]" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Academic Problem-Solution Grid  for schools*/}
      <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Academic Career Problem-Solution Gird for School Students
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Identify the Best Subject, and career that align with you
              </p>
              
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 px-4">
              {cards.map((card) => (
                <div key={card.id} className="flex flex-col items-center max-w-[250px]">
                  {/* Category Tag */}
                  <div className="mb-4 content-center w-full text-center">
                    <span className="inline-block bg-[#20433C] text-amber-300 px-4 py-2 rounded-full text-sm font-medium w-full">
                      {card.category}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-[#20433C] text-white rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] text-center items-end">
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-amber-300 text-sm mb-6 text-center ">
                        {card.description}
                      </p>
                  </div>
                    <button className="bg-[#20433C] hover:bg-[#346256] text-white font-semibold p-3 rounded-full transition-colors duration-200 mt-5 w-full">
                      {card.buttonText}
                    </button>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-gray-600 text-lg">
                Get matched with Careers that offer long-term stability and growth through our Advanced Psychometric Assessment
              </p>
            </div>
          </div>
        </div>
        {/* Academic Problem-Solution Grid  for college*/}
      <div className="min-h-screen bg-white p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 ">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Academic Career Problem-Solution Gird for College Students
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Identify the Best Subject, and career that align with you
              </p>
              
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 px-4">
              {cards2.map((card) => (
                <div key={card.id} className="flex flex-col items-center ">
                  {/* Category Tag */}
                  <div className="mb-4 content-center w-full text-center">
                    <span className="inline-block bg-[#20433C] text-amber-300 px-4 py-2 rounded-full text-sm font-medium w-full">
                      {card.category}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-[#20433C] text-white rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] text-center ">
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-amber-300 text-sm mb-6 text-center ">
                        {card.description}
                      </p>
                  </div>
                    <button className="bg-[#20433C] hover:bg-[#346256] text-white font-semibold p-3 rounded-full transition-colors duration-200 mt-5 w-full">
                      {card.buttonText}
                    </button>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-gray-600 text-lg">
                Get matched with Careers that offer long-term stability and growth through our Advanced Psychometric Assessment
              </p>
            </div>
          </div>
        </div>
        {/* AI-based Problem-Solution Grid */}
      <div className="min-h-screen bg-white p-8">
          <div className="max-w-8xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Professional Career Scale Problem-Solution Gird</h1>
   
              <p className="text-sm text-gray-600 mb-2">
    Identify the best career that align with you 
              </p>
              
            </div>

            {/* Cards Grid */}
            <div className="flex justify-center items-center gap-6">
              {cards3.map((card) => (
                <div key={card.id} className="flex flex-col items-center max-w-[250px]">
                  {/* Category Tag */}
                  <div className="mb-4 content-center w-full text-center">
                    <span className="inline-block bg-[#20433C] text-amber-300 px-4 py-2 rounded-full text-sm font-medium w-full">
                      {card.category}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-[#20433C] text-white rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] text-center ">
                  
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-amber-300 text-sm mb-6 text-center">
                        {card.description}
                      </p>
                    
                    
                  </div>
                    <button className="bg-[#20433C] hover:bg-[#346256] text-amber-300 font-semibold p-3 rounded-full transition-colors duration-200 mt-5 w-full">
                      {card.buttonText}
                    </button>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-gray-600 text-lg mt-20">
          Get matched with Careers offering long-term stability and growth
              </p>
            </div>
          </div>
        </div>
        {/* Problem-Solution Grid */}
      <div className="min-h-screen bg-white p-8">
          <div className="max-w-8xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
    AI based Problem-Solution Gird         </h1>
    <p className=" text-gray-500 mb-2 text-2xl font-bold">
                Struggling to decide best opportunity for you?
              </p>
              <p className="text-sm text-gray-600 mb-2">
    Identify the best career that align with you 
              </p>
              
            </div>

            {/* Cards Grid */}
            <div className="flex justify-center items-center gap-6">
              {cards1.map((card) => (
                <div key={card.id} className="flex flex-col items-center max-w-[250px]">
                  {/* Category Tag */}
                  <div className="mb-4 content-center w-full text-center">
                    <span className="inline-block bg-[#20433C] text-amber-300 px-4 py-2 rounded-full text-sm font-medium w-full">
                      {card.category}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-[#20433C] text-white rounded-3xl p-6 flex-1 flex flex-col justify-between min-h-[250px] text-center items-end">
                  
                      <h3 className="text-xl font-bold mb-4 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-amber-300 text-sm mb-6 text-center">
                        {card.description}
                      </p>
                    
                    
                  </div>
                    <button className="bg-[#20433C] hover:bg-[#346256] text-amber-300 font-semibold p-3 rounded-full transition-colors duration-200 mt-5 w-full">
                      {card.buttonText}
                    </button>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-gray-600 text-lg mt-20">
          Get matched with Careers offering long-term stability and growth
              </p>
            </div>
          </div>
        </div>
      {/* How Catalyst Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#20433C] mb-4">
        Catalyst works on “3A” workframe
      </h2>
      <p className="text-xl text-gray-600">
        Three simple steps to unlock your career potential
      </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 ">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assess</h3>
              <p className="text-gray-600">Take our Scientific Psychometric Career Assessment Test.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analyse</h3>
              <p className="text-gray-600">Get personalised reports with clear guidance.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achieve</h3>
              <p className="text-gray-600">Follow your customised career roadmap.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">Comprehensive support for students, parents, teachers, and institutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#20433C] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    1-on-1 academic & career counselling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Proven success stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Personalized, Scientific Career Assessment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Hands-On Practical Learning Approach
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Expert Support from Experienced Educators
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Experienced mentors & renowned speakers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    Empowering Students, Parents, and Teachers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-[#20433C] mr-3" />
                    NEP-aligned guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Blogs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Blog Posts
            </h2>
            <p className="text-xl text-gray-600">Stay updated with the latest career insights and guidance</p>
          </div>

          {loadingBlogs ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
              <p className="mt-4 text-gray-600">Loading recent posts...</p>
            </div>
          ) : recentBlogs.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {recentBlogs.map((blog) => (
                <div key={blog._id} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  {blog.featured_image && (
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={blog.featured_image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {blog.author}
                      </div>
                      {blog.published_at && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(blog.published_at).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags && blog.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-amber-200 text-amber-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${blog._id}`}
                        className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium text-sm"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No blog posts available yet.</p>
            </div>
          )}

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
            >
              View All Posts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;