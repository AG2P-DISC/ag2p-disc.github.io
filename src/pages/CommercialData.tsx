import React, { useEffect } from 'react';
import { 
  BuildingOfficeIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

interface PartnerProps {
  name: string;
  logo: string;
}

const PartnerCard: React.FC<PartnerProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
    <div className="h-20 flex items-center justify-center mb-4">
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className="max-h-full max-w-full object-contain"
      />
    </div>
    <h3 className="text-sm font-medium text-gray-900 text-center">{name}</h3>
  </div>
);

const ProcessStep: React.FC<{ number: number; title: string; description: string }> = ({ 
  number, 
  title, 
  description 
}) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
      {number}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

interface TierProps {
  tier: string;
  dataType: string;
  riskLevel: 'Low' | 'Moderate' | 'High';
  accessConditions: string;
}

const TierRow: React.FC<TierProps> = ({ tier, dataType, riskLevel, accessConditions }) => {
  const getRiskBadgeStyle = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800 ring-green-600/20';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800 ring-yellow-600/20';
      case 'High':
        return 'bg-red-100 text-red-800 ring-red-600/20';
      default:
        return 'bg-gray-100 text-gray-800 ring-gray-600/20';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <ShieldCheckIcon className="h-4 w-4 text-green-600" />;
      case 'Moderate':
        return <ShieldExclamationIcon className="h-4 w-4 text-yellow-600" />;
      case 'High':
        return <ShieldExclamationIcon className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {tier}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        {dataType}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getRiskBadgeStyle(riskLevel)}`}>
          {getRiskIcon(riskLevel)}
          {riskLevel}
        </span>
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        {accessConditions}
      </td>
    </tr>
  );
};

const CommercialData: React.FC = () => {
  useEffect(() => {
    document.title = 'Commercial Data Portal | AG2P-DISC';
  }, []);

  const partners: PartnerProps[] = [
     {
       name: "AG2P-DISC",
       logo: "/images/ag2p-disc-logo.png"
     },
    // {
    //   name: "Corteva Agriscience",
    //   logo: "/images/logos/corteva.png"
    // },
    // {
    //   name: "PIC",
    //   logo: "/images/logos/pic.png"
    // },
    // {
    //   name: "Hy-Line International",
    //   logo: "/images/logos/hy-line.png"
    // },
    // {
    //   name: "Council on Dairy Cattle Breeding",
    //   logo: "/images/logos/cdcb.png"
    // },
    // {
    //   name: "Bayer",
    //   logo: "/images/logos/bayer.png"
    // },
    // {
    //   name: "PigGen Canada",
    //   logo: "/images/logos/piggen.png"
    // },
    // {
    //   name: "Cobb",
    //   logo: "/images/logos/cobb.png"
    // }
  ];

  const tiers: TierProps[] = [
    {
      tier: "Tier 1",
      dataType: "Public summary stats, simulations",
      riskLevel: "Low",
      accessConditions: "Open access with attribution"
    },
    {
      tier: "Tier 2",
      dataType: "Genotype/phenotype data",
      riskLevel: "Moderate",
      accessConditions: "Requires MTA/DTA and proposal"
    },
    {
      tier: "Tier 3",
      dataType: "Proprietary breeding records, linked multi-omics",
      riskLevel: "High",
      accessConditions: "Company-specific review, restricted use"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Commercial Data Access
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As part of AG2P-DISC's commitment to advancing collaborative agricultural research, 
            we provide a secure channel for requesting access to genomic and phenotypic data 
            from participating commercial partners. Access is granted on a case-by-case basis 
            and requires submission of a brief research proposal.
          </p>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number={1}
              title="Review Partners"
              description="Browse our list of participating companies and their general data types"
            />
            <ProcessStep 
              number={2}
              title="Submit Proposal"
              description="Submit a brief research proposal describing your objectives and data needs"
            />
            <ProcessStep 
              number={3}
              title="Review Process"
              description="Your request will be reviewed by the AG2P-DISC coordination team and the company's contact"
            />
            <ProcessStep 
              number={4}
              title="Get Access"
              description="You will be contacted regarding next steps or approval. Upon approval, you'll receive instructions for secure data access"
            />
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Participating Commercial Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>

        {/* Tiered Access Model Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="sm:flex sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Tiered Data Access Model
              </h2>
            </div>
          </div>
          <div className="mt-4 flow-root">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Tier
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Data Type
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Risk Level
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Access Conditions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tiers.map((tier, index) => (
                      <TierRow key={index} {...tier} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <span className="text-green-600">💡</span>
            Hover over each row for more details. Risk levels are indicated by color-coded badges.
          </p>
        </div>

        {/* Proposal Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit a Proposal</h2>
          <p className="text-gray-600 mb-6">
            Please complete our proposal form to request access to commercial data. 
            Your submission will be reviewed by both the data partner and the AG2P-DISC coordination team.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Required Information:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Your name, institution, and contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Target company</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Specific data requirements (e.g., genotypes, phenotypes)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Research objectives (1-2 paragraphs)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Estimated data size and traits of interest</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Funding source (optional)</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRightIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span>Institutional Agreement Status (MTA/DTA)</span>
              </li>
            </ul>
          </div>
          <Link 
            to="/commercial-data/proposal"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Submit Your Proposal
            <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CommercialData; 