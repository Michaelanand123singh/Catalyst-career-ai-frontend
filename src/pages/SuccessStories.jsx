import React from 'react';

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-8">
            <svg className="h-12 w-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 mb-8">Inspiring journeys of career transformation and achievement</p>
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-amber-500 mb-4">Coming Soon</div>
            <p className="text-lg text-gray-600">Amazing success stories are being prepared. Get ready to be inspired!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
