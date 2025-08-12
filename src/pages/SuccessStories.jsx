import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award,
  Target,
  CheckCircle,
  Heart,
  Users,
  GraduationCap
} from 'lucide-react';

const SuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Class 12 Student",
      location: "Mumbai, Maharashtra",
      date: "2024",
      category: "Stream Selection",
      story: "Before Catalyst, I was lost between Science and Commerce. After the SPCAT test, I knew my strengths aligned with Architecture. Today, I'm studying at my dream college.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      achievement: "Admitted to School of Planning and Architecture",
      before: "Confused between Science and Commerce streams",
      after: "Clear career path in Architecture",
      testimonial: "Catalyst helped me discover my passion for psychology. The assessment was incredibly accurate!"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Parent",
      location: "Delhi, NCR",
      date: "2024",
      category: "Parent Guidance",
      story: "As a parent, I was worried about my son's career choice. Catalyst provided clear guidance and peace of mind. The counselors were patient and explained everything thoroughly.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      achievement: "Son successfully admitted to Engineering",
      before: "Uncertain about son's career direction",
      after: "Confident about educational choices",
      testimonial: "The personalized approach and detailed counseling sessions made all the difference."
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "College Student",
      location: "Ahmedabad, Gujarat",
      date: "2023",
      category: "Career Transition",
      story: "The personalized career roadmap helped me choose the right subjects and now I'm confident about my future. The step-by-step guidance was invaluable.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      achievement: "Successfully switched to Computer Science",
      before: "Studying unrelated subjects",
      after: "Pursuing passion in Computer Science",
      testimonial: "Catalyst's assessment revealed my true potential and guided me to the right career path."
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Class 10 Student",
      location: "Pune, Maharashtra",
      date: "2024",
      category: "Early Career Planning",
      story: "At just 15, I was confused about which stream to choose. Catalyst's early assessment helped me understand my strengths and choose Science with confidence.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      achievement: "Selected Science stream with clear goals",
      before: "Uncertain about stream selection",
      after: "Clear vision for future studies",
      testimonial: "The early intervention helped me make informed decisions about my education."
    },
    {
      id: 5,
      name: "Meera Desai",
      role: "Graduate",
      location: "Bangalore, Karnataka",
      date: "2023",
      category: "Career Switch",
      story: "After completing my degree, I was unsure about my career direction. Catalyst's assessment helped me identify my true calling in Digital Marketing.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      achievement: "Successfully transitioned to Digital Marketing",
      before: "Graduate with unclear career path",
      after: "Thriving in Digital Marketing role",
      testimonial: "The career transition guidance was exactly what I needed to find my passion."
    },
    {
      id: 6,
      name: "Arjun Reddy",
      role: "Class 11 Student",
      location: "Hyderabad, Telangana",
      date: "2024",
      category: "Subject Selection",
      story: "Choosing the right subjects in Class 11 was crucial. Catalyst's guidance helped me select the perfect combination that aligned with my career goals.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      achievement: "Optimal subject combination selected",
      before: "Confused about subject choices",
      after: "Clear academic path forward",
      testimonial: "The subject selection guidance was spot-on and helped me make the right choices."
    }
  ];

  const categories = [
    { name: "All", count: successStories.length },
    { name: "Stream Selection", count: 2 },
    { name: "Parent Guidance", count: 1 },
    { name: "Career Transition", count: 1 },
    { name: "Early Career Planning", count: 1 },
    { name: "Career Switch", count: 1 },
    { name: "Subject Selection", count: 1 }
  ];

  const filteredStories = selectedCategory === "All" 
    ? successStories 
    : successStories.filter(story => story.category === selectedCategory);

  const stats = [
    {
      number: "10,000+",
      label: "Students Helped",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <Target className="h-8 w-8" />
    },
    {
      number: "500+",
      label: "Success Stories",
      icon: <Award className="h-8 w-8" />
    },
    {
      number: "98%",
      label: "Parent Satisfaction",
      icon: <Heart className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Real{" "}
              <span className="text-amber-600">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Inspiring stories from students and parents who transformed their careers with Catalyst
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-amber-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real transformations from confusion to clarity
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <img
                        src={story.photo}
                        alt={story.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                        <p className="text-gray-600">{story.role}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                      {story.category}
                    </span>
                  </div>

                  {/* Story */}
                  <div className="mb-6">
                    <div className="flex items-start mb-4">
                      <Quote className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 italic leading-relaxed">
                        "{story.story}"
                      </p>
                    </div>
                  </div>

                  {/* Before & After */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Before
                      </h4>
                      <p className="text-red-600 text-sm">{story.before}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        After
                      </h4>
                      <p className="text-green-600 text-sm">{story.after}</p>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-amber-700 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Achievement
                    </h4>
                    <p className="text-amber-800 font-medium">{story.achievement}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-gray-700 font-medium">"{story.testimonial}"</p>
                    <p className="text-gray-500 text-sm mt-2">- {story.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Featured Success Story
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  From Confusion to Clarity: Priya's Journey
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "Before Catalyst, I was lost between Science and Commerce. After the SPCAT test, 
                  I knew my strengths aligned with Architecture. Today, I'm studying at my dream college."
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Admitted to School of Planning and Architecture
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Clear career path in Architecture
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Confident about future prospects
                  </div>
                </div>
                <Link
                  to="/assessment-tests"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Priya's Results</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Creative Skills</span>
                        <span className="font-semibold text-amber-600">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Spatial Awareness</span>
                        <span className="font-semibold text-green-600">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Career Fitment</span>
                        <span className="font-semibold text-blue-600">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of students who have discovered their true potential with Catalyst
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
