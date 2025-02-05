import { useState } from 'react';
import { FiMapPin, FiTruck, FiNavigation2, FiGlobe, FiAnchor } from 'react-icons/fi';
import Button from './Button';

const RouteCard = ({ route, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition-all duration-300
        ${isActive ? 'scale-105 border-2 border-[#1D3C5B]' : 'hover:scale-102'}`}
      onClick={() => onClick(route)}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg ${isActive ? 'bg-[#1D3C5B]' : 'bg-gray-100'} 
          transition-colors duration-300`}>
          {route.type === 'frontera' ? (
            <FiGlobe className={`text-2xl ${isActive ? 'text-white' : 'text-[#1D3C5B]'}`} />
          ) : route.type === 'puerto' ? (
            <FiAnchor className={`text-2xl ${isActive ? 'text-white' : 'text-[#1D3C5B]'}`} />
          ) : (
            <FiTruck className={`text-2xl ${isActive ? 'text-white' : 'text-[#1D3C5B]'}`} />
          )}
        </div>
        <div>
          <h3 className="font-semibold text-[#111B40] text-lg">{route.name}</h3>
          <p className="text-sm text-gray-600">
            {route.type === 'frontera' ? 'Frontera' : route.type === 'puerto' ? 'Puerto Marítimo' : 'Ruta Comercial'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <FiNavigation2 className="text-[#524E62] rotate-180" />
            <span className="text-[#283050]">{route.origin}</span>
          </div>
          <span className="text-sm text-gray-500">Origen</span>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#1D3C5B] to-[#524E62]" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <FiNavigation2 className="text-[#524E62]" />
            <span className="text-[#283050]">{route.destination}</span>
          </div>
          <span className="text-sm text-gray-500">Destino</span>
        </div>

        {isActive && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-sm text-[#283050]">
              <p className="mb-2">
                <strong>Puntos clave:</strong>
              </p>
              <ul className="space-y-2">
                {route.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FiMapPin className="text-[#524E62]" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[#1D3C5B] font-medium">{route.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MainRoutes = () => {
  const [activeRoute, setActiveRoute] = useState(null);
  const [filter, setFilter] = useState('todos');

  const routes = [
    {
      name: 'Nuevo Laredo',
      type: 'frontera',
      origin: 'CDMX',
      destination: 'Nuevo Laredo, Tamaulipas',
      keyPoints: ['Querétaro', 'San Luis Potosí', 'Monterrey'],
      description: 'Principal punto de comercio con Estados Unidos'
    },
    {
      name: 'Piedras Negras',
      type: 'frontera',
      origin: 'CDMX',
      destination: 'Piedras Negras, Coahuila',
      keyPoints: ['Querétaro', 'San Luis Potosí', 'Saltillo'],
      description: 'Conexión estratégica con Texas'
    },
    {
      name: 'Ciudad Juárez',
      type: 'frontera',
      origin: 'CDMX',
      destination: 'Ciudad Juárez, Chihuahua',
      keyPoints: ['Zacatecas', 'Torreón', 'Chihuahua'],
      description: 'Punto clave para el comercio fronterizo'
    },
    {
      name: 'Manzanillo',
      type: 'puerto',
      origin: 'CDMX',
      destination: 'Manzanillo, Colima',
      keyPoints: ['Querétaro', 'Guadalajara', 'Colima'],
      description: 'Principal puerto del Pacífico'
    },
    {
      name: 'Tampico-Altamira',
      type: 'puerto',
      origin: 'CDMX',
      destination: 'Tampico, Tamaulipas',
      keyPoints: ['Pachuca', 'Huejutla', 'Altamira'],
      description: 'Puerto estratégico del Golfo'
    },
    {
      name: 'Guadalajara',
      type: 'comercial',
      origin: 'CDMX',
      destination: 'Guadalajara, Jalisco',
      keyPoints: ['Querétaro', 'León', 'La Piedad'],
      description: 'Centro comercial del occidente'
    },
    {
      name: 'Bajío',
      type: 'comercial',
      origin: 'CDMX',
      destination: 'Querétaro-León',
      keyPoints: ['Querétaro', 'Celaya', 'Salamanca', 'León'],
      description: 'Corredor industrial del Bajío'
    },
    {
      name: 'Zona Metropolitana',
      type: 'comercial',
      origin: 'CDMX',
      destination: 'Estado de México',
      keyPoints: ['Toluca', 'Tlalnepantla', 'Ecatepec', 'Cuautitlán'],
      description: 'Principal zona industrial del país'
    }
  ];

  const filteredRoutes = filter === 'todos' ? routes : routes.filter(route => route.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111B40] mb-4">
            Nuestras Rutas Estratégicas
          </h2>
          <p className="text-[#283050] max-w-3xl mx-auto mb-8">
            Manejamos las rutas más importantes de comercio tanto nacional como de importación y exportación, 
            conectando los principales puntos estratégicos del país.
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={filter === 'todos' ? 'primary' : 'outline'}
              onClick={() => setFilter('todos')}
            >
              Todas las rutas
            </Button>
            <Button
              variant={filter === 'frontera' ? 'primary' : 'outline'}
              onClick={() => setFilter('frontera')}
            >
              <FiGlobe className="mr-2" />
              Fronteras
            </Button>
            <Button
              variant={filter === 'puerto' ? 'primary' : 'outline'}
              onClick={() => setFilter('puerto')}
            >
              <FiAnchor className="mr-2" />
              Puertos
            </Button>
            <Button
              variant={filter === 'comercial' ? 'primary' : 'outline'}
              onClick={() => setFilter('comercial')}
            >
              <FiTruck className="mr-2" />
              Comerciales
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((route, index) => (
            <RouteCard
              key={index}
              route={route}
              isActive={activeRoute?.name === route.name}
              onClick={setActiveRoute}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainRoutes; 