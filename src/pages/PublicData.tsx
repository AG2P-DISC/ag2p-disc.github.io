import React from 'react';
import { 
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BeakerIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

interface PlatformCardProps {
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  links: Array<{
    label: string;
    url: string;
    prefix?: string;
  }>;
  poweredBy?: {
    logo: string;
    alt: string;
  };
}

const PlatformCard: React.FC<PlatformCardProps> = ({ 
  title, 
  description, 
  features, 
  links,
  poweredBy 
}) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-gray-700">
          <div className="w-5 h-5 flex-shrink-0 text-blue-600">
            {feature.icon}
          </div>
          <span>{feature.text}</span>
        </li>
      ))}
    </ul>
    <div className="space-y-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          {link.prefix && <span className="mr-2">{link.prefix}</span>}
          {link.label}
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
        </a>
      ))}
    </div>
    {poweredBy && (
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2">
        <span className="text-sm text-gray-500">Powered by</span>
        <img src={poweredBy.logo} alt={poweredBy.alt} className="h-6 w-auto" />
      </div>
    )}
  </div>
);

const PublicData: React.FC = () => {
  const platforms = [
    {
      title: "G2P Datasets Web Interface",
      description: "Interactive platform for exploring and accessing curated genomic datasets.",
      features: [
        {
          icon: <MagnifyingGlassIcon />,
          text: "Browse curated public datasets"
        },
        {
          icon: <BookOpenIcon />,
          text: "View metadata, abstracts, and citations"
        },
        {
          icon: <DocumentTextIcon />,
          text: "Copy-ready code for loading and curation"
        }
      ],
      links: [
        {
          label: "Launch Web App",
          url: "https://mtwatson.shinyapps.io/G2P-datasets/",
          prefix: "📍"
        }
      ]
    },
    {
      title: "Reproducible Data Analysis",
      description: "Pre-curated datasets and benchmarks for education and model comparison.",
      features: [
        {
          icon: <AcademicCapIcon />,
          text: "Access pre-curated benchmark datasets and analysis on Kaggle"
        },
        {
          icon: <ChartBarIcon />,
          text: "Benchmark your methods"
        },
        {
          icon: <BeakerIcon />,
          text: "Use for teaching and hands-on learning"
        }
      ],
      links: [
        {
          label: "Visit and Run Code on Kaggle",
          url: "https://www.kaggle.com/organizations/ag2p-disc",
          prefix: "📍"
        },
      ]
    },
    {
      title: "Full Dataset & Code Archive",
      description: "Comprehensive repository of datasets, metadata, and analysis scripts.",
      features: [
        {
          icon: <DocumentDuplicateIcon />,
          text: "Metadata and access scripts for 100+ datasets"
        },
        {
          icon: <ArrowPathIcon />,
          text: "Accepts community contributions"
        },
        {
          icon: <LightBulbIcon />,
          text: "Organized by species, trait, and format"
        }
      ],
      links: [
        {
          label: "Browse GitHub repository",
          url: "https://github.com/QuantGen/G2P-Datasets",
          prefix: "📍"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Open Access to Public Datasets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As part of our commitment to open science, AG2P-DISC offers an integrated platform 
            for accessing, analyzing, and contributing public genomic datasets across plant and 
            animal species. This sub-project, G2P Datasets, is designed to support predictive 
            model development, benchmarking, and education in agricultural genomics.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Research Community
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Want to contribute a dataset? Use the "Add Dataset" feature in the web app or follow 
            submission guidelines in the GitHub repository. Let's grow a global resource for 
            genomic prediction research, together.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://mtwatson.shinyapps.io/G2P-datasets/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Add Dataset
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
            <a
              href="https://github.com/QuantGen/G2P-Datasets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              View Guidelines
              <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublicData; 