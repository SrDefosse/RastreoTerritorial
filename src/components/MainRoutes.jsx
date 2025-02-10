import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiNavigation2 } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaTruck, FaIndustry, FaShip, FaWarehouse, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const RouteCard = ({ route, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300
        ${isActive ? 'scale-105 border-2 border-[#1D3C5B]' : 'hover:scale-102'}`}
      onClick={() => onClick(route)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-[#1D3C5B]' : 'bg-gray-100'} 
          transition-colors duration-300`}>
          {route.icon}
        </div>
        <div>
          <h3 className="font-semibold text-[#111B40] text-lg">{route.title}</h3>
          <p className="text-sm text-gray-600">{route.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <FiNavigation2 className="text-[#524E62] rotate-180" />
            <span className="text-[#283050]">{route.stats}</span>
          </div>
          <span className="text-sm text-gray-500">{route.highlight}</span>
        </div>
      </div>
    </div>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const routes = [
    {
      title: "Frontera Norte Este",
      description: "Nuevo Laredo, Tamaulipas y Piedras Negras, Coahuila",
      icon: <FaTruck className="text-2xl text-white" />,
      stats: "1,200+ km",
      highlight: "Alta seguridad"
    },
    {
      title: "Frontera Norte Oeste",
      description: "Ciudad Juárez, Chihuahua y rutas principales",
      icon: <FaIndustry className="text-2xl text-white" />,
      stats: "2,000+ km",
      highlight: "24/7 monitoreo"
    },
    {
      title: "Puertos del Pacífico",
      description: "Manzanillo, Colima y conexiones",
      icon: <FaShip className="text-2xl text-white" />,
      stats: "800+ km",
      highlight: "Carga marítima"
    },
    {
      title: "Puertos del Golfo",
      description: "Tampico, Altamira y Veracruz",
      icon: <FaShip className="text-2xl text-white" />,
      stats: "900+ km",
      highlight: "Multimodal"
    },
    {
      title: "Corredor Occidente",
      description: "Guadalajara, Jalisco y región Bajío",
      icon: <FaTruck className="text-2xl text-white" />,
      stats: "350+ km",
      highlight: "Alta frecuencia"
    },
    {
      title: "Zona Metropolitana",
      description: "Estado de México y Área Metropolitana",
      icon: <FaWarehouse className="text-2xl text-white" />,
      stats: "150+ km",
      highlight: "Distribución"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-[#1D3C5B] mb-4"
          >
            Rutas Principales
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nuestras oficinas, ubicadas en la región del Bajío, nos permiten ofrecer un servicio rápido 
            y eficaz en las rutas más importantes de comercio.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-md text-gray-500 max-w-2xl mx-auto mt-4"
          >
            *Además de estas rutas principales, cubrimos todas las rutas nacionales según las necesidades de nuestros clientes.
          </motion.p>
        </motion.div>

        {/* Mapa de México con Rutas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#1D3C5B] mb-4">
                  Cobertura Nacional
                </h3>
                <p className="text-gray-600 mb-6">
                  Nuestras rutas principales conectan los puntos más importantes del comercio en México:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                    Frontera Norte: Nuevo Laredo, Ciudad Juárez, Piedras Negras
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                    Puertos: Manzanillo, Tampico, Altamira
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                    Centro: Bajío, CDMX, Guadalajara
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square">
                <img
                  src="/images/MainRoutesImage.jpg"
                  alt="Rastreo Territorial"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-[#1D3C5B]/10 rounded-lg" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rutas Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {routes.map((route, index) => (
            <Link key={index} to={isHomePage ? "/rutas" : `https://wa.me/+524772870874`} target={!isHomePage ? "_blank" : undefined} className="h-full">
              <motion.div
                variants={itemVariants}
                className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300
                  hover:scale-105 hover:shadow-xl border border-gray-100 h-full flex flex-col"
              >
                <div className="bg-[#1D3C5B] p-4 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/10">
                    {route.icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    {route.title}
                  </h3>
                </div>

                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-6">
                    {route.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <FiNavigation2 className="text-[#1D3C5B]" />
                      <span className="text-[#1D3C5B] font-medium">{route.stats}</span>
                    </div>
                    <span className="text-sm bg-blue-50 text-[#1D3C5B] px-4 py-2 rounded-full
                      font-medium border border-blue-100">
                      {route.highlight}
                    </span>
                  </div>
                </div>

                {isHomePage ? (
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-end items-center">
                    <span className="text-sm text-[#1D3C5B] font-medium flex items-center gap-2">
                      Ver detalles <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                ) : (
                  <div className="px-6 py-3 bg-green-50 border-t border-green-100 flex justify-end items-center group">
                    <span className="text-sm text-green-600 font-medium flex items-center gap-2">
                      Consultar disponibilidad <FaWhatsapp className="text-lg transform group-hover:scale-110 transition-transform" />
                    </span>
                  </div>
                )}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MainRoutes; 