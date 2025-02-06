import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiTool, 
  FiMap, 
  FiPhone, 
  FiHelpCircle, 
  FiShield,
  FiMenu, 
  FiX 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, icon: <FiHome size={20} />, label: 'Inicio', path: '/' },
    { id: 2, icon: <FiTool size={20} />, label: 'Servicios', path: '/servicios' },
    { id: 3, icon: <FiMap size={20} />, label: 'Rutas', path: '/rutas' },
    { id: 5, icon: <FiHelpCircle size={20} />, label: 'FAQ', path: '/faq' },
    { id: 6, icon: <FiPhone size={20} />, label: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      {/* Botón móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white shadow-md text-[#111B40] hover:text-[#524E62] md:hidden"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar vertical */}
      <motion.nav
        className={`fixed left-0 top-0 h-full bg-[#111B40] shadow-xl z-40 flex flex-col transition-all duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isExpanded ? 'md:w-64' : 'md:w-16'}`}
        initial={false}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0 relative h-12 w-32 flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className={`absolute transition-all duration-300 h-10 w-10 ${
                isExpanded ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}

              onError={(e) => {
                e.target.src = '';
                e.target.className = 'hidden';
              }}
            />
            <img
              src="/images/logo.png"
              alt="Logo Completo"
              className={`absolute transition-all duration-300 h-12 w-auto ${
                isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              onError={(e) => {
                e.target.src = '';
                e.target.className = 'hidden';
              }}
            />
          </Link>
        </div>

        {/* Línea decorativa */}
        <div className="px-4">
          <div className="h-px bg-gradient-to-r from-[#1D3C5B] to-[#524E62]" />
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center space-y-2 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-[#1D3C5B]"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className={`absolute left-0 w-1 h-8 rounded-full transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#D2C7CC]'
                    : 'bg-transparent group-hover:bg-[#D2C7CC]/30'
                }`}
                layoutId="navIndicator"
              />
              <div className="flex items-center min-w-[200px]">
                <span className={`text-xl ${
                  location.pathname === item.path
                    ? 'text-[#D2C7CC]'
                    : 'text-[#D2C7CC]/70 group-hover:text-[#D2C7CC]'
                }`}>
                  {item.icon}
                </span>
                <span
                  className={`ml-4 text-base whitespace-nowrap transition-all duration-300 ${
                    isExpanded ? 'opacity-100 translate-x-0' : 'md:opacity-0 md:-translate-x-4 opacity-100 translate-x-0'
                  } ${
                    location.pathname === item.path
                      ? 'text-[#D2C7CC] font-medium'
                      : 'text-[#D2C7CC]/70 group-hover:text-[#D2C7CC]'
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4">
          <div className={`text-sm text-[#D2C7CC]/70 whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            © {new Date().getFullYear()} Rastreo Territorial
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar; 