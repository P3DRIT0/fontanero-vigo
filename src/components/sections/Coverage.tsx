import React from 'react';
import { FaMapMarkedAlt, FaPhoneAlt, FaCarAlt } from 'react-icons/fa';


const CoverageSection: React.FC = () => {
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
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
              <span className="relative z-10">Fontaneros en</span>
            </span>
            <span className="text-blue-600 ml-2">Vigo y alrededores</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Servicio de <strong>fontanería 24 horas en Vigo</strong> con desplazamiento rápido en toda el área metropolitana.
            <br className="hidden md:block" /> <strong>Fontaneros a domicilio</strong> en menos de 45 minutos.
          </p>
        </div>

        {/* Mapa interactivo visual */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-16 max-w-6xl mx-auto">

          <div className="aspect-w-16 aspect-h-9 w-full h-80 relative">
            {/* Mapa de Vigo como fondo */}
            <div className="absolute inset-0 bg-gray-100 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10836.53136666831!2d-8.714933908334777!3d42.228754412501004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1748684338157!5m2!1ses!2ses" width="100%" height="450"></iframe>
            </div>

            {/* Puntos del mapa */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {[
                  { top: '30%', left: '40%' },
                  { top: '50%', left: '35%' },
                  { top: '60%', left: '45%' },
                  { top: '55%', left: '55%' },
                  { top: '40%', left: '30%' },
                  { top: '75%', left: '50%' },
                  { top: '85%', left: '65%' },
                  { top: '60%', left: '70%' },
                  { top: '25%', left: '60%' },
                  { top: '70%', left: '30%' },
                ].map((location, index) => (
                  <div
                    key={index}
                    className={`absolute w-4 h-4 rounded-full ${index < 7 ? 'bg-blue-600 border-2 border-white' : 'bg-blue-400 border-2 border-white'} transform  group`}
                    style={{ top: location.top, left: location.left }}
                  >
                    {/* PING CENTRADO */}
                    <div className="absolute w-4 h-4 rounded-full bg-blue-400 opacity-75 animate-ping transform"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="p-8 md:p-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">¿Necesitas un <strong>fontanero en Vigo</strong> urgente?</h3>
                <p className="opacity-90">Cobertura en toda el área metropolitana y <strong>reparación de bajantes</strong></p>
              </div>
              <a
                href="tel:+34666666666"
                className="flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaPhoneAlt className="mr-2" /> Llamar a fontanero
              </a>
            </div>
          </div>
        </div>

        {/* Listado de zonas con nuevo diseño */}
        <div className="max-w-5xl mx-auto">
  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
    Zonas donde actuamos como <span className="text-blue-600">fontaneros en Vigo</span>
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      'Vigo Centro', 'Coia', 'Teis', 'Bouzas', 'Navia',
      'Traviesas', 'Alcabre', 'Redondela', 'Mos', 'Nigrán',
      'Cangas', 'Gondomar', 'Porriño', 'Baiona', 'Pontevedra'
    ].map((zone, index) => {
      const isHiddenOnSmallScreens = index >= 6 ? 'hidden lg:flex' : 'flex';
      return (
        <div
          key={index}
          className={`${isHiddenOnSmallScreens} items-center bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors`}
        >
          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
            <FaMapMarkedAlt />
          </div>
          <span className="font-medium text-gray-800">
            {index < 7 ? <strong>Fontaneros {zone}</strong> : `Fontaneros ${zone}`}
          </span>
        </div>
      );
    })}
  </div>
</div>

        {/* Info adicional */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <FaCarAlt className="text-xl" />
              </div>
              <h4 className="text-lg font-bold text-gray-900"><strong>Fontanero a domicilio</strong> rápido</h4>
            </div>
            <p className="text-gray-600">Llegamos en menos de 45 minutos a cualquier punto de Vigo, servicio <strong>24 horas</strong>.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900"><strong>Fontanería Vigo</strong> 24h</h4>
            </div>
            <p className="text-gray-600">Servicio de <strong>fontaneros urgentes</strong> todos los días, incluidos festivos.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900">Área de <strong>fontaneros Vigo</strong></h4>
            </div>
            <p className="text-gray-600">Cobertura extendida a municipios cercanos con <strong>reparación de bajantes</strong> incluida.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;