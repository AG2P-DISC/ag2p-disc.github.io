import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  AcademicCapIcon,
  LockClosedIcon,
  GlobeAltIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon as EducationIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, icon, path }) => {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => navigate(path)}
      className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <div className="w-8 h-8 text-green-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface HighlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, icon, color, path }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(path)}
      className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color} hover:transform hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg ${color.replace('border', 'bg')} bg-opacity-10 mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const sections = [
    {
      title: "Public Datasets and Analysis",
      description: "Access and analyze comprehensive agricultural genomic datasets and research findings.",
      icon: <ChartBarIcon />,
      path: "/public-data"
    },
    {
      title: "Data Encryption and Sharing Tools",
      description: "Secure tools for encrypting and sharing sensitive agricultural research data.",
      icon: <ShieldCheckIcon />,
      path: "/encryption-tools"
    },
    {
      title: "Data Portal to Commercial Data",
      description: "Connect with commercial agricultural databases and research resources.",
      icon: <BuildingOfficeIcon />,
      path: "/commercial-data"
    },
    {
      title: "Education and Outreach",
      description: "Educational resources and community engagement for agricultural genomics.",
      icon: <AcademicCapIcon />,
      path: "/education"
    }
  ];

  const highlights = [
    {
      title: "Open Access to Public Datasets",
      description: "Promoting discoverable, usable, and well-documented public datasets for the research community.",
      icon: <GlobeAltIcon className="h-6 w-6 text-blue-600" />,
      color: "border-blue-500",
      path: "/public-data"
    },
    {
      title: "Encrypted Data-Sharing Solutions",
      description: "Secure mechanisms for sharing sensitive data while maintaining privacy and enabling research access.",
      icon: <LockClosedIcon className="h-6 w-6 text-purple-600" />,
      color: "border-purple-500",
      path: "/encryption-tools"
    },
    {
      title: "Commercial Data Request Portal",
      description: "Structured proposal and review process for accessing commercial agricultural datasets.",
      icon: <ClipboardDocumentListIcon className="h-6 w-6 text-green-600" />,
      color: "border-green-500",
      path: "/commercial-data"
    },
    {
      title: "Educational and Outreach Programs",
      description: "Comprehensive training in data sharing, collaboration, and data science skills for all stakeholders.",
      icon: <EducationIcon className="h-6 w-6 text-orange-600" />,
      color: "border-orange-500",
      path: "/education"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-8">
          <img 
            src="/images/ag2p-disc-logo.png" 
            alt="AG2P-DISC Logo" 
            className="h-64 w-auto"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 sr-only">
          AG2P-DISC
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Agricultural Genome to Phenome - Data Integration, Sharing, and Collaboration
        </p>
      </div>

      {/* What is AG2P-DISC Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is AG2P-DISC?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Effective data sharing and collaboration are increasingly critical for validating research findings, enabling further studies, and integrating multiple datasets for joint analysis. However, these efforts are often hindered or entirely blocked due to limited visibility and accessibility of public data and the confidential or proprietary nature of private industry data.
            </p>
            
            <p className="text-gray-600 mb-6">
              To bridge this gap and advance Agricultural Genome to Phenome (AG2P) research, with the ultimate goal of accelerating genetic improvement in agriculture, we have adopted a comprehensive approach:
            </p>

            {/* Highlighted Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <HighlightCard key={index} {...highlight} />
              ))}
            </div>

            <p className="text-gray-600">
              Through this integrated and scalable framework, we aim to reduce the key barriers that impede both public research data access and the responsible utilization of proprietary industry datasets. Removing these obstacles is essential for enabling scientific advancement, promoting innovation, and achieving the long-term goals of AG2P research.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 