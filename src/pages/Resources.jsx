import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  MessageCircle, 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  Lightbulb,
  Target,
  GraduationCap
} from 'lucide-react';

const Resources = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Career at 16",
      excerpt: "Making career decisions at 16 can be overwhelming. Learn the step-by-step approach to identify your strengths and interests.",
      author: "Catalyst Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Career Guidance",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "NEP Explained for Parents",
      excerpt: "Understanding the National Education Policy and how it affects your child's education and career choices.",
      author: "Catalyst Team",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Education Policy",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Science vs Commerce: Which Stream is Right for You?",
      excerpt: "A comprehensive comparison of Science and Commerce streams to help you make an informed decision.",
      author: "Catalyst Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Stream Selection",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Top 10 Emerging Careers in 2024",
      excerpt: "Discover the most promising career paths that are gaining momentum in the current job market.",
      author: "Catalyst Team",
      date: "2024-01-01",
      readTime: "7 min read",
      category: "Career Trends",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Building a Strong College Application",
      excerpt: "Essential tips and strategies to create a compelling college application that stands out.",
      author: "Catalyst Team",
      date: "2023-12-28",
      readTime: "9 min read",
      category: "College Prep",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Understanding Psychometric Assessments",
      excerpt: "Learn how scientific assessments can help you discover your true potential and career fit.",
      author: "Catalyst Team",
      date: "2023-12-25",
      readTime: "4 min read",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "What is the SPCAT test and how does it work?",
      answer: "The Scientific Psychometric Career Assessment Test (SPCAT) is our flagship assessment tool designed to evaluate your personality, interests, skills, and aptitudes. It uses scientifically validated methods to provide personalized career recommendations based on your unique profile."
    },
    {
      question: "How long does the assessment take to complete?",
      answer: "The SPCAT test typically takes 45-60 minutes to complete. It's designed to be comprehensive yet efficient, ensuring accurate results without being overwhelming."
    },
    {
      question: "Can I take the assessment online?",
      answer: "Yes! You can take the SPCAT test online from anywhere, or visit our partner centers for an in-person assessment. Both options provide the same high-quality results."
    },
    {
      question: "What age groups do you serve?",
      answer: "We serve students from Class 6 to college level, as well as graduates and career switchers. Our assessments are tailored to different age groups and educational levels."
    },
    {
      question: "How accurate are the career recommendations?",
      answer: "Our assessments have a 95% accuracy rate and are backed by years of research and validation. We combine scientific methodology with expert interpretation to provide reliable career guidance."
    },
    {
      question: "Do you provide follow-up counseling?",
      answer: "Yes, we offer 1-on-1 counseling sessions after the assessment to help you understand your results and create a personalized career action plan."
    },
    {
      question: "What if I'm confused between multiple career options?",
      answer: "This is very common! Our detailed assessment report provides multiple career clusters ranked by fitment, and our counselors help you narrow down the best options based on your goals and circumstances."
    },
    {
      question: "How much does the assessment cost?",
      answer: "Our pricing varies based on the package you choose. We offer different levels of assessment and counseling services. Contact us for detailed pricing information."
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Career Guidance", count: 2 },
    { name: "Education Policy", count: 1 },
    { name: "Stream Selection", count: 1 },
    { name: "Career Trends", count: 1 },
    { name: "College Prep", count: 1 },
    { name: "Assessment", count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Resources & Insights
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Blogs &{" "}
              <span className="text-amber-600">Articles</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay informed with the latest on education trends, career advice, and exam strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Expert insights and practical advice for your career journey
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
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="h-4 w-4 mr-2" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to common questions about our services
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-amber-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-amber-600" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* AI Chat Bot CTA */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Need More Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our AI assistant for instant answers to your questions
              </p>
              <Link
                to="/chat"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
              >
                Start Chat
                <MessageCircle className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              More tools and guides to support your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Guides</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive guides for different career paths and industries
              </p>
              <Link
                to="/career-guides"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Explore Guides
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Study Materials</h3>
              <p className="text-gray-600 mb-6">
                Free study resources and practice materials for various exams
              </p>
              <Link
                to="/study-materials"
                className="inline-flex items-center text-green-600 font-medium hover:text-green-700"
              >
                Access Materials
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Inspiring stories from students who found their career path
              </p>
              <Link
                to="/success-stories"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
              >
                Read Stories
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Start your career assessment and get personalized guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Take Assessment
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

export default Resources;
