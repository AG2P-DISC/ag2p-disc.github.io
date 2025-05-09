import React, { useEffect } from 'react';
import Layout from '../components/Layout';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const ProposalForm: React.FC = () => {
  useEffect(() => {
    document.title = 'Submit Proposal | AG2P-DISC';
    
    // Load Tally script with the new initialization code
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Introduction Section */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Commercial Data Access Proposal
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                The AG2P-DISC Commercial Data Portal facilitates secure, transparent collaboration 
                between researchers and industry partners in the agricultural genomics community. 
                Through this portal, eligible researchers may request access to high-value proprietary 
                datasets from our commercial stakeholders to support responsible, impactful scientific 
                discovery.
              </p>
              <p className="text-gray-600">
                All proposals are screened by the AG2P-DISC coordination team before being shared 
                with participating companies. Access is contingent upon company approval, data risk 
                tier, and institutional agreements (e.g., MTA/DTA).
              </p>
            </div>
          </div>

          {/* Form */}
          <iframe 
            data-tally-src="https://tally.so/embed/w2ZllA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="1842"
            frameBorder="0"
            title="AG2P-DISC Commercial Data Access Proposal"
            className="border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ProposalForm; 