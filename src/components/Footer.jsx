import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const navigation = [
    { name: 'Inicio', to: '/' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Rutas', to: '/rutas' },
    { name: 'Seguridad', to: '/seguridad' },
    { name: 'Contacto', to: '/contacto' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Política de Privacidad', to: '/privacidad' }
  ];

  const socialMedia = [
    { icon: <FaFacebook />, link: 'https://facebook.com/rastreoterritorial' },
    { icon: <FaInstagram />, link: 'https://instagram.com/rastreoterritorial' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com/company/rastreoterritorial' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/+524772870874' }
  ];

  const contactInfo = {
    address: 'C. Aquiles Serdán 520, Obregon, 37320 León de los Aldama, Gto.',
    phone: '+52 477 287 0874',
    emails: [
      'logistica@rastreoterritorial.com'
    ]
  };

  return (
    <footer className="bg-[#1D3C5B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <img src="/public/images/logo.png" alt="Rastreo Territorial" className="h-12" />
            <p className="text-gray-300 mt-4">
              Empresa mexicana dedicada a la custodia de autotransporte, brindando seguridad y tranquilidad a nuestros clientes.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              {contactInfo.emails.map((email, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaEnvelope className="text-xl" />
                  <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Redes Sociales y Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-xl transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Rastreo Territorial. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 