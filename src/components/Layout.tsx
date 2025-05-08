import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <img 
                  src="/images/ag2p-disc-logo.png" 
                  alt="AG2P-DISC Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        {!isHomePage && (
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="text-green-600 hover:text-green-700 mb-8 inline-block">
              ← Back to Home
            </Link>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">About</h3>
              <p className="mt-4 text-base text-gray-500">
                AG2P-DISC facilitates data integration, sharing, and collaboration in agricultural genomics research.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/public-data" className="text-base text-gray-500 hover:text-gray-900">
                    Public Datasets
                  </Link>
                </li>
                <li>
                  <Link to="/encryption-tools" className="text-base text-gray-500 hover:text-gray-900">
                    Data Encryption
                  </Link>
                </li>
                <li>
                  <Link to="/commercial-data" className="text-base text-gray-500 hover:text-gray-900">
                    Commercial Data
                  </Link>
                </li>
                <li>
                  <Link to="/education" className="text-base text-gray-500 hover:text-gray-900">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
              <p className="mt-4 text-base text-gray-500">
                Have questions? Get in touch with our team for support and inquiries.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} AG2P-DISC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 