import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt, FaCarAlt } from 'react-icons/fa';

const CoverageSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3B82F6" d="M40,-58C52.1,-49.5,62.2,-38.6,68.7,-25.1C75.2,-11.6,78.1,4.5,73.7,17.9C69.3,31.3,57.6,42.1,44.3,53.5C31,64.9,16,76.9,0.3,76.5C-15.3,76.1,-30.7,63.3,-44.1,50.9C-57.5,38.5,-69,26.5,-73.3,11.7C-77.6,-3.2,-74.7,-21,-64.1,-34.5C-53.5,-48,-35.2,-57.2,-18.8,-63.8C-2.4,-70.4,12.1,-74.4,25.1,-70.2C38.1,-66,49.6,-53.6,40,-58Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado con nuevo diseño */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 h-3 bg-blue-200/50 z-0"></span>
              <span className="relative z-10">Cobertura en Vigo</span>
            </span>
            <br />y <span className="text-blue-600">municipios limítrofes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Servicio de fontanería con desplazamiento rápido en toda el área metropolitana.
            <br className="hidden md:block" /> Llegamos en menos de 45 minutos a cualquier punto.
          </p>
        </div>

        {/* Mapa interactivo visual */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-16 max-w-6xl mx-auto">
          
          <div className="aspect-w-16 aspect-h-9 w-full h-80 bg-blue-50 relative">
            {/* Mapa simulado con puntos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Puntos del mapa */}
                {[
                  { top: '30%', left: '40%', name: 'Vigo Centro' },
                  { top: '50%', left: '35%', name: 'Coia' },
                  { top: '60%', left: '45%', name: 'Teis' },
                  { top: '55%', left: '55%', name: 'Bouzas' },
                  { top: '40%', left: '30%', name: 'Navia' },
                  { top: '35%', left: '50%', name: 'Traviesas' },
                  { top: '65%', left: '60%', name: 'Alcabre' },
                  { top: '25%', left: '60%', name: 'Redondela' },
                  { top: '20%', left: '30%', name: 'Mos' },
                  { top: '70%', left: '30%', name: 'Nigrán' },
                ].map((location, index) => (
                  <div 
                    key={index}
                    className={`absolute w-4 h-4 rounded-full ${index < 7 ? 'bg-blue-600 border-2 border-white' : 'bg-blue-400 border-2 border-white'} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                    style={{ top: location.top, left: location.left }}
                  >
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-md px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">¿No encuentras tu zona?</h3>
                <p className="opacity-90">Tenemos cobertura en toda el área metropolitana de Vigo</p>
              </div>
              <a 
                href="tel:+34666666666" 
                className="flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaPhoneAlt className="mr-2" /> Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>

        {/* Listado de zonas con nuevo diseño */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Barrios y zonas principales que cubrimos</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Vigo Centro', 'Coia', 'Teis', 'Bouzas', 'Navia', 
              'Traviesas', 'Alcabre', 'Redondela', 'Mos', 'Nigrán',
              'Cangas', 'Gondomar', 'Porriño', 'Baiona', 'Pontevedra'
            ].map((zone, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                  <FaMapMarkedAlt />
                </div>
                <span className="font-medium text-gray-800">{zone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info adicional */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <FaCarAlt className="text-xl" />
              </div>
              <h4 className="text-lg font-bold text-gray-900">Desplazamiento rápido</h4>
            </div>
            <p className="text-gray-600">Llegamos en menos de 45 minutos a cualquier punto de Vigo, 24 horas al día.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Horario flexible</h4>
            </div>
            <p className="text-gray-600">Adaptamos nuestro horario a tus necesidades, incluso fines de semana y festivos.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Zona ampliada</h4>
            </div>
            <p className="text-gray-600">Cobertura extendida a municipios cercanos con tarifas especiales para desplazamientos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;