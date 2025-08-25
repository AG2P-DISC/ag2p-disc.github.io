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
      title: "Data Encryption & Secure Sharing",
      description: "Comprehensive tools for encrypting genomic data with homomorphic encryption (HEGP) and securely sharing encrypted datasets with collaborators while maintaining access control and privacy.",
      icon: <LockClosedIcon />,
      tools: [
        {
          name: "pyhegp CLI",
          description: "Command-line interface for homomorphic encryption of genomic data files",
          link: "https://github.com/encryption4genetics/pyhegp"
        },
        {
          name: "Data QC Tool",
          description: "Run quality control checks on plaintext and encrypted data (Coming Soon)",
          link: "#"
        },
        {
          name: "Data Packaging Tool",
          description: "Package encrypted data into validated tarballs for sharing (Coming Soon)",
          link: "#"
        },
        {
          name: "Secure File Transfer",
          description: "SFTP/FTP or web-based upload for encrypted tarballs (Coming Soon)",
          link: "#"
        },
        {
          name: "QC Verification Tool",
          description: "Broker tool for verifying QC statistics on received data (Coming Soon)",
          link: "#"
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
            Protect sensitive agricultural research data with our suite of homomorphic encryption and secure sharing tools. 
            Built specifically for genomic and phenotype datasets, our tools enable privacy-preserving analysis 
            while maintaining strict data confidentiality and enabling secure collaboration.
          </p>
        </div>

        {/* Active Development Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Active Development:</strong> Our encryption tools are actively being developed and tested. The pyhegp Python library is now available for homomorphic encryption of genotypes and phenotypes.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CommandLineIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Install pyhegp</h3>
                <p className="text-gray-600">Install the Python library and CLI tool using pip</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <KeyIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Prepare Data</h3>
                <p className="text-gray-600">Format your genotype and phenotype data for encryption</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CloudArrowUpIcon className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Encrypt & Share</h3>
                <p className="text-gray-600">Use pyhegp to encrypt data and share securely</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tool Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Tool: pyhegp</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The pyhegp library implements homomorphic encryption of genotypes and phenotypes, enabling 
              privacy-preserving genomic analysis while maintaining data confidentiality.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-green-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CommandLineIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">pyhegp Python Library & CLI</h3>
                <p className="text-gray-600">Available now on GitHub</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Homomorphic encryption for genotypes and phenotypes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Command-line interface for batch processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Python library for integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Support for federated analysis workflows</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Installation:</h4>
                <div className="bg-gray-900 text-green-400 p-3 rounded text-sm font-mono overflow-x-auto whitespace-nowrap">
                  pip install git+https://github.com/encryption4genetics/pyhegp
                </div>
                <p className="text-xs text-gray-500 mt-2">Requires Python 3.7+</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://github.com/encryption4genetics/pyhegp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 gap-8 mb-12">
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
                    alt="Encryption Method" 
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
                      alt="Encryption Workflow Step 1" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Federated Analysis</h3>
                  <div className="aspect-video relative mb-3">
                    <img 
                      src="/images/encryption-workflow-2.png" 
                      alt="Encryption Workflow Step 2" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation & Resources</h2>
          <div className="grid grid-cols-1 gap-8">
            <a
              href="/encrypted-data-protocol"
              className="group"
            >
              <div className="flex items-start gap-3">
                <DocumentDuplicateIcon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    Encrypted Data Sharing and Analysis Agreement Protocol
                  </h3>
                  <p className="text-sm text-gray-600">Comprehensive guide for secure data sharing and analysis procedures</p>
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