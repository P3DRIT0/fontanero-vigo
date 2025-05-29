import React from 'react';

const PremiumPlumbingHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white  flex items-center overflow-hidden">
      {/* Fondo de imagen + overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center">
            <div className="w-16 h-1 bg-blue-400 mr-4"></div>
            <span className="uppercase tracking-widest text-blue-300 font-semibold text-sm">Servicios Profesionales</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block mb-4">Expertos en</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Soluciones de Fontanería</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-lg leading-relaxed">
            Más de 15 años resolviendo emergencias con tecnología de vanguardia y atención personalizada. Tu satisfacción está garantizada.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contacto"
              className="relative group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-5 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition"
              aria-label="Emergencias 24 horas"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-phone-alt mr-3 text-lg" aria-hidden="true"></i> Emergencias 24h
              </span>
              <span className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition"></span>
            </a>

            <a
              href="#servicios"
              className="relative group border-2 border-blue-300 hover:bg-white/10 text-white font-bold py-5 px-10 rounded-xl text-lg hover:border-blue-100 transition"
              aria-label="Solicita una cita programada"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-calendar-check mr-3 text-lg" aria-hidden="true"></i> Cita Programada
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Gradiente decorativo inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/80 to-transparent z-10"></div>

      {/* Tarjetas flotantes de beneficios */}
      <div className="hidden xl:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-8 z-10">
        {[
          {
            icon: 'fa-shield-alt',
            title: 'Garantía Total',
            desc: 'Todos nuestros trabajos incluyen 2 años de garantía escrita',
          },
          {
            icon: 'fa-bolt',
            title: 'Respuesta Rápida',
            desc: 'Técnicos en tu domicilio en menos de 45 minutos',
          },
          {
            icon: 'fa-euro-sign',
            title: 'Precio Transparente',
            desc: 'Presupuesto cerrado sin sorpresas',
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={title}
            className={`bg-white/90 backdrop-blur-md text-blue-900 p-6 rounded-2xl w-64 shadow-2xl transform hover:scale-105 transition duration-300 ${i === 1 ? 'delay-75' : i === 2 ? 'delay-100' : ''}`}
          >
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <i className={`fas ${icon} text-2xl text-blue-600`} aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-blue-800">{desc}</p>
          </div>
        ))}
      </div>

      {/* Burbujas decorativas */}
      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-blue-500/20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-400/30 animate-pulse delay-300"></div>
      <div className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-blue-300/20 animate-pulse delay-500"></div>
    </section>
  );
};

export default PremiumPlumbingHero;
