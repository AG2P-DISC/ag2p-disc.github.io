import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicData from './pages/PublicData';
import EncryptionTools from './pages/EncryptionTools';
import CommercialData from './pages/CommercialData';
import Education from './pages/Education';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/public-data" element={<PublicData />} />
        <Route path="/encryption-tools" element={<EncryptionTools />} />
        <Route path="/commercial-data" element={<CommercialData />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
