import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, Users, Award } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import GalleryGrid from '../components/GalleryGrid'
import { services } from '../data/services'
import { testimonials } from '../data/testimonials'

export default function Home() {
  const featuredServices = services.slice(0, 5)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredGallery = [
    { id: 'featured-1', src: '/images/Bodas/ANT_5208-Enhanced-NR-2.jpg', alt: 'Foto de boda destacada' },
    { id: 'featured-2', src: '/images/Quince Años/MFS_7827-Enhanced-NR.jpg', alt: 'Foto de 15 años destacada' },
    { id: 'featured-3', src: '/images/Editorial/DSC_5327-Enhanced-NR.jpg', alt: 'Foto editorial destacada' },
    { id: 'featured-4', src: '/images/Bodas/_LP33034-Enhanced-NR.jpg', alt: 'Foto de boda destacada' },
    { id: 'featured-5', src: '/images/Empresarial /DSC_6773-Enhanced-NR-2.jpg', alt: 'Foto corporativa destacada' },
    { id: 'featured-6', src: '/images/Chicos/MFS_5193-Enhanced-NR.jpg', alt: 'Foto de fiesta destacada' },
    { id: 'featured-7', src: '/images/Quince Años/_LP37311-Enhanced-NR-2.jpg', alt: 'Foto de 15 años destacada' },
    { id: 'featured-8', src: '/images/Editorial/_LP30978-Enhanced-NR.jpg', alt: 'Foto editorial destacada' },
    { id: 'featured-9', src: '/images/Bodas/MFS_6385-Enhanced-NR.jpg', alt: 'Foto de boda destacada' },
  ]

  return (
    <div>
      {/* Hero */}
      <Hero
        title="Captura Momentos Que Durarán Para Siempre"
        subtitle="Fotografía profesional con arte y emoción. Especializado en bodas, 15 años, eventos corporativos y transmisión en vivo en Costa Rica. Trabajo como freelancer empresarial, brindando cobertura creativa y resultados de alto nivel."
      />

      {/* Lo que entrego */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">No Solo Tomo Fotos, Creo Experiencias</h2>
          <p className="text-xl text-foreground">
            Cada evento es único. Mi enfoque combina técnica profesional con un ojo artístico
            para entregarte imágenes que no solo documentan, sino que emocionan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
            <p className="text-foreground">
              Equipamiento profesional de última generación y edición de nivel editorial.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega Puntual</h3>
            <p className="text-foreground">
              Respeta tus tiempos. Entrega garantizada en los plazos establecidos.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiencia Personalizada</h3>
            <p className="text-foreground">
              Cada cliente es único. Trabajamos juntos para lograr exactamente lo que imaginas.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Garantía de Satisfacción</h3>
            <p className="text-foreground">
              Comprometido con tu felicidad. Revisión y ajustes incluidos.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-container bg-primary-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Especialidades</h2>
          <p className="text-xl text-foreground">
            Cada tipo de evento requiere un enfoque único. Descubre cómo trabajo en cada especialidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              link={`/${service.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Portafolio destacado */}
      <section className="section-container bg-white">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="heading-2 mb-4">Portafolio Destacado</h2>
            <p className="text-xl text-foreground">
              Una selección de momentos capturados con arte y pasión.
            </p>
          </div>
          <Link
            to="/portafolio"
            className="hidden md:flex items-center space-x-2 btn-secondary group"
          >
            <span>Ver Todo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <GalleryGrid images={featuredGallery} columns={3} />
        <div className="text-center mt-8 md:hidden">
          <Link to="/portafolio" className="btn-primary inline-flex items-center space-x-2">
            <span>Ver Todo el Portafolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-container bg-gradient-to-br from-primary-500 via-deep-blue to-navy text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4 text-white">Mi Proceso de Trabajo</h2>
          <p className="text-xl text-primary-100">
            Un método probado que asegura resultados excepcionales en cada proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Consulta</h3>
            <p className="text-primary-100">
              Hablamos sobre tu visión, estilo y expectativas. Diseñamos un plan personalizado.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Preparación</h3>
            <p className="text-primary-100">
              Planeamos cada detalle: locaciones, horarios, outfits y momentos clave.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">El Día</h3>
            <p className="text-primary-100">
              Capturo cada momento importante con discreción y profesionalismo.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega</h3>
            <p className="text-primary-100">
              Recibes tus fotos editadas profesionalmente en un formato hermoso y permanente.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-xl text-foreground">
            Más de 200 eventos capturados. Estas son algunas de las experiencias recientes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/testimonios" className="btn-secondary inline-flex items-center space-x-2">
            <span>Ver Todos los Testimonios</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Escasez */}
      <section className="section-container bg-gradient-to-br from-primary-500 via-deep-blue to-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">
            Fechas Limitadas Disponibles
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Solo tomo un número limitado de eventos por mes para asegurar la máxima calidad
            y atención personalizada. Las fechas populares (especialmente temporada de bodas)
            se agotan rápidamente.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-3xl font-bold mb-2">Temporada Alta: Noviembre - Febrero</p>
            <p className="text-primary-100">
              Si planeas una boda o evento importante en estos meses, te recomiendo reservar
              con al menos 4-6 meses de anticipación.
            </p>
          </div>
          <a
            href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-500 hover:bg-primary-50 hover:scale-105 inline-flex items-center space-x-2 text-lg px-8 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300"
          >
            <span>Reservar Mi Fecha Ahora</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-50 to-sky-blue/10 rounded-[2rem] p-12 md:p-16">
          <h2 className="heading-2 mb-6">
            ¿Listo Para Capturar Tu Momento Especial?
          </h2>
          <p className="text-xl text-foreground mb-8">
            Cada historia merece ser contada. Trabajemos juntos para crear imágenes
            que celebrarás por siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Reservar por WhatsApp</span>
            </a>
            <Link to="/portafolio" className="bg-white text-primary-500 border-2 border-primary-500 text-lg px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300">
              Ver Portafolio Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
