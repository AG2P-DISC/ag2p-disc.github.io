import React from 'react';
import { Link } from 'react-router-dom';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Education and Outreach
        </h1>
        <p className="text-xl text-gray-600">
          Coming soon: Educational resources and community engagement for agricultural genomics.
        </p>
      </div>
    </div>
  );
};

export default Education; 