import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaRoute, FaDesktop, FaArrowRight } from 'react-icons/fa';
import { FiGlobe, FiAnchor, FiTruck } from 'react-icons/fi';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Tu seguridad, nuestro destino",
    "Protegiendo tu carga 24/7",
    "Tecnología al servicio de tu tranquilidad"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    enter: { y: 20, opacity: 0 },
    center: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const features = [
    { 
      title: "Frontera Norte", 
      description: "Nuevo Laredo, Ciudad Juárez y Piedras Negras",
      icon: <FiGlobe className="text-3xl mb-4" />,
      link: "/rutas"
    },
    { 
      title: "Puertos Estratégicos", 
      description: "Manzanillo, Tampico y Altamira",
      icon: <FiAnchor className="text-3xl mb-4" />,
      link: "/rutas"
    },
    { 
      title: "Rutas Comerciales", 
      description: "Bajío, Guadalajara y Zona Metropolitana",
      icon: <FiTruck className="text-3xl mb-4" />,
      link: "/rutas"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1D3C5B]/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/public/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido Principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="h-24 md:h-32 mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={phrases[currentPhrase]}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-5xl md:text-7xl font-bold text-white"
              >
                {phrases[currentPhrase]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Sistema integral de rastreo y monitoreo para tu tranquilidad
          </motion.p>
        </motion.div>

        {/* Botones CTA */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-6 mb-20"
          variants={itemVariants}
        >
          <Link to="/servicios">
            <motion.button
              className="px-8 py-4 bg-white text-[#1D3C5B] rounded-lg font-semibold text-lg
                hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce más
              <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <Link to="/contacto">
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg 
                font-semibold text-lg hover:bg-white hover:text-[#1D3C5B] transition-all duration-300
                flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <motion.button
                className="w-full text-left bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-white
                  border border-white border-opacity-20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80">
                  Saber más <FaArrowRight className="text-xs" />
                </div>
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
