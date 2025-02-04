import { useState } from 'react';
import { FiSend, FiCheck } from 'react-icons/fi';

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
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'El nombre es requerido';
    if (!formData.correo) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido';
    }
    if (!formData.telefono) newErrors.telefono = 'El teléfono es requerido';
    if (!formData.mensaje) newErrors.mensaje = 'El mensaje es requerido';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulamos el envío
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset después de 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          nombre: '',
          correo: '',
          telefono: '',
          mensaje: ''
        });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500">
          <h2 className="text-3xl font-bold text-[#111B40] mb-8 text-center">
            Contáctanos
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FloatingLabel
              id="nombre"
              label="Nombre completo"
              value={formData.nombre}
              onChange={(e) => {
                setFormData({ ...formData, nombre: e.target.value });
                setErrors({ ...errors, nombre: '' });
              }}
              error={errors.nombre}
            />

            <FloatingLabel
              id="correo"
              label="Correo electrónico"
              type="email"
              value={formData.correo}
              onChange={(e) => {
                setFormData({ ...formData, correo: e.target.value });
                setErrors({ ...errors, correo: '' });
              }}
              error={errors.correo}
            />

            <FloatingLabel
              id="telefono"
              label="Teléfono"
              type="tel"
              value={formData.telefono}
              onChange={(e) => {
                setFormData({ ...formData, telefono: e.target.value });
                setErrors({ ...errors, telefono: '' });
              }}
              error={errors.telefono}
            />

            <div className="relative">
              <textarea
                id="mensaje"
                value={formData.mensaje}
                onChange={(e) => {
                  setFormData({ ...formData, mensaje: e.target.value });
                  setErrors({ ...errors, mensaje: '' });
                }}
                rows="4"
                className={`w-full px-4 py-3 text-base border rounded-lg outline-none transition-all duration-200
                  ${errors.mensaje ? 'border-[#F87171] animate-shake' : 'border-[#D2C7CC]'}
                  focus:border-[#1D3C5B] focus:ring-2 focus:ring-[#1D3C5B]/20`}
                required
              />
              <label
                htmlFor="mensaje"
                className={`absolute left-4 transition-all duration-200 pointer-events-none
                  ${formData.mensaje 
                    ? 'transform -translate-y-7 scale-90 text-[#1D3C5B] font-medium'
                    : 'transform translate-y-3 text-gray-500'
                  }`}
              >
                Mensaje
              </label>
              {errors.mensaje && (
                <p className="mt-1 text-sm text-[#F87171]">{errors.mensaje}</p>
              )}
            </div>

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
        </div>
      </div>
    </div>
  );
};

export default ContactForm; 