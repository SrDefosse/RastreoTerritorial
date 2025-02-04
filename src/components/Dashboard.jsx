import { useState } from 'react';
import { FiTruck, FiMap, FiClock, FiBarChart2, FiCalendar, FiShield } from 'react-icons/fi';

const StatCard = ({ icon: Icon, title, value, change, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-102 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-[#111B40]">{value}</h3>
          {change && (
            <p className={`text-sm mt-1 ${
              change > 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {change > 0 ? '+' : ''}{change}% vs mes anterior
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color} text-white`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};

const Chart = ({ data, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-[#111B40] mb-4">{title}</h3>
      <div className="h-48 flex items-end justify-between gap-2">
        {data.map((value, index) => (
          <div
            key={index}
            className="relative flex-1 bg-[#1D3C5B] rounded-t-lg transition-all duration-500"
            style={{
              height: `${value}%`,
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#283050]">
              {value}%
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>
    </div>
  );
};

const InfoCard = ({ title, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-[#111B40] mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-[#283050]">{item.label}</span>
            </div>
            <span className="font-medium text-[#111B40]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('general');

  const stats = [
    {
      icon: FiTruck,
      title: 'Rutas Activas',
      value: '124',
      change: 5.2,
      color: 'bg-[#1D3C5B]'
    },
    {
      icon: FiMap,
      title: 'Cobertura',
      value: '32 Estados',
      change: 2.1,
      color: 'bg-[#524E62]'
    },
    {
      icon: FiClock,
      title: 'Tiempo Promedio',
      value: '4.2 hrs',
      change: -1.5,
      color: 'bg-[#1D3C5B]'
    },
    {
      icon: FiShield,
      title: 'Nivel de Seguridad',
      value: '99.9%',
      change: 0.3,
      color: 'bg-[#524E62]'
    }
  ];

  const performanceData = [65, 59, 80, 81, 56, 55, 70];

  const routeTypes = [
    { label: 'Rutas Urbanas', value: '45%', color: 'bg-blue-500' },
    { label: 'Rutas Interestatales', value: '35%', color: 'bg-green-500' },
    { label: 'Rutas Especiales', value: '20%', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#111B40]">
            Panel Informativo
          </h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'general'
                  ? 'bg-[#1D3C5B] text-white'
                  : 'bg-white text-[#283050] hover:bg-gray-50'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab('rutas')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'rutas'
                  ? 'bg-[#1D3C5B] text-white'
                  : 'bg-white text-[#283050] hover:bg-gray-50'
              }`}
            >
              Rutas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Chart
              data={performanceData}
              title="Rendimiento Semanal"
            />
          </div>
          <div>
            <InfoCard
              title="Distribución de Rutas"
              items={routeTypes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 