// components/sections/LegalNotice.tsx
'use client'

import { FaBalanceScale, FaGavel, FaBook, FaInfoCircle } from 'react-icons/fa'

export const LegalNotice = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900 py-16 sm:py-24">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-[120px] opacity-10 animate-pulse-slow" />
      
      <div className="relative z-10 max-w-full lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaBalanceScale className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="block text-gray-900">Aviso</span>
              <span className="block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Legal
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Información legal sobre las condiciones de uso del sitio web
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Company Info */}
          <div className="p-8 sm:p-10 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaGavel className="text-blue-600" />
              <span>Identificación del Titular</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaBook className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Datos Registrales</h3>
                  <p className="text-gray-600">Exyo Developers SLU</p>
                  <p className="text-gray-600">NIF: B70766043</p>
                  <p className="text-gray-600">Inscrita en el Registro Mercantil de Pontevedra</p>
                </div>
              </div>
              
             
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <FaInfoCircle className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Actividad</h3>
                  <p className="text-gray-600">Desarrollo de software y aplicaciones</p>
                  <p className="text-gray-600">Consultoría tecnológica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="p-8 sm:p-10">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Condiciones Generales de Uso</h2>
              <p className="mb-6">
                El acceso y uso de este sitio web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, 
                las presentes condiciones generales de uso.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">1. Objeto</h3>
              <p className="mb-6">
                El presente aviso legal regula el acceso y uso del sitio web <strong>https://fontanerovigo.com</strong> que Exyo Developers SLU 
                pone a disposición de los usuarios para informar sobre sus servicios y actividades.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">2. Condiciones de Acceso y Uso</h3>
              <p className="mb-4">
                El usuario se compromete a hacer un uso correcto del sitio web de conformidad con:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>La legislación vigente</li>
                <li>La moral y buenas costumbres generalmente aceptadas</li>
                <li>El orden público</li>
                <li>Las presentes condiciones de uso</li>
              </ul>
              <p className="mb-6">
                Queda prohibido cualquier uso con fines ilícitos o que perjudiquen derechos e intereses de terceros.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">3. Propiedad Intelectual e Industrial</h3>
              <p className="mb-6">
                Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, código fuente, etc.) son propiedad 
                de Exyo Developers SLU o de terceros que han autorizado su uso, estando protegidos por derechos de propiedad 
                intelectual e industrial.
              </p>
              <p className="mb-6">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación total o parcial 
                de los contenidos sin autorización expresa del titular.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">4. Exclusión de Garantías y Responsabilidad</h3>
              <p className="mb-6">
                Exyo Developers SLU no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza 
                que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad 
                del sitio o transmisión de virus o programas maliciosos en los contenidos.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">5. Modificaciones</h3>
              <p className="mb-6">
                Exyo Developers SLU se reserva el derecho a efectuar sin previo aviso las modificaciones que considere oportunas 
                en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través 
                de la misma como la forma en la que éstos aparezcan presentados.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">6. Enlaces</h3>
              <p className="mb-6">
                En el caso de que en el sitio web se dispusiesen enlaces a otros sitios en Internet, Exyo Developers SLU no ejercerá 
                ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los 
                contenidos de algún enlace perteneciente a un sitio web ajeno.
              </p>

              <h3 className="font-semibold text-gray-800 mt-6 mb-3">7. Legislación Aplicable y Jurisdicción</h3>
              <p className="mb-6">
                La relación entre Exyo Developers SLU y el USUARIO se regirá por la normativa española vigente. Para la resolución 
                de cualquier controversia se someterán a los Juzgados y Tribunales de la ciudad de Pontevedra.
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