import { motion } from 'framer-motion';
import { FaSatellite, FaChartLine, FaHeadset } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaSatellite className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Monitoreo en Tiempo Real",
      features: [
        "Equipamos cada transporte y unidad de vigilancia con tecnología GPS de última generación.",
        "Nuestros operadores de monitoreo reciben reportes constantes vía mensajes."
      ]
    },
    {
      icon: <FaHeadset className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Comunicación Constante",
      features: [
        "Mantenemos canales directos de comunicación entre nuestro personal en tránsito y nuestras oficinas centrales."
      ]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#1D3C5B] group-hover:text-white" />,
      title: "Reportes Detallados",
      features: [
        "Proporcionamos informes detallados a nuestros clientes en intervalos regulares."
      ]
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
            className="text-4xl font-bold text-[#1D3C5B] mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Nos especializamos en brindar soluciones integrales para el transporte de mercancías. 
            Nuestra misión es garantizar que sus productos lleguen a su destino de manera segura y eficiente, 
            minimizando los riesgos asociados con el transporte en carretera.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl shadow-lg p-8 hover:bg-[#1D3C5B] transition-all duration-300
                transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-white/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1D3C5B] mb-6 group-hover:text-white">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 group-hover:text-gray-200">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Imágenes de Servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.pexels.com/photos/18290480/pexels-photo-18290480/free-photo-of-white-truck-in-motion-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Centro de monitoreo"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C5B]/80 to-transparent rounded-xl">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Centro de Monitoreo 24/7</h3>
                  <p className="text-gray-200">Seguimiento en tiempo real de todas las unidades</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="Comunicación en tiempo real"
                  className="w-full h-[185px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C5B]/80 to-transparent rounded-xl">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-sm font-semibold">Comunicación Efectiva</h3>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                  alt="Reportes detallados"
                  className="w-full h-[185px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C5B]/80 to-transparent rounded-xl">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-sm font-semibold">Reportes Detallados</h3>
                  </div>
                </div>
              </div>
              <div className="relative col-span-2">
                <img
                  src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg"
                  alt="Tecnología avanzada"
                  className="w-full h-[185px] object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D3C5B]/80 to-transparent rounded-xl">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-sm font-semibold">Tecnología de Punta</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 