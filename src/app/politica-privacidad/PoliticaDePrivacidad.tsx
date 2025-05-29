// components/sections/PrivacyPolicy.tsx
'use client'

import { FaShieldAlt, FaLock, FaEnvelope, FaHome, FaGlobeEurope, FaFileAlt } from 'react-icons/fa'

export const PrivacyPolicy = () => {
  return (
 <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900 py-16 sm:py-24">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-[120px] opacity-10 animate-pulse-slow" />
      
      <div className="relative z-10 max-w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block text-gray-900">Política de</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Privacidad
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Información sobre cómo recopilamos y protegemos tus datos personales
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Company Info */}
          <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaLock className="text-blue-600" />
              <span>Información del Responsable</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaFileAlt className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Identificación</h3>
                  <p className="text-gray-600">Exyo Developers SLU</p>
                  <p className="text-gray-600">NIF: B70766043</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaHome className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Domicilio</h3>
                  <p className="text-gray-600">Fotografo Luis Casado 13</p>
                  <p className="text-gray-600">Pontevedra, España</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaEnvelope className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Contacto</h3>
                  <p className="text-gray-600">info@exyo.es</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaGlobeEurope className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Sitio Web</h3>
                  <a href="https://exyo.es/"><p className="text-blue-600">https://exyo.es/</p></a>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="p-8 sm:p-10">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Protección de Datos Personales</h2>
              <p className="mb-6">
                En cumplimiento del <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y la <strong>LOPD-GDD 3/2018</strong>, 
                le informamos sobre cómo recopilamos y tratamos sus datos personales.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">1. Finalidad del Tratamiento</h3>
              <p className="mb-6">
                Los datos personales recogidos a través de formularios, correos electrónicos o la navegación en nuestro sitio web 
                serán utilizados para:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Responder a consultas y solicitudes de información</li>
                <li>Prestar los servicios contratados</li>
                <li>Enviar comunicaciones comerciales (solo con consentimiento explícito)</li>
                <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">2. Base Legal</h3>
              <p className="mb-6">
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Consentimiento explícito del interesado</li>
                <li>Ejecución de un contrato o servicio</li>
                <li>Interés legítimo del responsable</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">3. Destinatarios de los Datos</h3>
              <p className="mb-6">
                Sus datos podrán ser comunicados a:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Proveedores de servicios necesarios para la ejecución del contrato (hosting, herramientas analíticas)</li>
                <li>Autoridades competentes cuando exista obligación legal</li>
              </ul>
              <p className="mb-6">
                No realizamos transferencias internacionales de datos fuera de la UE.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">4. Derechos de los Usuarios</h3>
              <p className="mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Acceder, rectificar o suprimir sus datos</li>
                <li>Limitar u oponerse al tratamiento</li>
                <li>Portabilidad de los datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="mb-6">
                Para ejercer estos derechos, puede enviar una solicitud a <strong>info@exyo.es</strong> junto con copia de su DNI o documento identificativo.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">5. Conservación de Datos</h3>
              <p className="mb-6">
                Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos 
                y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">6. Seguridad de los Datos</h3>
              <p className="mb-6">
                Implementamos medidas técnicas y organizativas para garantizar la seguridad de sus datos personales y evitar su alteración, 
                pérdida, tratamiento o acceso no autorizado.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">7. Cookies</h3>
              <p className="mb-6">
                Nuestro sitio web utiliza cookies técnicas y analíticas. Puede consultar nuestra Política de Cookies para más información.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">8. Cambios en la Política de Privacidad</h3>
              <p className="mb-6">
                Nos reservamos el derecho a modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. 
                Le recomendamos revisarla periódicamente.
              </p>

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