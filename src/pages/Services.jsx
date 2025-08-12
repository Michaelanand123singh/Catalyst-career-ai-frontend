import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  GraduationCap, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Star,
  School,
  Briefcase,
  Award,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const Services = () => {
  const spcatServices = [
    {
      title: "Classes 6-8",
      description: "Early career exploration and aptitude discovery",
      features: ["Personality assessment", "Interest mapping", "Learning style identification", "Future career awareness"]
    },
    {
      title: "Classes 9-12",
      description: "Stream selection and subject guidance",
      features: ["Science/Commerce/Humanities guidance", "Subject combination analysis", "Career cluster identification", "University preparation"]
    },
    {
      title: "Graduates & Career Switchers",
      description: "Advanced career planning and transition support",
      features: ["Career cluster analysis", "Skill gap assessment", "Industry fitment", "Long-term growth planning"]
    }
  ];

  const academicPrograms = [
    {
      title: "Orientation Programs",
      description: "Comprehensive guidance for classes 9, 10, 11, 12",
      icon: <School className="h-8 w-8" />
    },
    {
      title: "Academic Guidance Seminars",
      description: "Expert-led sessions on academic excellence",
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      title: "NEP Understanding",
      description: "Deep dive into National Education Policy implications",
      icon: <Globe className="h-8 w-8" />
    }
  ];

  const careerPrograms = [
    {
      title: "Career Guidance Seminars",
      description: "Interactive workshops on career planning",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "1-on-1 Counseling",
      description: "Personalized career counseling sessions",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Goal Achievement Strategies",
      description: "Strategic planning for professional success",
      icon: <Award className="h-8 w-8" />
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Register",
      description: "Create your account on our platform"
    },
    {
      step: "2",
      title: "Take SPCAT",
      description: "Complete the assessment online or at partner centres"
    },
    {
      step: "3",
      title: "Get Report",
      description: "Receive your personalized detailed report"
    },
    {
      step: "4",
      title: "Book Counseling",
      description: "Schedule your 1-on-1 counseling session"
    },
    {
      step: "5",
      title: "Action Plan",
      description: "Receive your tailored career action plan"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              What We Offer
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our{" "}
              <span className="text-amber-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Understand your strengths and career interests using our scientifically designed assessments 
              tailored for students from class 6 to college level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment-tests"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-lg"
              >
                Take SPCAT Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - SPCAT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Scientific Psychometric Career Assessment Test (SPCAT)
            </h2>
            <p className="text-xl text-gray-600">
              Our flagship assessment designed to unlock your true potential
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {spcatServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-700 text-center mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Building Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Academic Building Program
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive academic support and guidance programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Building Program */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Career Building Program
            </h2>
            <p className="text-xl text-gray-600">
              Strategic career development and professional growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careerPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-green-600">
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School & College Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  School & College Programs
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Custom programs for institutions to integrate career guidance and assessment into their curriculum, 
                  ensuring holistic student development.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Curriculum integration support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Teacher training programs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Student assessment programs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Parent orientation sessions
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    Get Institutional Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Institutional Benefits</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Student Success Rate</span>
                        <span className="font-semibold text-purple-600">95%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Parent Satisfaction</span>
                        <span className="font-semibold text-green-600">98%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Implementation Time</span>
                        <span className="font-semibold text-blue-600">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your Career Roadmap
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to unlock your career potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-amber-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-amber-200 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Discover Your Career Path?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of students who have found their calling with our comprehensive services
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

export default Services;