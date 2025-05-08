import React from 'react';
import { 
  LockClosedIcon, 
  KeyIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <div className="h-6 w-6 text-purple-600">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const EncryptionTools: React.FC = () => {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Secure your data with state-of-the-art encryption algorithms, ensuring privacy during storage and transmission.",
      icon: <LockClosedIcon />
    },
    {
      title: "Key Management",
      description: "Robust key management system with support for key rotation, revocation, and secure sharing between authorized parties.",
      icon: <KeyIcon />
    },
    {
      title: "Access Control",
      description: "Fine-grained access control mechanisms allowing data owners to specify who can access their data and under what conditions.",
      icon: <ShieldCheckIcon />
    },
    {
      title: "Collaboration Tools",
      description: "Secure collaboration features enabling researchers to work together while maintaining data privacy and security.",
      icon: <UserGroupIcon />
    },
    {
      title: "Data Synchronization",
      description: "Automated synchronization of encrypted data across authorized systems and research environments.",
      icon: <ArrowPathIcon />
    },
    {
      title: "Audit Trails",
      description: "Comprehensive logging and audit trails for all data access and sharing activities.",
      icon: <DocumentDuplicateIcon />
    }
  ];

  return (
    <Layout>
      <PageHeader
        title="Data Encryption and Sharing Tools"
        description="Secure and efficient tools for encrypting and sharing sensitive agricultural research data while maintaining privacy and enabling collaboration."
        icon={<LockClosedIcon />}
        color="bg-purple-100 text-purple-600"
      />

      {/* Main Features */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Getting Started</h2>
          </div>
          <div className="p-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Our encryption tools are designed to be easy to use while maintaining the highest security standards. 
                Follow these steps to get started:
              </p>
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                <li>Register for an account and verify your research credentials</li>
                <li>Install our secure data sharing client</li>
                <li>Generate your encryption keys and set up access controls</li>
                <li>Start encrypting and sharing your research data</li>
              </ol>
              <div className="mt-6">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200">
                  Download Encryption Tools
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentation & Resources</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <DocumentDuplicateIcon className="h-5 w-5 text-purple-600" />
              <a href="#" className="text-purple-600 hover:text-purple-700">User Guide</a>
            </div>
            <div className="flex items-center gap-2">
              <DocumentDuplicateIcon className="h-5 w-5 text-purple-600" />
              <a href="#" className="text-purple-600 hover:text-purple-700">API Documentation</a>
            </div>
            <div className="flex items-center gap-2">
              <DocumentDuplicateIcon className="h-5 w-5 text-purple-600" />
              <a href="#" className="text-purple-600 hover:text-purple-700">Security Best Practices</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EncryptionTools; 