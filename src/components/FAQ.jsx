import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#D2C7CC]">
      <button
        className="w-full py-4 px-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="font-medium text-[#111B40]">{question}</span>
        <FiChevronDown
          className={`text-[#283050] transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-spring
          ${isOpen ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-6 pb-4 text-[#283050]">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué servicios de seguridad ofrecen?',
      answer: 'Ofrecemos servicios de monitoreo en tiempo real, custodia de mercancías, análisis de rutas seguras y respuesta inmediata ante incidentes.'
    },
    {
      question: '¿Cómo funciona el sistema de monitoreo?',
      answer: 'Nuestro sistema utiliza tecnología de última generación para rastrear y monitorear las unidades en tiempo real, proporcionando actualizaciones constantes sobre su ubicación y estado.'
    },
    {
      question: '¿Qué áreas geográficas cubren?',
      answer: 'Cubrimos las principales rutas comerciales del país, incluyendo el corredor Centro-Bajío, la ruta del Pacífico y las rutas del Norte.'
    },
    {
      question: '¿Qué hacer en caso de emergencia?',
      answer: 'Contamos con un protocolo de respuesta inmediata y un centro de atención 24/7 para atender cualquier situación de emergencia.'
    },
    {
      question: '¿Ofrecen capacitación para el personal?',
      answer: 'Sí, proporcionamos capacitación completa sobre protocolos de seguridad, uso de sistemas y procedimientos de emergencia.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#111B40] text-center mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#283050]">
            ¿No encontraste lo que buscabas?
          </p>
          <a
            href="/contacto"
            className="inline-block mt-2 text-[#1D3C5B] hover:text-[#524E62] font-medium
              transition-colors duration-300"
          >
            Contáctanos directamente
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 