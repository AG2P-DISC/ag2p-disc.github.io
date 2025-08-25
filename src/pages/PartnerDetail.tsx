import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

interface PartnerTierProps {
  tier: string;
  dataType: string;
  confidentialityLevel: 'Low' | 'Moderate' | 'High';
  accessConditions: string;
  processingTime?: string;
  restrictions?: string[];
}

interface DatasetInfo {
  tier: string;
  datasets: Array<{
    name: string;
    description: string;
    sampleSize: string;
    traits: string[];
    genotypes: string;
    species: string;
    yearCollected: string;
    additionalInfo?: string[];
  }>;
}

const DatasetCard: React.FC<{ dataset: DatasetInfo['datasets'][0]; tier: string }> = ({ dataset, tier }) => (
  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
    <h4 className="font-semibold text-gray-900 mb-2">{dataset.name}</h4>
    <p className="text-sm text-gray-600 mb-3">{dataset.description}</p>
    
    <div className="grid grid-cols-2 gap-3 text-sm">
      <div>
        <span className="font-medium text-gray-700">Sample Size:</span>
        <span className="text-gray-600 ml-1">{dataset.sampleSize}</span>
      </div>
      <div>
        <span className="font-medium text-gray-700">Species:</span>
        <span className="text-gray-600 ml-1">{dataset.species}</span>
      </div>
      <div>
        <span className="font-medium text-gray-700">Genotypes:</span>
        <span className="text-gray-600 ml-1">{dataset.genotypes}</span>
      </div>
      <div>
        <span className="font-medium text-gray-700">Year:</span>
        <span className="text-gray-600 ml-1">{dataset.yearCollected}</span>
      </div>
    </div>
    
    <div className="mt-3">
      <span className="font-medium text-gray-700 text-sm">Traits:</span>
      <div className="flex flex-wrap gap-1 mt-1">
        {dataset.traits.map((trait, idx) => (
          <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {trait}
          </span>
        ))}
      </div>
    </div>
    
    {dataset.additionalInfo && (
      <div className="mt-3">
        <span className="font-medium text-gray-700 text-sm">Additional Info:</span>
        <ul className="mt-1 space-y-1">
          {dataset.additionalInfo.map((info, idx) => (
            <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
              <span className="text-blue-600 mt-1">•</span>
              <span>{info}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const PartnerTierRow: React.FC<PartnerTierProps> = ({ 
  tier, 
  dataType, 
  confidentialityLevel, 
  accessConditions, 
  processingTime,
  restrictions 
}) => {
  const getConfidentialityBadgeStyle = (level: string) => {
    switch (level) {
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

  const getConfidentialityIcon = (level: string) => {
    switch (level) {
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
        <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getConfidentialityBadgeStyle(confidentialityLevel)}`}>
          {getConfidentialityIcon(confidentialityLevel)}
          {confidentialityLevel}
        </span>
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        {accessConditions}
      </td>
      <td className="px-3 py-4 text-sm text-gray-500">
        {processingTime || "2-4 weeks"}
      </td>
    </tr>
  );
};

const PartnerDetail: React.FC = () => {
  const { partnerId } = useParams<{ partnerId: string }>();
  
  useEffect(() => {
    document.title = `${partnerId} - Partner Details | AG2P-DISC`;
  }, [partnerId]);

  // Partner data - in real implementation, this would come from an API
  const getPartnerData = (partnerId: string) => {
    if (partnerId === 'piggen-canada') {
      return {
        name: "PigGen Canada",
        logo: "/images/logos/piggen.png",
        description: "Representing the Canadian swine genetics industry with a single voice and serving as the 'go to' group for swine genetic research in Canada, focused on genetic solutions for sustainable pork production.",
        contactEmail: "info@piggencanada.org",
        website: "https://piggencanada.org"
      };
    }
    
    // Default partner data
    return {
      name: partnerId?.replace(/-/g, ' ') || 'Partner',
      logo: "/images/ag2p-disc-logo.png",
      description: "Leading agricultural research institution with extensive genomic and phenotypic datasets.",
      contactEmail: "data-access@partner.com",
      website: "https://partner.com"
    };
  };

  const partnerData = getPartnerData(partnerId || '');

  const getPartnerTiers = (partnerId: string): PartnerTierProps[] => {
    if (partnerId === 'piggen-canada') {
      return [
        {
          tier: "Tier 3",
          dataType: "Proprietary swine disease resilience dataset with comprehensive genomic and phenotypic data",
          confidentialityLevel: "High" as const,
          accessConditions: "Company-specific review, restricted use, strict confidentiality requirements",
          processingTime: "8 weeks",
          restrictions: []
        }
      ];
    }
    
    // Default partner tiers
    return [
      {
        tier: "Tier 1",
        dataType: "Public summary statistics, simulation datasets",
        confidentialityLevel: "Low" as const,
        accessConditions: "Open access with attribution",
        processingTime: "Immediate",
        restrictions: ["Must cite partner in publications"]
      },
      {
        tier: "Tier 2",
        dataType: "Encrypted datasets, selected genotype/phenotype data",
        confidentialityLevel: "Moderate" as const,
        accessConditions: "Streamlined review process, Material/Data Transfer Agreement (MTA/DTA) required",
        processingTime: "2-3 weeks",
        restrictions: ["Academic use only", "No commercial applications", "Annual renewal required"]
      },
      {
        tier: "Tier 3",
        dataType: "Proprietary breeding records, linked multi-omics data",
        confidentialityLevel: "High" as const,
        accessConditions: "Company-specific review, restricted use",
        processingTime: "4-8 weeks",
        restrictions: ["Case-by-case approval", "Strict confidentiality requirements", "Regular compliance monitoring"]
      }
    ];
  };

  const partnerTiers = getPartnerTiers(partnerId || '');

  // Dataset information for each tier
  const getAvailableDatasets = (partnerId: string): DatasetInfo[] => {
    if (partnerId === 'piggen-canada') {
      return [
        {
          tier: "Tier 3",
          datasets: [
            {
              name: "PigGen Disease Resilience Dataset",
              description: "Comprehensive swine disease resilience dataset with natural challenge protocol evaluation",
              sampleSize: "3,139 pigs (3,285 initially, 146 removed during QC)",
              traits: ["Disease Resilience", "Average Daily Gain", "Feed Conversion Ratio", "Body Weight", "Feed Intake", "Carcass Quality"],
              genotypes: "435,172 SNPs (650K SNP panel, post-QC)",
              species: "Sus scrofa (Large White × Landrace cross)",
              yearCollected: "2019-2021",
              additionalInfo: [
                "Natural challenge protocol simulating high disease pressure",
                "Three-phase evaluation: quarantine nursery, challenge nursery, finishing phase",
                "50 batches of 60-75 individuals each",
                "Quality control: MAF > 0.05, marker call rate > 0.10, individual call rate > 0.10",
                "Comprehensive phenotypic data collection throughout growth phases"
              ]
            }
          ]
        }
      ];
    }
    
    // Default datasets for other partners
    return [
      {
        tier: "Tier 1",
        datasets: [
          {
            name: "Corn Yield Summary Statistics",
            description: "Public summary statistics from 10-year corn breeding program",
            sampleSize: "15,000+ individuals",
            traits: ["Grain Yield", "Plant Height", "Ear Length", "Drought Tolerance"],
            genotypes: "50K SNP markers",
            species: "Zea mays",
            yearCollected: "2014-2023",
            additionalInfo: ["Multi-location trials", "Standardized protocols", "Weather data included"]
          },
          {
            name: "Soybean Simulation Dataset",
            description: "Simulated genomic prediction dataset for soybean breeding",
            sampleSize: "5,000 simulated individuals",
            traits: ["Seed Protein", "Oil Content", "Maturity", "Disease Resistance"],
            genotypes: "30K SNP markers",
            species: "Glycine max",
            yearCollected: "2023",
            additionalInfo: ["Multiple simulation scenarios", "Training/validation splits provided"]
          }
        ]
      },
      {
        tier: "Tier 2",
        datasets: [
          {
            name: "Wheat Genotype-Phenotype Collection",
            description: "Encrypted genotype and phenotype data from winter wheat breeding program",
            sampleSize: "8,500 individuals",
            traits: ["Grain Yield", "Protein Content", "Test Weight", "Falling Number", "Disease Resistance"],
            genotypes: "90K SNP markers",
            species: "Triticum aestivum",
            yearCollected: "2018-2022",
            additionalInfo: ["Encrypted format", "Quality-controlled", "Metadata included"]
          },
          {
            name: "Barley Multi-Trait Dataset",
            description: "Selected barley lines with comprehensive trait measurements",
            sampleSize: "3,200 individuals",
            traits: ["Malt Quality", "Beta-Glucan", "Protein", "Yield", "Disease Resistance"],
            genotypes: "40K SNP markers",
            species: "Hordeum vulgare",
            yearCollected: "2019-2021",
            additionalInfo: ["Malt quality parameters", "Brewing industry relevant"]
          }
        ]
      },
      {
        tier: "Tier 3",
        datasets: [
          {
            name: "Proprietary Corn Breeding Records",
            description: "Complete breeding records including pedigree and selection history",
            sampleSize: "25,000+ individuals",
            traits: ["All measured traits", "Breeding values", "Selection indices", "Commercial performance"],
            genotypes: "600K SNP markers",
            species: "Zea mays",
            yearCollected: "2010-2023",
            additionalInfo: ["Complete pedigree information", "Selection history", "Commercial performance data", "Multi-omics integration"]
          },
          {
            name: "Linked Multi-Omics Dataset",
            description: "Integrated genomic, transcriptomic, and metabolomic data",
            sampleSize: "1,500 individuals",
            traits: ["Multi-omics profiles", "Gene expression", "Metabolite levels", "Phenotypic traits"],
            genotypes: "1M+ markers",
            species: "Zea mays",
            yearCollected: "2021-2023",
            additionalInfo: ["RNA-seq data", "Metabolomics profiles", "Proteomics data", "Advanced analytics required"]
          }
        ]
      }
    ];
  };

  const availableDatasets = getAvailableDatasets(partnerId || '');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/commercial-data"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Proprietary Data Portal
          </Link>
        </div>

        {/* Partner Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src={partnerData.logo} 
                alt={`${partnerData.name} logo`}
                className="h-24 w-24 object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {partnerData.name}
              </h1>
              <p className="text-gray-600 mb-4">
                {partnerData.description}
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                <a 
                  href={partnerData.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partner-Specific Tiered Data Access Model */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {partnerData.name} - Tiered Data Access Model
          </h2>
          <p className="text-gray-600 mb-6">
            This partner-specific access model outlines the data types, confidentiality levels, and access conditions for {partnerData.name} datasets.
          </p>
          
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
                      Confidentiality Level
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Access Conditions
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Processing Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {partnerTiers.map((tier, index) => (
                    <PartnerTierRow key={index} {...tier} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Available Datasets Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available Datasets
          </h2>
          <p className="text-gray-600 mb-8">
            Detailed information about the datasets available from {partnerData.name} across different access tiers.
          </p>
          
          <div className="space-y-8">
            {availableDatasets.map((tierData, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    tierData.tier === "Tier 1" ? "bg-green-100 text-green-800" :
                    tierData.tier === "Tier 2" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {tierData.tier}
                  </span>
                  <span>Datasets</span>
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tierData.datasets.map((dataset, idx) => (
                    <DatasetCard key={idx} dataset={dataset} tier={tierData.tier} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Additional Requirements & Restrictions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTiers.map((tier, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{tier.tier}</h4>
                {tier.restrictions && (
                  <ul className="space-y-1 text-sm text-gray-600">
                    {tier.restrictions.map((restriction, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{restriction}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Special link for PigGen Canada Tier 3 */}
                {partnerId === 'piggen-canada' && tier.tier === "Tier 3" && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Procedure for requesting access to the full data:</strong>
                    </p>
                    <a 
                      href="/jkab441supplemental_material.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Read detailed procedure (PDF)
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerDetail; 