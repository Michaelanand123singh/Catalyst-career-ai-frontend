import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Video,
  BookOpen,
  Target,
  Star,
  CheckCircle,
  ExternalLink,
  Filter
} from 'lucide-react';

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const events = [
    {
      id: 1,
      title: "Career Guidance Seminar for Class 10 Students",
      description: "Comprehensive session on stream selection and career planning for students transitioning to Class 11.",
      category: "Seminar",
      date: "2024-02-15",
      time: "10:00 AM - 12:00 PM",
      location: "Gandhidham Office",
      mode: "In-Person",
      capacity: 50,
      registered: 35,
      price: "Free",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      highlights: [
        "Stream selection guidance",
        "Career assessment overview",
        "Parent-student interaction",
        "Q&A session"
      ],
      speaker: "Mr. Haryug Singh",
      speakerRole: "Founder & Career Counselor"
    },
    {
      id: 2,
      title: "NEP Understanding Workshop for Parents",
      description: "Deep dive into the National Education Policy and its implications for your child's education.",
      category: "Workshop",
      date: "2024-02-20",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      mode: "Virtual",
      capacity: 100,
      registered: 78,
      price: "₹500",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
      highlights: [
        "NEP 2020 overview",
        "Impact on curriculum",
        "Career opportunities",
        "Interactive discussion"
      ],
      speaker: "Dr. Ajit Kumar",
      speakerRole: "Education Policy Expert"
    },
    {
      id: 3,
      title: "Webinar: Emerging Careers in 2024",
      description: "Discover the most promising career paths and job opportunities in the current market.",
      category: "Webinar",
      date: "2024-02-25",
      time: "7:00 PM - 8:30 PM",
      location: "Online",
      mode: "Virtual",
      capacity: 200,
      registered: 156,
      price: "Free",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      highlights: [
        "Top emerging careers",
        "Industry insights",
        "Skill requirements",
        "Career roadmap"
      ],
      speaker: "Ms. Priya Sharma",
      speakerRole: "Career Development Specialist"
    },
    {
      id: 4,
      title: "Science vs Commerce: Making the Right Choice",
      description: "Detailed comparison and guidance for students confused between Science and Commerce streams.",
      category: "Seminar",
      date: "2024-03-05",
      time: "11:00 AM - 1:00 PM",
      location: "Mumbai Center",
      mode: "In-Person",
      capacity: 40,
      registered: 28,
      price: "₹300",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      highlights: [
        "Stream comparison",
        "Subject analysis",
        "Career prospects",
        "Personal counseling"
      ],
      speaker: "Mr. Rajesh Kumar",
      speakerRole: "Senior Career Counselor"
    },
    {
      id: 5,
      title: "College Application Masterclass",
      description: "Step-by-step guide to creating compelling college applications that stand out.",
      category: "Workshop",
      date: "2024-03-10",
      time: "3:00 PM - 5:00 PM",
      location: "Delhi Center",
      mode: "In-Person",
      capacity: 30,
      registered: 22,
      price: "₹800",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400&h=250&fit=crop",
      highlights: [
        "Application strategies",
        "Essay writing tips",
        "Portfolio building",
        "Interview preparation"
      ],
      speaker: "Ms. Anjali Patel",
      speakerRole: "College Admissions Expert"
    },
    {
      id: 6,
      title: "Parent-Student Career Planning Session",
      description: "Interactive session designed for parents and students to plan careers together.",
      category: "Seminar",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "Ahmedabad Center",
      mode: "In-Person",
      capacity: 60,
      registered: 45,
      price: "₹400",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop",
      highlights: [
        "Family counseling",
        "Goal setting",
        "Financial planning",
        "Support strategies"
      ],
      speaker: "Dr. Meera Desai",
      speakerRole: "Family Counselor"
    }
  ];

  const categories = [
    { name: "All", count: events.length },
    { name: "Seminar", count: 3 },
    { name: "Workshop", count: 2 },
    { name: "Webinar", count: 1 }
  ];

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getRegistrationStatus = (registered, capacity) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return { status: "Almost Full", color: "text-red-600", bgColor: "bg-red-100" };
    if (percentage >= 70) return { status: "Filling Fast", color: "text-orange-600", bgColor: "bg-orange-100" };
    return { status: "Open", color: "text-green-600", bgColor: "bg-green-100" };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Events
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stay Updated on{" "}
              <span className="text-amber-600">Our Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our upcoming seminars, workshops, and webinars designed to guide your career journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors shadow-lg"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors">
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Event Categories
            </h2>
            <p className="text-xl text-gray-600">
              Different types of events to meet your learning needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Seminars</h3>
              <p className="text-gray-600 mb-4">Interactive sessions with expert speakers covering various career topics</p>
              <div className="text-sm text-amber-600 font-medium">In-Person & Virtual</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workshops</h3>
              <p className="text-gray-600 mb-4">Hands-on learning sessions with practical exercises and activities</p>
              <div className="text-sm text-blue-600 font-medium">Interactive Learning</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Webinars</h3>
              <p className="text-gray-600 mb-4">Online sessions accessible from anywhere with expert insights</p>
              <div className="text-sm text-green-600 font-medium">Virtual Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Register for events that match your interests and schedule
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

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => {
              const registrationStatus = getRegistrationStatus(event.registered, event.capacity);
              return (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 ${registrationStatus.bgColor} ${registrationStatus.color} text-xs font-medium rounded-full`}>
                        {registrationStatus.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location} ({event.mode})
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Speaker Info */}
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <Star className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{event.speaker}</p>
                          <p className="text-sm text-gray-600">{event.speakerRole}</p>
                        </div>
                      </div>
                    </div>

                    {/* Price and Registration */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-amber-600">
                        {event.price === "Free" ? "Free" : event.price}
                      </div>
                      <Link
                        to={`/events/${event.id}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                      >
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Attend Our Events?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Expert insights from industry professionals
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Interactive sessions with Q&A opportunities
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Networking with like-minded students and parents
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Practical tips and actionable advice
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-amber-500 mr-3" />
                    Access to exclusive resources and materials
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Event Statistics</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Events Conducted</span>
                        <span className="font-semibold text-amber-600">500+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Participants</span>
                        <span className="font-semibold text-green-600">10,000+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Satisfaction Rate</span>
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
            Ready to Join Our Events?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Register for upcoming events and take the first step towards your career success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/assessment-tests"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Take Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
