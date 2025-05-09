import React, { useEffect } from 'react';
import { 
  LockClosedIcon, 
  KeyIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  BeakerIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tools?: Array<{
    name: string;
    description: string;
    link: string;
  }>;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, tools }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
          <div className="h-6 w-6 text-blue-600">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    {tools && (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Available Tools:</h4>
        <div className="space-y-3">
          {tools.map((tool, index) => (
            <div key={index} className="group">
              <a 
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start"
              >
                <span className="flex-grow">
                  <span className="block text-blue-600 group-hover:text-blue-700 font-medium">
                    {tool.name}
                  </span>
                  <span className="text-sm text-gray-500">{tool.description}</span>
                </span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 mt-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const EncryptionTools: React.FC = () => {
  useEffect(() => {
    document.title = 'Data Encryption Tools';
  }, []);

  const features = [
    {
      title: "Data Encryption",
      description: "Secure your genomic data and phenotype records with industry-standard encryption, ensuring privacy during storage and sharing.",
      icon: <LockClosedIcon />,
      tools: [
        {
          name: "AG2P Encrypt CLI",
          description: "Command-line tool for batch encryption of genomic data files",
          link: "https://github.com/AG2P-DISC/ag2p-encrypt"
        },
        {
          name: "Web Encryption Interface",
          description: "Browser-based tool for quick file encryption",
          link: "https://encrypt.ag2p-disc.org"
        }
      ]
    },
    {
      title: "Secure Data Sharing",
      description: "Share encrypted datasets with collaborators while maintaining access control and tracking usage.",
      icon: <UserGroupIcon />,
      tools: [
        {
          name: "AG2P Share",
          description: "Web platform for secure dataset sharing and access management",
          link: "https://share.ag2p-disc.org"
        }
      ]
    },
    {
      title: "Research Environment Integration",
      description: "Tools to seamlessly integrate encrypted data with popular research environments and analysis pipelines.",
      icon: <BeakerIcon />,
      tools: [
        {
          name: "R Package",
          description: "R functions for working with encrypted AG2P datasets",
          link: "https://github.com/AG2P-DISC/ag2p-r"
        },
        {
          name: "Python SDK",
          description: "Python library for AG2P data encryption and access",
          link: "https://github.com/AG2P-DISC/ag2p-python"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Data Encryption and Sharing Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect sensitive agricultural research data with our suite of encryption and secure sharing tools. 
            Built specifically for genomic and phenotype datasets, our tools make it easy to maintain data 
            privacy while enabling collaboration.
          </p>
        </div>

        {/* Template Status Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                This is a professional template page showcasing potential features and layout. The actual Data Encryption and Sharing Tools are under development and will be available soon.
              </p>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Technical Details Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            
            {/* Method and Workflow Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Encryption Method */}
              <div className="bg-white/80 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">HEGP: Homomorphic Encryption for Genotypes and Phenotypes</h3>
                <div className="aspect-video relative mb-3">
                  <img 
                    src="/images/encryption-method.png" 
                    alt="AG2P-DISC Encryption Method Diagram" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Transform raw genomic data into secure formats while preserving analytical capabilities.
                </p>
                <div className="space-y-2">
                <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                    <p className="text-sm text-gray-700"><span className="font-medium">Local Encryption:</span> Data is encrypted at source before sharing, and raw data never leaves local storage.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                    <p className="text-sm text-gray-700"><span className="font-medium">Privacy-Preserving:</span> Data remains encrypted throughout analysis, enabling secure collaboration without data exposure.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                    <p className="text-sm text-gray-700"><span className="font-medium">High Accuracy:</span> Results are nearly identical to unencrypted analyses, with correlation coefficients exceeding 0.99 for both marker effects and breeding values.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                    <p className="text-sm text-gray-700"><span className="font-medium">Flexible Modeling:</span> Supports common GWAS and genomic prediction models including single-marker regression, mixed models, Bayesian regression.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
                    <p className="text-sm text-gray-700"><span className="font-medium">FAIR-Compliant:</span> Facilitates secure data sharing aligned with FAIR principles (Findable, Accessible, Interoperable, Reusable) while maintaining strict privacy controls.</p>
                  </div>
                </div>
              </div>

              {/* Workflow Overview */}
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Partner Collaboration</h3>
                  <div className="aspect-video relative mb-3">
                    <img 
                      src="/images/encryption-workflow-1.png" 
                      alt="Partner Collaboration Workflow" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Federated Analysis</h3>
                  <div className="aspect-video relative mb-3">
                    <img 
                      src="/images/encryption-workflow-2.png" 
                      alt="Broker-based Federated Analysis" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CommandLineIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Install Tools</h3>
                <p className="text-gray-600">Download and install our command-line tools or use our web interface</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <KeyIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Set Up Keys</h3>
                <p className="text-gray-600">Generate your encryption keys and configure access controls</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CloudArrowUpIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Start Sharing</h3>
                <p className="text-gray-600">Encrypt your data and share it securely with collaborators</p>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://docs.ag2p-disc.org/quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-start gap-3">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    Quick Start Guide
                  </h3>
                  <p className="text-sm text-gray-600">Get started with encrypting and sharing your first dataset</p>
                </div>
              </div>
            </a>
            <a
              href="https://docs.ag2p-disc.org/security"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-start gap-3">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    Security Documentation
                  </h3>
                  <p className="text-sm text-gray-600">Learn about our encryption standards and security practices</p>
                </div>
              </div>
            </a>
            <a
              href="https://docs.ag2p-disc.org/api"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-start gap-3">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    API Reference
                  </h3>
                  <p className="text-sm text-gray-600">Complete API documentation for developers</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EncryptionTools; 