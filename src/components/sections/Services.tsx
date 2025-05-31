import React from 'react';
import { FaFaucet, FaWater, FaClock, FaFireAlt, FaBuilding, FaArrowRight } from 'react-icons/fa';
import { MdOutlinePlumbing } from 'react-icons/md';

const Services: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-10 lg:py-20 overflow-hidden">
      {/* Efecto de agua decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/5 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado con efecto premium */}
        <div className="text-center mb-10 lg:mb-20 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Soluciones profesionales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Servicios de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Fontanería en Vigo</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600">
            Más de 15 años resolviendo problemas de fontanería con tecnología avanzada y atención personalizada.
            <br className="hidden md:block" /> Garantía de satisfacción en todos nuestros trabajos como <strong>fontaneros en Vigo</strong>.
          </p>
        </div>

        {/* Grid de servicios premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Servicio 1 - Desatascos */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <MdOutlinePlumbing className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desatascos y reparación de bajantes en Vigo</h3>
              <p className="text-gray-600 mb-6">
                Eliminamos obstrucciones en tuberías, bajantes y desagües con tecnología de última generación sin necesidad de obras.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Desatascos con máquina de varillas
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Hidrodesatascador a presión
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Cámaras de inspección
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Servicio 2 - Fugas */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <FaWater className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reparación de fugas de agua</h3>
              <p className="text-gray-600 mb-6">
                Localización y reparación de fugas ocultas con geófonos y tecnología termográfica sin necesidad de romper.
                Servicio disponible como <strong>fontaneros a domicilio</strong> en toda Vigo.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Detección sin obra
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Reparación con materiales de primera
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Informe técnico detallado
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Servicio 3 - Instalaciones */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <FaFaucet className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalación de grifería y sanitarios</h3>
              <p className="text-gray-600 mb-6">
                Instalación profesional de baños completos, cocinas y reformas con las mejores marcas del mercado.
                Servicio completo de <strong>fontanería en Vigo</strong> para particulares y empresas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Asesoramiento personalizado
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Materiales de alta gama
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Limpieza post-instalación
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Solicitar servicio <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Servicio 4 - Urgencias */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <FaClock className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fontanería urgente 24h en Vigo</h3>
              <p className="text-gray-600 mb-6">
                Servicio de emergencia disponible las 24 horas para resolver cualquier imprevisto con la máxima rapidez.
                Somos tu <strong>fontanero 24 horas en Vigo</strong> para cualquier urgencia.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Disponibilidad inmediata
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Técnicos certificados
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Soluciones en menos de 1 hora
                </li>
              </ul>
              <a href="tel:+34666666666" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Llamar ahora <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Servicio 5 - Calentadores */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <FaFireAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cambio de calentadores y termos</h3>
              <p className="text-gray-600 mb-6">
                Instalación y mantenimiento de sistemas de agua caliente con máxima eficiencia energética.
                Especialistas en <strong>fontanería Vigo</strong> para instalaciones de gas y agua.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Asesoramiento energético
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Marcas líderes del mercado
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Certificado de instalación
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Solicitar presupuesto <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Servicio 6 - Comunidades */}
          <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2">
            <div className="p-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white">
                <FaBuilding className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mantenimiento de comunidades</h3>
              <p className="text-gray-600 mb-6">
                Servicios periódicos de mantenimiento preventivo para comunidades de vecinos y locales comerciales.
                <strong>Fontaneros en Vigo</strong> especializados en grandes instalaciones.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Planes personalizados
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Inspecciones periódicas
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Gestión documental completa
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                Más información <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA premium */}
        <div className="mt-10 lg:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-0.5 inline-block">
            <a 
              href="#contacto" 
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-bold py-5 px-8 rounded-[14px] text-lg transition-all duration-300 group"
            >
              <span className="mr-3">Solicite presupuesto sin compromiso</span>
              <span className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors">
                <FaArrowRight className="text-sm" />
              </span>
            </a>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Más de 1.200 clientes satisfechos en Vigo y alrededores
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;