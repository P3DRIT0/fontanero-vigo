'use client'

import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShieldAlt} from 'react-icons/fa'
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Fontanero</span>
              <span className="text-white">Vigo24h</span>
            </h3>
            <p className="mb-6 text-blue-200 leading-relaxed">
              Servicio profesional de fontanería en Vigo y alrededores. Más de 15 años resolviendo emergencias con tecnología avanzada y atención personalizada.
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
              <span>Nuestros servicios</span>
            </h4>
            <ul className="space-y-4">
              {[
                "Desatascos urgentes",
                "Reparación de fugas",
                "Instalación de grifería",
                "Fontanería 24 horas",
                "Cambio de calentadores",
                "Mantenimiento de comunidades"
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
              <span>Zonas atendidas</span>
            </h4>
            <ul className="space-y-4">
              {[
                "Vigo centro",
                "Casco Vello",
                "Teis",
                "Coia",
                "Samil",
                "Bouzas",
                "Navia",
                "Cabral"
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
                <FaPhone className="text-white" />
              </div>
              <span>Contacto urgente</span>
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
                <p className="text-blue-200 text-sm mt-2 pl-16">Servicio 24 horas</p>
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
              </li>

              <li className="flex items-center gap-4">
                <span className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-md">
                  <FaShieldAlt className="text-white" />
                </span>
                <div>
                  <p className="text-white font-semibold">Garantía en todos los trabajos</p>
                  <p className="text-blue-200 text-sm">Hasta 2 años de cobertura</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider con efecto premium */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-700/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-blue-900 to-blue-800 px-6 text-blue-300 text-sm">
              {SITE_CONFIG.name} - Fontanería profesional en Vigo
            </span>
          </div>
        </div>

        {/* Copyright y legales */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/politica-privacidad" className="text-blue-300 hover:text-white text-sm transition-colors">
              Política de privacidad
            </Link>
            <Link href="/aviso-legal" className="text-blue-300 hover:text-white text-sm transition-colors">
              Aviso legal
            </Link>
            <Link href="/cookies" className="text-blue-300 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
            <Link href="/sitemap.xml" className="text-blue-300 hover:text-white text-sm transition-colors">
              Mapa del sitio
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