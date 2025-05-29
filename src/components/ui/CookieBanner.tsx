'use client'

import { FaCookieBite } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (consent !== 'accepted') {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setVisible(false)
    // Aquí podrías añadir lógica para eliminar cookies no esenciales
  }

  if (!visible) return null

  return (
    <div className="fixed  bottom-0 left-0 right-0 z-50">
      <div className=" lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 p-4 rounded-lg flex-shrink-0">
                <FaCookieBite className="text-white text-3xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Configuración de Cookies
                </h3>
                <p className="text-gray-600 mb-4">
                  Utilizamos cookies propias y de terceros para mejorar nuestros servicios, analizar 
                  el tráfico y mostrar publicidad relacionada con tus preferencias. Puedes gestionar 
                  o rechazar las cookies no esenciales haciendo clic en Configurar. 
                  <Link href="/cookies" className="text-blue-600 hover:underline ml-1">
                    Más información
                  </Link>
                </p>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <button 
                    onClick={acceptCookies}
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all shadow-sm"
                  >
                    Aceptar todas
                  </button>
                  
                  <button 
                    onClick={rejectCookies}
                    className="px-5 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all shadow-sm"
                  >
                    Rechazar no esenciales
                  </button>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}