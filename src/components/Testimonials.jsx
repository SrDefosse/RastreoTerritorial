import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Roberto Méndez',
    company: 'Transportes del Norte',
    role: 'Director General',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'El servicio de rastreo ha mejorado significativamente la eficiencia de nuestra flota. La atención al cliente es excepcional.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ana García',
    company: 'Logística Express',
    role: 'Gerente de Operaciones',
    image: 'https://images.pexels.com/photos/10542445/pexels-photo-10542445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'La plataforma es muy intuitiva y nos ha ayudado a optimizar nuestras rutas de manera efectiva.',
    rating: 5
  },
  {
    id: 3,
    name: 'Carlos Ruiz',
    company: 'Transportadora Central',
    role: 'Supervisor de Flota',
    image: 'https://images.pexels.com/photos/7366257/pexels-photo-7366257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Excelente servicio y soporte técnico. Han sido un aliado clave en nuestro crecimiento.',
    rating: 4
  }
];

const TestimonialCard = ({ testimonial, position }) => {
  const getCardStyle = () => {
    switch (position) {
      case 'center':
        return 'z-30 opacity-100 scale-100 translate-x-0';
      case 'left':
        return 'z-20 opacity-60 scale-95 -translate-x-[60%] rotate-[-5deg]';
      case 'right':
        return 'z-20 opacity-60 scale-95 translate-x-[60%] rotate-[5deg]';
      default:
        return 'z-10 opacity-0 scale-90 translate-x-0';
    }
  };

  return (
    <div className={`absolute inset-0 transition-all duration-500 ${getCardStyle()}`}>
      <div className="bg-white rounded-xl shadow-xl p-6 transform transition-transform hover:scale-[1.02]">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/64';
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#111B40]">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-sm font-medium text-[#1D3C5B]">{testimonial.company}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`${
                  i < testimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700 italic">"{testimonial.content}"</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D3C5B] to-[#524E62] rounded-b-xl" />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getPosition = (index) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex + 1) % testimonials.length) return 'right';
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return 'left';
    return 'hidden';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#111B40] text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative h-[400px]">
          {/* Carrusel */}
          <div className="relative h-[300px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                position={getPosition(index)}
              />
            ))}
          </div>

          {/* Controles */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white shadow-md text-[#1D3C5B] hover:text-[#524E62] transition-colors disabled:opacity-50"
            >
              <FiChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#1D3C5B] w-4'
                      : 'bg-[#D2C7CC]'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white shadow-md text-[#1D3C5B] hover:text-[#524E62] transition-colors disabled:opacity-50"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;