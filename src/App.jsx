// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import MainRoutes from './components/MainRoutes';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Security from './components/Security';
import FeatureCard from './components/FeatureCard';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+524772870874"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg
      hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 z-50
      flex items-center justify-center animate-bounce-soft"
    aria-label="Contactar por WhatsApp"
  >
    <FaWhatsapp size={28} />
  </a>
);

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <div className="bg-gray-50">
                    <MaxWidthWrapper>
                      <Services />
                      <MainRoutes />
                      <Security />
                      <FeatureCard />
                      <FAQ />
                    </MaxWidthWrapper>
                  </div>
                </>
              } />
              <Route path="/servicios" element={<div className="bg-gray-50"><MaxWidthWrapper><Services /></MaxWidthWrapper></div>} />
              <Route path="/rutas" element={<div className="bg-gray-50"><MaxWidthWrapper><MainRoutes /></MaxWidthWrapper></div>} />
              <Route path="/contacto" element={<div className="bg-gray-50"><MaxWidthWrapper><ContactForm /></MaxWidthWrapper></div>} />
              <Route path="/faq" element={<div className="bg-gray-50"><MaxWidthWrapper><FAQ /></MaxWidthWrapper></div>} />
              <Route path="/seguridad" element={<div className="bg-gray-50"><MaxWidthWrapper><Security /></MaxWidthWrapper></div>} />
              <Route path="/privacidad" element={<div className="bg-gray-50"><MaxWidthWrapper><PrivacyPolicy /></MaxWidthWrapper></div>} />
            </Routes>
          </main>
          <WhatsAppButton />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
