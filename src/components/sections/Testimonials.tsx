import React from 'react';
import { FaCheckCircle, FaClock, FaEuroSign, FaFileAlt, FaUsers } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Efecto decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Confianza garantizada
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Por Qué Elegir Nuestro Servicio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Fontanería en Vigo</span>?
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600">
            Somos la opción preferida por los vecinos de Vigo gracias a nuestra profesionalidad,
            <br className="hidden md:block" /> transparencia y resultados de calidad.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Beneficio 1 - Profesionales */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaCheckCircle className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profesionales locales certificados</h3>
            <p className="text-gray-600 mb-6">
              Todos nuestros fontaneros están cualificados y con años de experiencia resolviendo problemas en Vigo.
            </p>
            <a href="#contacto" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Ver certificaciones <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Beneficio 2 - Urgencias */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaClock className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Atención urgente 24 horas</h3>
            <p className="text-gray-600 mb-6">
              Disponibles 365 días al año para resolver tus emergencias de fontanería cuando más lo necesites.
            </p>
            <a href="tel:+34666666666" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Llamar ahora <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Beneficio 3 - Tarifas */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaEuroSign className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tarifas claras y sin sorpresas</h3>
            <p className="text-gray-600 mb-6">
              Presupuestos detallados sin coste ocultos. Sabrás exactamente lo que pagas antes de comenzar.
            </p>
            <a href="#tarifas" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Ver tarifas <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Beneficio 4 - Presupuestos */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaFileAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Presupuestos gratis sin compromiso</h3>
            <p className="text-gray-600 mb-6">
              Evaluamos tu caso sin coste y te damos un presupuesto detallado antes de realizar ningún trabajo.
            </p>
            <a href="#contacto" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Pedir presupuesto <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Beneficio 5 - Clientes */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2 p-8 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white mx-auto">
              <FaUsers className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Más de 500 clientes satisfechos en Vigo</h3>
            <p className="text-gray-600 mb-6">
              Nuestra mejor garantía son las recomendaciones de vecinos que ya han confiado en nosotros.
            </p>
            <a href="#opiniones" className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
              Ver opiniones <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-0.5 inline-block">
            <a 
              href="#contacto" 
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-5 px-8 rounded-[14px] text-lg transition-all duration-300 group"
            >
              <span className="mr-3">Contacte con nuestros fontaneros</span>
              <span className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Respuesta inmediata - Garantía por escrito - Técnicos locales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;