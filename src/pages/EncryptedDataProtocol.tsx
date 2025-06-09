import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const EncryptedDataProtocol: React.FC = () => {
  useEffect(() => {
    document.title = 'Encrypted Data Sharing Protocol | AG2P-DISC';
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Encrypted Data Sharing and Analysis Agreement Protocol
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive guide for secure data sharing and analysis procedures in agricultural genomics research.
          </p>
        </div>

        {/* Protocol Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Negotiation (All parties and Broker)</h2>
              <p className="text-gray-600 mb-4">Parties agree to share genetic and phenotypic data in order to perform quantitative genetics analysis on the shared data. The agreement must include:</p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                <li>Specification of Phenotypes and Covariates to be shared, including any pre-processing (eg standardisation, normalisation). For factor type variables the factor levels must be specified and explained, and whether they are random or fixed effects. Imputation of missing values must be specified. Deliverable is a complete specification of a numerical tabular text file with each column ordered and detailed.</li>
                <li>Specification of the genotype sites to be shared - chromosome and base-pair position, relative to a named reference genome. Specification of how genotypes are encoded (as dosages for additive genetic effects or augmented with additional columns so that e.g. dominance effects can be models). Specification of imputation method for missing genotypes.</li>
                <li>Specification of quality control checks to be performed on each component dataset pre- and post encryption, e.g. the calculation of a heritability measure for each phenotype, which should be the same (up to numerical rounding error) in plaintext and cyphertext.</li>
                <li>Agreement of data-sharing (eg by FTP of encrypted compressed tar ball).</li>
                <li>Specification of the analyses to be performed on the federated data. This should include the results to be shared with all the participants, including file formats.</li>
                <li>Agreement on deletion policy of shared cyphertext data.</li>
                <li>Agreement on results being published.</li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Preparation</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                <li>Each party prepares their data using the agreed specification. They run quality control checks (summary statistics) on their plaintext. They encrypt their data using the distributed encryption software and repeat the QC checks to ensure they produce the same results.</li>
                <li>Data sharing. The encrypted data is packaged into an agreed format (eg files with specified names in a compressed tar ball. The shared data may be further encrypted for transmission to the central data broker, using a shared public key. Each party includes their QC statistics to the data broker.</li>
              </ol>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Analysis</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                <li>Data broker unpacks each shared dataset into a separate data area, reruns QC checks on each and checks that summary statistics agree.</li>
                <li>Data broker combines the shared cypher texts and performs the agreed analyses on the combined cyphertext data.</li>
                <li>Result data are encrypted using public-key encryption and returned to each party (each party receives the same result data, eg by downloading from a single repository).</li>
                <li>Encrypted data are deleted from data broker's file system.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Distribution of Results</h2>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                <li>Results are published as agreed.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EncryptedDataProtocol; 