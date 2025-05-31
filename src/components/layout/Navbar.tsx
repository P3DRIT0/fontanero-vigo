'use client'

import Link from 'next/link'
import { FaPhone, FaBars, FaTimes, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa'
import { useState } from 'react'
import { SITE_CONFIG } from '@/config/site'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const phoneNumber = SITE_CONFIG.contact.phone.replace(/\s/g, '')

  return (
    <>
      {/* Barra de emergencia premium */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-3 px-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row lg:justify-between items-center text-sm text-center md:text-left">
          <div className="flex items-center gap-3 mb-2 md:mb-0 justify-center w-full md:w-auto">
            <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
              <FaShieldAlt className="text-blue-200" />
              <span className="font-medium">Garantía en todos nuestros trabajos</span>
            </div>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="font-bold hover:underline flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 justify-center md:justify-start w-full lg:w-auto mx-auto md:mx-0  hover:text-blue-100"
          >
            <FaPhone className="text-blue-200" /> {SITE_CONFIG.contact.phone}
          </a>
        </div>
      </div>


      {/* Navbar principal premium */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo premium */}
            <Link href="/" className="flex items-center group">
              <div className="bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300 p-2 rounded-lg mr-3">
                <FaTools className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                <span className="text-blue-600">Fontanero</span>
                <span className="text-blue-800">Vigo</span>
                <span className="text-blue-500 text-sm ml-2 bg-blue-100 px-2 py-0.5 rounded-full">24h</span>
              </span>
            </Link>

            {/* Menú desktop premium */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                href="/#servicios"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Servicios
              </Link>
              <Link
                href="/#cobertura"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Zonas
              </Link>
              <Link
                href="/#nosotros"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/#contacto"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors hover:bg-blue-50 rounded-lg"
              >
                Contacto
              </Link>
              <div className="ml-2 pl-4 border-l border-gray-200">
                <a
                  href={`tel:${phoneNumber}`}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaPhone className="text-sm" /> Urgencias
                </a>
              </div>
            </nav>

            {/* Botón móvil premium */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                aria-label="Menú"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil premium */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100 shadow-lg">
            <div className="px-4 pt-3 pb-5 space-y-2">
              <Link
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Servicios
              </Link>
              <Link
                href="#cobertura"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Zonas
              </Link>
              <Link
                href="#nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium border-b border-blue-50"
              >
                Contacto
              </Link>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-3 block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md"
              >
                <FaPhone className="inline mr-2" /> Llamar Urgencias
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}