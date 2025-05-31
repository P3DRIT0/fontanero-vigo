"use client";
import React from 'react';
import { FaUser, FaPhone, FaMapMarkerAlt, FaClipboard, FaPaperPlane, FaCheckCircle, FaClock, FaShieldAlt, FaEuroSign, FaTools } from 'react-icons/fa';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      telefono: '',
      direccion: '',
      problema: '',
      isSubmitted: false,
      isLoading: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    
    // Simulación de envío
    setTimeout(() => {
      this.setState({ 
        isLoading: false,
        isSubmitted: true
      });
    }, 1500);
  }

  render() {
    return (
      <section className="relative py-10 lg:py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
        {/* Elemento decorativo */}
        <div className="absolute top-20 left-0 opacity-10">
          <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#3B82F6" d="M45.7,-58.1C58.6,-48.8,67.5,-34.3,70.7,-18.9C73.9,-3.5,71.3,12.8,63.1,26.8C55,40.8,41.2,52.5,25.1,61.9C9,71.3,-9.4,78.4,-23.6,73.5C-37.8,68.6,-47.8,51.7,-57.1,35.3C-66.4,18.9,-75,2.9,-73.3,-12.1C-71.6,-27.1,-59.6,-40.9,-45.2,-49.9C-30.8,-58.8,-13.9,-62.8,1.7,-64.9C17.3,-67,34.6,-67.3,45.7,-58.1Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Encabezado */}
          <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="hidden lg:absolute inset-x-0 bottom-2 h-3 bg-blue-200/50 z-0"></span>
                <span className="relative z-10">Contacta con Nuestros</span>
              </span>
              <br /><span className="text-blue-600">Fontaneros en Vigo 24 Horas</span>
            </h2>
            <p className="text-lg text-gray-600">
              Completa el formulario y te llamaremos inmediatamente para resolver tu problema de fontanería en Vigo
            </p>
          </div>

          {/* Contenedor de dos columnas */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Columna izquierda - Información */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué elegir a los mejores fontaneros de Vigo?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaClock className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Respuesta inmediata 24/7</h4>
                      <p className="text-gray-600">Servicio de <strong>fontanero urgente en Vigo</strong> con respuesta en menos de 45 minutos para emergencias.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaShieldAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Garantía de servicio</h4>
                      <p className="text-gray-600">Todos nuestros trabajos de <strong>fontanería en Vigo</strong> incluyen 2 años de garantía por escrito.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaEuroSign className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Precios transparentes</h4>
                      <p className="text-gray-600">Presupuesto sin compromiso para reparaciones, instalaciones y <strong>desatascos en Vigo</strong>.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaTools className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Técnicos certificados</h4>
                      <p className="text-gray-600">Fontaneros profesionales con más de 10 años de experiencia en <strong>fontanería a domicilio en Vigo</strong>.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3">Zonas de actuación en Vigo:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Vigo Centro
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Teis
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Coia
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Navia
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Samil
                    </span>
                    <span className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Alcabre
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {this.state.isSubmitted ? (
                  <div className="p-10 text-center">
                    <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado con éxito!</h3>
                    <p className="text-gray-600 mb-6">Nuestros <strong>fontaneros en Vigo</strong> se pondrán en contacto contigo en menos de 10 minutos.</p>
                    <button
                      onClick={() => this.setState({ isSubmitted: false })}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={this.handleSubmit} className="p-6 sm:p-10">
                    {/* Campo Nombre */}
                    <div className="mb-6">
                      <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">
                        <FaUser className="inline mr-2 text-blue-500" />
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={this.state.nombre}
                        onChange={this.handleChange}
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                      />
                    </div>

                    {/* Campo Teléfono */}
                    <div className="mb-6">
                      <label htmlFor="telefono" className="block text-gray-700 font-medium mb-2">
                        <FaPhone className="inline mr-2 text-blue-500" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={this.state.telefono}
                        onChange={this.handleChange}
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        required
                      />
                    </div>

                    {/* Campo Dirección */}
                    <div className="mb-6">
                      <label htmlFor="direccion" className="block text-gray-700 font-medium mb-2">
                        <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
                        Dirección en Vigo (opcional)
                      </label>
                      <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={this.state.direccion}
                        onChange={this.handleChange}
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Indícanos tu barrio o dirección exacta"
                      />
                    </div>

                    {/* Campo Problema */}
                    <div className="mb-8">
                      <label htmlFor="problema" className="block text-gray-700 font-medium mb-2">
                        <FaClipboard className="inline mr-2 text-blue-500" />
                        Descripción del problema
                      </label>
                      <textarea
                        id="problema"
                        name="problema"
                        value={this.state.problema}
                        onChange={this.handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Describe tu problema de fontanería (fugas, atascos, calentadores, etc.)"
                        required
                      ></textarea>
                    </div>

                    {/* Botón de envío */}
                    <button
                      type="submit"
                      disabled={this.state.isLoading}
                      className={`w-full py-4 px-6 rounded-full font-bold text-white transition-colors ${this.state.isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      {this.state.isLoading ? (
                        'Enviando...'
                      ) : (
                        <>
                          <FaPaperPlane className="inline mr-2" />
                          Solicitar fontanero en Vigo
                        </>
                      )}
                    </button>

                    {/* Mensaje de respuesta rápida */}
                    <div className="mt-4 text-center text-gray-500 text-sm">
                      <p>Nuestros <strong>fontaneros urgentes en Vigo</strong> responderán en menos de 10 minutos</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-12 text-center">
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {/* Botón de llamada */}
    <a 
      href="tel:+34612345678" 
      className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      <FaPhone className="mr-3" />
      <span>Llamar ahora</span>
    </a>

    {/* Botón de email */}
   
  </div>
</div>
        </div>
      </section>
    );
  }
}

export default Contact;