import React from 'react';
import { Link } from 'react-router-dom';

const CommercialData: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Data Portal to Commercial Data
        </h1>
        <p className="text-xl text-gray-600">
          Coming soon: Access to commercial agricultural databases and research resources.
        </p>
      </div>
    </div>
  );
};

export default CommercialData; 