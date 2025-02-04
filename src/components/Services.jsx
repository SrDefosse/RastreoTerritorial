import { useState, useEffect } from 'react';
import { FaShieldAlt, FaSearchLocation, FaRoute, FaUserShield, FaHeadset, FaBell } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon: Icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`transform transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <div
        className={`bg-[#FCFEFE] rounded-xl p-6 cursor-pointer
          border border-[#D2C7CC] transition-all duration-300
          hover:shadow-xl ${isExpanded ? 'scale-105' : 'hover:scale-103'}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-4xl mb-4 text-[#1D3C5B] transform transition-all duration-300 hover:scale-110">
          <Icon />
        </div>
        <h3 className="text-xl font-bold text-[#111B40] mb-3">{title}</h3>
        <p className="text-[#283050] mb-4">{description}</p>
        
        <div className={`overflow-hidden transition-all duration-300
          ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
          <div className="space-y-3 text-sm text-[#283050] mt-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <FaUserShield className="text-[#524E62]" />
              <span>Personal altamente capacitado</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeadset className="text-[#524E62]" />
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBell className="text-[#524E62]" />
              <span>Alertas en tiempo real</span>
            </div>
          </div>
        </div>

        <button className="mt-4 text-[#1D3C5B] hover:text-[#524E62] font-medium
          transition-colors duration-300 flex items-center gap-2">
          {isExpanded ? 'Ver menos' : 'Más información'}
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: FaShieldAlt,
      title: 'Custodia en tránsito',
      description: 'Protección continua para tu carga durante todo el trayecto con los más altos estándares de seguridad.'
    },
    {
      icon: FaSearchLocation,
      title: 'Monitoreo 24/7',
      description: 'Vigilancia constante de tus envíos las 24 horas del día con tecnología de última generación.'
    },
    {
      icon: FaRoute,
      title: 'Rastreo en tiempo real',
      description: 'Seguimiento preciso de la ubicación de tu carga en todo momento con actualizaciones instantáneas.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#111B40] text-center mb-12">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 