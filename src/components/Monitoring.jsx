import { useState } from 'react';
import { FiFilter, FiTruck, FiClock, FiUser, FiMapPin } from 'react-icons/fi';

// Datos de ejemplo
const initialVehicles = [
  {
    id: 1,
    position: { lat: 19.4326, lng: -99.1332 },
    status: 'En ruta',
    lastUpdate: '2024-01-30T15:30:00',
    officer: 'Juan Pérez',
    route: 'CDMX - Querétaro',
    speed: '80 km/h',
    estimatedArrival: '2024-01-30T18:30:00'
  },
  {
    id: 2,
    position: { lat: 20.5881, lng: -100.3889 },
    status: 'Detenido',
    lastUpdate: '2024-01-30T15:28:00',
    officer: 'María García',
    route: 'Querétaro - San Luis',
    speed: '0 km/h',
    estimatedArrival: '2024-01-30T20:45:00'
  },
  {
    id: 3,
    position: { lat: 21.1250, lng: -101.6859 },
    status: 'Alerta',
    lastUpdate: '2024-01-30T15:25:00',
    officer: 'Carlos Ruiz',
    route: 'León - Aguascalientes',
    speed: '45 km/h',
    estimatedArrival: '2024-01-30T19:15:00'
  }
];

const statusColors = {
  'En ruta': 'bg-green-500',
  'Detenido': 'bg-yellow-500',
  'Alerta': 'bg-red-500'
};

const VehicleCard = ({ vehicle, isSelected, onClick }) => {
  return (
    <div
      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        isSelected ? 'bg-[#1D3C5B] text-white scale-102' : 'bg-white hover:bg-gray-50'
      } shadow-md`}
      onClick={() => onClick(vehicle)}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">
          <FiTruck />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{vehicle.route}</h3>
            <span className={`px-2 py-1 rounded-full text-xs ${statusColors[vehicle.status]} text-white`}>
              {vehicle.status}
            </span>
          </div>
          <div className="mt-2 space-y-1 text-sm">
            <p className="flex items-center gap-2">
              <FiUser className="opacity-70" />
              {vehicle.officer}
            </p>
            <p className="flex items-center gap-2">
              <FiClock className="opacity-70" />
              {new Date(vehicle.lastUpdate).toLocaleTimeString()}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="opacity-70" />
              {`${vehicle.position.lat.toFixed(4)}, ${vehicle.position.lng.toFixed(4)}`}
            </p>
          </div>
        </div>
      </div>
      
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-white/20 space-y-2 text-sm">
          <p>
            <span className="font-medium">Velocidad:</span>
            <span className="ml-2">{vehicle.speed}</span>
          </p>
          <p>
            <span className="font-medium">Llegada estimada:</span>
            <span className="ml-2">
              {new Date(vehicle.estimatedArrival).toLocaleString()}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

const VehicleList = ({ vehicles, selectedVehicle, onVehicleClick }) => {
  return (
    <div className="space-y-4">
      {vehicles.map(vehicle => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          isSelected={selectedVehicle?.id === vehicle.id}
          onClick={onVehicleClick}
        />
      ))}
    </div>
  );
};

const Monitoring = () => {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [statusFilter, setStatusFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesStatus = statusFilter === 'todos' || vehicle.status === statusFilter;
    const matchesSearch = vehicle.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.officer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#111B40] mb-6">
          Panel de Monitoreo
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel de control */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filtros */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <FiFilter />
                    Filtrar por estado
                  </label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1D3C5B]"
                  >
                    <option value="todos">Todos</option>
                    <option value="En ruta">En ruta</option>
                    <option value="Detenido">Detenido</option>
                    <option value="Alerta">Alerta</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar
                  </label>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por ruta u oficial..."
                    className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1D3C5B]"
                  />
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-4">Resumen</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">En ruta</p>
                  <p className="text-2xl font-bold text-green-600">
                    {vehicles.filter(v => v.status === 'En ruta').length}
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">Detenidos</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {vehicles.filter(v => v.status === 'Detenido').length}
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg col-span-2">
                  <p className="text-sm text-red-800">Alertas</p>
                  <p className="text-2xl font-bold text-red-600">
                    {vehicles.filter(v => v.status === 'Alerta').length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de vehículos */}
          <div className="lg:col-span-2">
            <VehicleList
              vehicles={filteredVehicles}
              selectedVehicle={selectedVehicle}
              onVehicleClick={setSelectedVehicle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring; 