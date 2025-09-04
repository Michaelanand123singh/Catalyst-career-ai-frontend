import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Bell, Sparkles } from 'lucide-react';

const UpcomingEvents = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-20 overflow-hidden">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#20433C]/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-gradient-to-tl from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-green-300/15 to-emerald-400/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#20433C]/40 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-500/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#20433C] rounded-full animate-bounce delay-1200"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        
        {/* Header with Live Clock */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 text-sm text-emerald-600/70 mb-4 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-100">
            <Clock size={16} />
            <span className="font-mono">{formatTime(currentTime)}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#20433C] via-green-600 to-teal-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Upcoming Events
          </h1>
          
          <div className="flex items-center gap-2 text-emerald-600/80">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <Calendar className="text-emerald-500" size={24} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div 
          className={`
            relative group cursor-pointer transition-all duration-500 transform
            ${isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#20433C] to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl border border-emerald-100/50 rounded-2xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            
            {/* Sparkles Animation */}
            <div className="absolute top-4 right-4">
              <Sparkles className="text-emerald-400 animate-pulse" size={20} />
            </div>
            
            {/* Main Content */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl shadow-inner">
                  <Bell className="text-emerald-600 animate-swing" size={48} />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
                Something Amazing is Coming
              </h2>
              
              <p className="text-lg text-emerald-700/80 mb-8 leading-relaxed">
                We're preparing incredible events that will bring our community together. 
                Stay connected for exclusive announcements and early access!
              </p>
              
              {/* Feature Icons */}
              <div className="flex justify-center gap-8 mb-8 text-emerald-600/60">
                <div className="flex flex-col items-center gap-2">
                  <MapPin size={24} />
                  <span className="text-sm">Multiple Venues</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Users size={24} />
                  <span className="text-sm">Community Focused</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Calendar size={24} />
                  <span className="text-sm">Year-Round</span>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#20433C] to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Bell size={18} />
                    Notify Me
                    <div className="w-0 group-hover:w-2 h-2 bg-white/50 rounded-full transition-all duration-300"></div>
                  </span>
                </button>
                
                <div className="flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
                  <div className="w-2 h-2 bg-[#20433C] rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm">Stay Tuned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-12 flex items-center gap-4 opacity-50">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
          <div className="w-2 h-2 bg-[#20433C] rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-[#20433C]/30"></div>
          <div className="w-2 h-2 bg-[#20433C] rounded-full animate-pulse delay-500"></div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-400"></div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default UpcomingEvents;