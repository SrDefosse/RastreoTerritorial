// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Services from './components/Services';
import MainRoutes from './components/MainRoutes';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Security from './components/Security';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+52TUNUMERO"
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
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-16 md:ml-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <MainRoutes />
                <Security />
                <Testimonials />
                <FAQ />
              </>
            } />
            <Route path="/servicios" element={<Services />} />
            <Route path="/rutas" element={<MainRoutes />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/seguridad" element={<Security />} />
          </Routes>
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
