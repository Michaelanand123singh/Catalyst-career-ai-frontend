import React from 'react';

const AssessmentTests = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-amber-100 rounded-full flex items-center justify-center mb-8">
            <svg className="h-12 w-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Tests</h1>
          <p className="text-xl text-gray-600 mb-8">Comprehensive career assessment tools to help you discover your potential</p>
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-amber-500 mb-4">Coming Soon</div>
            <p className="text-lg text-gray-600">We're working hard to bring you the best career assessment tools. Stay tuned for updates!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentTests;
