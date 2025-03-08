import { useState } from 'react';
import { FiSend, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const FloatingLabel = ({ id, label, value, onChange, type = 'text', required = true, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-all duration-200
          ${error ? 'border-[#F87171] animate-shake' : 'border-[#D2C7CC]'}
          ${isFocused || value ? 'border-[#1D3C5B]' : ''}
          focus:ring-2 focus:ring-[#1D3C5B]/20`}
        required={required}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none
          ${(isFocused || value) 
            ? 'transform -translate-y-7 scale-90 text-[#1D3C5B] font-medium'
            : 'transform translate-y-3 text-gray-500'
          }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-sm text-[#F87171]">{error}</p>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = {
    address: 'C. Aquiles Serdán 520, Obregon, 37320 León de los Aldama, Gto.',
    phone: '+52 477 287 0874',
    emails: [
      'logistica@rastreoterritorial.com'
    ]
  };

  const socialMedia = [
    { 
      icon: <FaWhatsapp className="text-2xl" />, 
      name: 'WhatsApp',
      link: 'https://wa.me/+524772870874' 
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    if (!formData.message) newErrors.message = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('http://rastreoterritorial.com.mx/send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.text();
        
        setIsSubmitting(false);
        
        if (result === "success") {
          setIsSuccess(true);
          // Reset después de 3 segundos
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              email: '',
              message: ''
            });
          }, 3000);
        } else {
          setErrors({ server: 'Error al enviar el mensaje' });
        }
      } catch (error) {
        setIsSubmitting(false);
        setErrors({ server: 'Error de conexión. Por favor, inténtelo de nuevo.' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#1D3C5B] mb-4"
          >
            Contáctenos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Estamos aquí para responder sus preguntas y brindarle la mejor atención
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-[#1D3C5B] mb-6">Envíenos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FloatingLabel
                id="name"
                label="Nombre completo"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrors({ ...errors, name: '' });
                }}
                error={errors.name}
              />

              <FloatingLabel
                id="email"
                label="Correo electrónico"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: '' });
                }}
                error={errors.email}
              />

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    setErrors({ ...errors, message: '' });
                  }}
                  rows="4"
                  className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-all duration-200
                    ${errors.message ? 'border-[#F87171] animate-shake' : 'border-[#D2C7CC]'}
                    focus:border-[#1D3C5B] focus:ring-2 focus:ring-[#1D3C5B]/20`}
                  required
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-200 pointer-events-none
                    ${formData.message 
                      ? 'transform -translate-y-7 scale-90 text-[#1D3C5B] font-medium'
                      : 'transform translate-y-3 text-gray-500'
                    }`}
                >
                  Mensaje
                </label>
                {errors.message && (
                  <p className="mt-1 text-sm text-[#F87171]">{errors.message}</p>
                )}
              </div>

              {errors.server && (
                <div className="p-3 bg-red-100 border border-red-200 rounded-lg text-red-700">
                  <p>{errors.server}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium
                  transition-all duration-300 transform
                  ${isSuccess 
                    ? 'bg-green-500'
                    : 'bg-[#1D3C5B] hover:bg-[#524E62] active:scale-95 hover:scale-100'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : isSuccess ? (
                    <>
                      <FiCheck className="w-5 h-5" />
                      ¡Mensaje enviado!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-[#1D3C5B] mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-[#1D3C5B] mt-1" />
                <div>
                  <h4 className="font-medium text-gray-700">Dirección</h4>
                  <p className="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-2xl text-[#1D3C5B] mt-1" />
                <div>
                  <h4 className="font-medium text-gray-700">Teléfono</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-[#1D3C5B] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-[#1D3C5B] mt-1" />
                <div>
                  <h4 className="font-medium text-gray-700">Correo Electrónico</h4>
                  {contactInfo.emails.map((email, index) => (
                    <a 
                      key={index}
                      href={`mailto:${email}`}
                      className="block text-gray-600 hover:text-[#1D3C5B] transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-8">
              <h4 className="font-medium text-gray-700 mb-4">Contáctanos por WhatsApp</h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 rounded-lg hover:bg-[#1D3C5B] text-[#1D3C5B] hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-[#1D3C5B] mb-6">Ubicación</h3>
          <div className="rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5818627977333!2d-101.68486722496559!3d21.129230180545324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bc74b43e81e2f%3A0xcf58f1b1d443af90!2srastreo%20territorial%2C%20sa%20de%20cv!5e0!3m2!1ses-419!2smx!4v1738718904505!5m2!1ses-419!2smx" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm; 