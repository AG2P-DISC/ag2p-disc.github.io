import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicData from './pages/PublicData';
import EncryptionTools from './pages/EncryptionTools';
import CommercialData from './pages/CommercialData';
import Education from './pages/Education';
import ProposalForm from './pages/ProposalForm';
import EncryptedDataProtocol from './pages/EncryptedDataProtocol';
import PartnerDetail from './pages/PartnerDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/public-data" element={<PublicData />} />
        <Route path="/encryption-tools" element={<EncryptionTools />} />
        <Route path="/commercial-data" element={<CommercialData />} />
        <Route path="/commercial-data/proposal" element={<ProposalForm />} />
        <Route path="/education" element={<Education />} />
        <Route path="/encrypted-data-protocol" element={<EncryptedDataProtocol />} />
        <Route path="/partner/:partnerId" element={<PartnerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
