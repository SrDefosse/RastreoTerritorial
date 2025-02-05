import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ 
  to, 
  variant = 'primary', 
  children, 
  className = '',
  icon = false,
  onClick
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-[#1D3C5B] hover:bg-opacity-90 shadow-lg",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D3C5B]",
    outline: "bg-transparent border-2 border-[#1D3C5B] text-[#1D3C5B] hover:bg-[#1D3C5B] hover:text-white"
  };

  const content = (
    <>
      {children}
      {icon && <FaArrowRight className={`transition-transform duration-300 group-hover:translate-x-1 ${
        variant === 'secondary' ? 'group-hover:text-[#1D3C5B]' : ''
      }`} />}
    </>
  );

  if (to) {
    return (
      <Link to={to}>
        <motion.button
          className={`${baseStyles} ${variants[variant]} group ${className}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {content}
    </motion.button>
  );
};

export default Button; 