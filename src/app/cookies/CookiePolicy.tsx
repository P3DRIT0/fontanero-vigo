// components/sections/CookiePolicy.tsx
'use client'

import { FaCookieBite, FaChartLine, FaCog, FaUserCog, FaShieldAlt } from 'react-icons/fa'

export const CookiePolicy = () => {
  return (
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900 py-16 sm:py-24">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-[120px] opacity-10 animate-pulse-slow" />
      
      <div className="relative z-10 max-w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaCookieBite className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block text-gray-900">Política de</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Cookies
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Información sobre el uso de cookies en nuestro sitio web
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-8 sm:p-10">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
              <p className="mb-6">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
                Estas cookies contienen información sobre su navegación, preferencias y hábitos, lo que nos permite mejorar 
                su experiencia como usuario.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4 mt-10">Finalidad de las cookies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCog className="text-blue-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Cookies Técnicas</h3>
                  </div>
                  <p className="text-gray-600">
                    Son esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de funciones básicas.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FaChartLine className="text-blue-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Cookies Analíticas</h3>
                  </div>
                  <p className="text-gray-600">
                    Nos ayudan a comprender cómo interactúan los visitantes con nuestro sitio web, recopilando información anónima.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FaUserCog className="text-blue-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Cookies de Personalización</h3>
                  </div>
                  <p className="text-gray-600">
                    Permiten recordar sus preferencias (idioma, región, etc.) para ofrecerle una experiencia más personalizada.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <h3 className="font-semibold text-gray-800">Cookies de Terceros</h3>
                  </div>
                  <p className="text-gray-600">
                    Gestionadas por servicios externos como Google Tag Manager y Microsoft Clarity para análisis avanzados.
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Cookies utilizadas en este sitio web</h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Cookie</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Tipo</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Finalidad</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Duración</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">Gestor</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_ga</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analítica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Distinción de usuarios</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 años</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_gid</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analítica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Distinción de usuarios</td>
                      <td className="px-4 py-3 text-sm text-gray-700">24 horas</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_gat</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analítica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Limitación de solicitudes</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 minuto</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_clck</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analítica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Registro de interacciones</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 año</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Microsoft Clarity</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">_clsk</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analítica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Registro de sesión</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 día</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Microsoft Clarity</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">cookieConsent</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Técnica</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Preferencias de cookies</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 año</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Propia</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Microsoft Clarity y Google Tag Manager</h2>
              <p className="mb-6">
                Utilizamos Microsoft Clarity para analizar el comportamiento de los usuarios en nuestro sitio web mediante 
                heatmaps y grabaciones de sesiones. Esta información nos ayuda a mejorar la experiencia de usuario.
              </p>
              <p className="mb-6">
                Google Tag Manager nos permite gestionar etiquetas de seguimiento y marketing de forma centralizada, 
                sin necesidad de modificar el código de nuestro sitio web.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mb-4">Cómo gestionar las cookies</h2>
              <p className="mb-4">
                Puede controlar y/o eliminar las cookies según desee. Para más información, visite{' '}
                <a href="https://www.aboutcookies.org/" className="text-blue-600 hover:underline">aboutcookies.org</a>.
                Puede eliminar todas las cookies que ya están en su ordenador y configurar la mayoría de los navegadores 
                para que no se instalen. Sin embargo, si lo hace, puede tener que ajustar manualmente algunas preferencias 
                cada vez que visite un sitio.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-800">Configurar cookies en Firefox</p>
                </a>
                <a href="https://support.google.com/chrome/answer/95647" 
                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-800">Configurar cookies en Chrome</p>
                </a>
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-800">Configurar cookies en Edge</p>
                </a>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                   className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <p className="font-medium text-gray-800">Configurar cookies en Safari</p>
                </a>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Última actualización: 20 de marzo de 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.12; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}