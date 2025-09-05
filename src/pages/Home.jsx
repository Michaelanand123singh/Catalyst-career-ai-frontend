import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, BookOpen, Calendar, Clock, User,Briefcase,Cpu,MessageCircle,Wrench, Bot, Search, Star, TrendingUp, Award,   } from 'lucide-react';
import api from '../services/api';
import SchoolStudents from '../components/SchoolStudents'
import CollegeStudents from '../components/CollegeStudents'
import WorkingProfessinal from '../components/WorkingProfessinal'
import ProblemSolutionGrid from '../components/ProblemSolutionGrid'
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
 
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20 min-h-screen">
        <div className="max-w-[90vw] mx-auto px-4 sm:px-6">
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
      <SchoolStudents/>
        {/* Academic Problem-Solution Grid  for college*/}
      <CollegeStudents/>
        {/* AI-based Problem-Solution Grid for working professional*/}
      <WorkingProfessinal/>
        {/* Problem-Solution Grid */}
      <ProblemSolutionGrid/>
      {/* How Catalyst Works */}
      <section className="py-16 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#20433C] mb-4">
                Catalyst works on "3A" workframe
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to unlock your career potential
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    1-on-1 academic & career counselling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Proven success stories
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Personalized, Scientific Career Assessment
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Hands-On Practical Learning Approach
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Expert Support from Experienced Educators
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Experienced mentors & renowned speakers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Empowering Students, Parents, and Teachers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    NEP-aligned guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Blogs */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Blog Posts
            </h2>
            <p className="text-xl text-gray-600">Stay updated with the latest career insights and guidance</p>
          </div>

          {loadingBlogs ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
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
                            className="px-2 py-1 bg-green-200 text-green-700 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${blog._id}`}
                        className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm"
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              View All Posts
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};
export default Home;