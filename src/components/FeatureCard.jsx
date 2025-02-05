import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaBoxOpen, FaUsers, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureCard = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Agiliza las operaciones",
      description: "Agiliza las operaciones de su empresa o negocio."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Previene pérdidas",
      description: "Previene la pérdida de mercancías de gran magnitud."
    },
    {
      icon: <FaUsers className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Satisface necesidades",
      description: "Permite satisfacer las necesidades inmediatas de sus clientes ampliando su mercado."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            className="text-4xl font-bold text-[#1D3C5B] mb-6"
          >
            Evite riesgos, con Rastreo Territorial usted...
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl shadow-lg p-8 hover:bg-[#1D3C5B] transition-all duration-300
                transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1D3C5B] mb-4 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8"
          >
            ¿Listo para proteger su inversión con la mejor tecnología en seguridad?
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/servicios">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#1D3C5B] text-white rounded-lg font-semibold
                  hover:bg-[#2A4E73] transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Ver Todos los Servicios
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureCard; 