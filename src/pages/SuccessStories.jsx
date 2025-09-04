import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award,
  CheckCircle
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
    // ... other stories (same as your original array)
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#20433C]/20 via-white to-[#20433C]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-[#20433C]/80 text-green-200 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#20433C] leading-tight mb-6">
              Real{" "}
              <span className="text-green-300">Success Stories</span>
            </h1>
            <p className="text-xl text-[#20433C]/80 mb-8 leading-relaxed">
              Inspiring stories from students and parents who transformed their careers with Catalyst
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-[#20433C] text-green-200'
                    : 'bg-white text-[#20433C] hover:bg-[#20433C]/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Stories Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-[#20433C]/20">
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
                        <h3 className="text-xl font-semibold text-[#20433C]">{story.name}</h3>
                        <p className="text-[#20433C]/70">{story.role}</p>
                        <div className="flex items-center text-sm text-[#20433C]/60 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-green-300 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#20433C]/10 text-[#20433C] text-sm font-medium rounded-full">
                      {story.category}
                    </span>
                  </div>

                  {/* Story */}
                  <div className="mb-6">
                    <div className="flex items-start mb-4">
                      <Quote className="h-6 w-6 text-green-300 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-[#20433C]/90 italic leading-relaxed">
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
                  <div className="bg-[#20433C]/10 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-[#20433C] mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                      Achievement
                    </h4>
                    <p className="text-[#20433C]/90 font-medium">{story.achievement}</p>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-green-300 pl-4">
                    <p className="text-[#20433C]/90 font-medium">"{story.testimonial}"</p>
                    <p className="text-[#20433C]/60 text-sm mt-2">- {story.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#20433C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-200 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Join thousands of students who have discovered their true potential with Catalyst
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-200 text-[#20433C] font-semibold rounded-lg hover:bg-green-300 transition-colors shadow-lg"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200 text-green-200 font-semibold rounded-lg hover:bg-green-200 hover:text-[#20433C] transition-colors"
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
