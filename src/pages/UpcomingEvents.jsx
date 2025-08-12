import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-8">
            <svg className="h-12 w-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 mb-8">Stay updated with the latest career development events</p>
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-amber-500 mb-4">Coming Soon</div>
            <p className="text-lg text-gray-600">We're planning amazing events for you. Check back soon for the calendar!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
