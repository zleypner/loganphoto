import TestimonialCard from '../components/TestimonialCard'
import { testimonials } from '../data/testimonials'

export default function Testimonios() {
  return (
    <div className="bg-primary-50 min-h-screen">
      {/* Hero */}
      <section className="section-container bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-4 text-white">Testimonios</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Las palabras de mis clientes son el mejor reflejo de mi trabajo.
            Cada proyecto es una oportunidad de crear algo especial.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Estadísticas - Bento Style */}
          <div className="bg-white rounded-[2rem] shadow-lg p-8 md:p-12 mt-16">
            <h2 className="heading-2 mb-8 text-center text-primary-800">Números que Hablan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-primary-50 rounded-[1.5rem] p-6 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold text-primary-700 mb-2">200+</p>
                <p className="text-primary-600">Eventos Capturados</p>
              </div>
              <div className="bg-primary-50 rounded-[1.5rem] p-6 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold text-primary-700 mb-2">98%</p>
                <p className="text-primary-600">Clientes Satisfechos</p>
              </div>
              <div className="bg-primary-50 rounded-[1.5rem] p-6 text-center hover:scale-105 transition-transform duration-300">
                <p className="text-4xl font-bold text-primary-700 mb-2">5</p>
                <p className="text-primary-600">Años de Experiencia</p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white rounded-[2rem] p-12">
            <h2 className="heading-2 mb-4 text-white">Sé Parte de Esta Historia</h2>
            <p className="text-xl text-primary-100 mb-8">
              Únete a las más de 200 familias y empresas que confían en mí para capturar sus momentos especiales.
            </p>
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Reservar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
