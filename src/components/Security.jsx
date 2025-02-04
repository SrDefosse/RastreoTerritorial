import { useEffect, useRef, useState } from 'react';
import { FiShield, FiRadio, FiTruck, FiUsers, FiAward } from 'react-icons/fi';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-y-0', 'opacity-100');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-700
        translate-y-8 opacity-0`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-[#1D3C5B] text-white">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-[#111B40]">{title}</h3>
      </div>
      <p className="text-[#283050]">{description}</p>
    </div>
  );
};

const CaseStudy = () => {
  const imageRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-100', 'opacity-100');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8">
        <div
          ref={imageRef}
          className="relative h-64 md:h-full transform scale-95 opacity-0 transition-all duration-1000"
        >
          {!imageError ? (
            <img
              src="https://images.pexels.com/photos/13062236/pexels-photo-13062236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Caso de éxito"
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <FiTruck className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                <p className="text-gray-600">Imagen no disponible</p>
              </div>
            </div>
          )}
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#111B40] mb-4">
            Caso de Éxito: Transportes Seguros
          </h3>
          <p className="text-[#283050] mb-6">
            Implementamos nuestro sistema de seguridad integral en una flota de 50 unidades,
            logrando una reducción del 95% en incidentes y mejorando la eficiencia operativa en un 30%.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#1D3C5B]">
              <FiAward />
              <span>Reducción de incidentes en 95%</span>
            </div>
            <div className="flex items-center gap-2 text-[#1D3C5B]">
              <FiTruck />
              <span>Mejora en eficiencia operativa</span>
            </div>
            <div className="flex items-center gap-2 text-[#1D3C5B]">
              <FiUsers />
              <span>Mayor satisfacción del cliente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Security = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Seguridad Avanzada',
      description: 'Sistemas de última generación para protección y monitoreo continuo de unidades.'
    },
    {
      icon: FiRadio,
      title: 'Comunicación en Tiempo Real',
      description: 'Red de comunicación dedicada para respuesta inmediata y coordinación efectiva.'
    },
    {
      icon: FiTruck,
      title: 'Monitoreo de Flota',
      description: 'Seguimiento en tiempo real de cada unidad con alertas automáticas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#111B40] mb-4">
            Seguridad y Tecnología
          </h2>
          <p className="text-[#283050] max-w-2xl mx-auto">
            Utilizamos la más avanzada tecnología para garantizar la seguridad
            de tu carga y la eficiencia en el transporte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              delay={index * 200}
            />
          ))}
        </div>

        <CaseStudy />
      </div>
    </div>
  );
};

export default Security; 