'use client'

import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShieldAlt,FaRegCalendarAlt} from 'react-icons/fa'
import { FaTools } from 'react-icons/fa';

import { SITE_CONFIG } from '@/config/site'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  const phoneNumber = SITE_CONFIG.contact.phone.replace(/\D/g, '')

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Efecto de burbujas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-white/5 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-white/10 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 rounded-full bg-white/7 animate-float" style={{ animationDuration: '18s', animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid de contenido premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Información con logo */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Fontaneros</span>
              <span className="text-white">Vigo</span>
            </h3>
            <p className="mb-6 text-blue-200 leading-relaxed">
              Servicio profesional de <strong>fontanería en Vigo</strong> y alrededores. <strong>Fontaneros urgentes</strong> con respuesta en menos de 45 minutos. Más de 15 años resolviendo <strong>reparaciones de bajantes</strong> y emergcias.
            </p>
            <div className="flex space-x-5">
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-green-400 transition-colors text-xl bg-white/10 p-3 rounded-full hover:bg-white/20"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="text-blue-200 hover:text-blue-100 transition-colors text-xl bg-white/10 p-3 rounded-full hover:bg-white/20"
                aria-label="Llamar"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <FaTools className="text-white" />
              </div>
              <span>Servicios de fontanería</span>
            </h4>
            <ul className="space-y-4">
              {[
                "Desatascos urgentes 24h",
                "Reparación de fugas y bajantes",
                "Fontaneros a domicilio en Vigo",
                "Emergencias de fontanería",
                "Mantenimiento de comunidades",
                "Instalación de calentadores"
              ].map((service, i) => (
                <li key={i}>
                  <Link
                    href="/#servicios"
                    className="text-blue-200 hover:text-white transition-colors flex items-start gap-3 group"
                  >
                    <span className="bg-white/10 group-hover:bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 transition-colors">
                      <FaTools className="text-xs text-white" />
                    </span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas de cobertura */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <span>Fontaneros en Vigo</span>
            </h4>
            <ul className="space-y-4">
              {[
                "Fontaneros Vigo Centro",
                "Fontaneros Coia",
                "Fontaneros Teis",
                "Fontaneros Bouzas",
                "Fontaneros Navia",
                "Fontaneros Alcabre",
                "Fontaneros Redondela",
                "Fontaneros Nigrán"
              ].map((zone, i) => (
                <li key={i} className="flex items-start text-blue-200 hover:text-white transition-colors group">
                  <span className="bg-white/10 group-hover:bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 transition-colors">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto destacado */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <FaRegCalendarAlt  className="text-white" />
              </div>
              <span>Fontanero urgente</span>
            </h4>
            <ul className="space-y-6">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-white font-semibold text-xl hover:text-blue-200 transition-colors flex items-center gap-4"
                >
                  <span className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-md">
                    <FaPhone className="text-white" />
                  </span>
                  {SITE_CONFIG.contact.phone}
                </a>
                <p className="text-blue-200 text-sm mt-2 pl-16">Fontanero 24 horas en Vigo</p>
              </li>

              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white font-semibold hover:text-blue-200 transition-colors flex items-center gap-4"
                >
                  <span className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-md">
                    <FaEnvelope className="text-white" />
                  </span>
                  {SITE_CONFIG.contact.email}
                </a>
                <p className="text-blue-200 text-sm mt-2 pl-16">Presupuesto sin compromiso</p>
              </li>

              <li className="flex items-center gap-4">
                <span className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-md">
                  <FaShieldAlt className="text-white" />
                </span>
                <div>
                  <p className="text-white font-semibold">Garantía en reparaciones</p>
                  <p className="text-blue-200 text-sm">Fontaneros certificados en Vigo</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      

        {/* Copyright y legales */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-col w-full lg:w-[400px] lg:flex-row lg:flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/politica-privacidad" className="text-blue-300 hover:text-white text-sm transition-colors">
              Política de privacidad
            </Link>
            <Link href="/aviso-legal" className="text-blue-300 hover:text-white text-sm transition-colors">
              Aviso legal
            </Link>
            <Link href="/cookies" className="text-blue-300 hover:text-white text-sm transition-colors">
              Politica de cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Animaciones CSS para burbujas */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}