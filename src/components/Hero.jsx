import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FiGlobe, FiAnchor, FiTruck } from 'react-icons/fi';
import MaxWidthWrapper from './MaxWidthWrapper';

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Su seguridad, nuestro destino",
    "Protegiendo su carga 24/7",
    "Tecnología al servicio de su tranquilidad"
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
    <section className="relative flex items-center justify-center min-h-[100dvh] overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1D3C5B]/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/18749847/18749847-uhd_2560_1440_60fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido Principal */}
      <MaxWidthWrapper className="relative z-10 h-full">
        <motion.div
          className="w-full py-10 sm:py-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8">
            <div className="mb-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phrases[currentPhrase]}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                >
                  {phrases[currentPhrase]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Empresa mexicana dedicada a la custodia de autotransporte.
            </motion.p>
          </motion.div>

          {/* Botones CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <Link to="/servicios" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1D3C5B] rounded-lg font-semibold text-sm sm:text-base
                  hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conoce más
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/contacto" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg 
                  font-semibold text-sm sm:text-base hover:bg-white hover:text-[#1D3C5B] transition-all duration-300
                  flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contáctanos
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <motion.button
                  className="w-full h-[160px] sm:h-[180px] text-left bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-5 text-white
                    border border-white border-opacity-20 transition-all duration-300 flex flex-col justify-between"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div>
                    {feature.icon}
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs font-medium text-white/80">
                    Saber más <FaArrowRight className="text-[10px]" />
                  </div>
                </motion.button>
              </Link>
            ))}
          </motion.div>

          {/* Floating WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 right-8 hidden lg:block"
          >
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
