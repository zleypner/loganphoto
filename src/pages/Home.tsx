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
    { id: 'featured-1', src: '/src/assets/MENUS/Bodas/ANT_5208-Enhanced-NR-2.jpg', alt: 'Foto de boda destacada' },
    { id: 'featured-2', src: '/src/assets/MENUS/Quince Años/MFS_7827-Enhanced-NR.jpg', alt: 'Foto de 15 años destacada' },
    { id: 'featured-3', src: '/src/assets/MENUS/Editorial/DSC_5327-Enhanced-NR.jpg', alt: 'Foto editorial destacada' },
    { id: 'featured-4', src: '/src/assets/MENUS/Bodas/_LP33034-Enhanced-NR.jpg', alt: 'Foto de boda destacada' },
    { id: 'featured-5', src: '/src/assets/MENUS/Empresarial /DSC_6773-Enhanced-NR-2.jpg', alt: 'Foto corporativa destacada' },
    { id: 'featured-6', src: '/src/assets/MENUS/Chicos/MFS_5193-Enhanced-NR.jpg', alt: 'Foto de fiesta destacada' },
    { id: 'featured-7', src: '/src/assets/MENUS/Quince Años/_LP37311-Enhanced-NR-2.jpg', alt: 'Foto de 15 años destacada' },
    { id: 'featured-8', src: '/src/assets/MENUS/Editorial/_LP30978-Enhanced-NR.jpg', alt: 'Foto editorial destacada' },
    { id: 'featured-9', src: '/src/assets/MENUS/Bodas/MFS_6385-Enhanced-NR.jpg', alt: 'Foto de boda destacada' },
  ]

  return (
    <div>
      {/* Hero */}
      <Hero
        title="Captura Momentos Que Durarán Para Siempre"
        subtitle="Fotografía profesional con arte y emoción. Especialistas en bodas, eventos, 15 años, corporativo y modelaje."
      />

      {/* Lo que entrego */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">No Solo Tomo Fotos, Creo Experiencias</h2>
          <p className="text-xl text-royal-blue-600">
            Cada evento es único. Mi enfoque combina técnica profesional con un ojo artístico 
            para entregarte imágenes que no solo documentan, sino que emocionan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
            <p className="text-royal-blue-600">
              Equipamiento profesional de última generación y edición de nivel editorial.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega Puntual</h3>
            <p className="text-royal-blue-600">
              Respeta tus tiempos. Entrega garantizada en los plazos establecidos.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiencia Personalizada</h3>
            <p className="text-royal-blue-600">
              Cada cliente es único. Trabajamos juntos para lograr exactamente lo que imaginas.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Garantía de Satisfacción</h3>
            <p className="text-royal-blue-600">
              Comprometido con tu felicidad. Revisión y ajustes incluidos.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-container bg-purple-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Especialidades</h2>
          <p className="text-xl text-royal-blue-600">
            Cada tipo de evento requiere un enfoque único. Descubre cómo trabajo en cada especialidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.shortDescription}
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
            <p className="text-xl text-royal-blue-600">
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
      <section className="section-container bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-purple-900 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4 text-white">Mi Proceso de Trabajo</h2>
          <p className="text-xl text-purple-100">
            Un método probado que asegura resultados excepcionales en cada proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Consulta</h3>
            <p className="text-purple-100">
              Hablamos sobre tu visión, estilo y expectativas. Diseñamos un plan personalizado.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Preparación</h3>
            <p className="text-purple-100">
              Planeamos cada detalle: locaciones, horarios, outfits y momentos clave.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">El Día</h3>
            <p className="text-purple-100">
              Capturo cada momento importante con discreción y profesionalismo.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-blue-700 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega</h3>
            <p className="text-purple-100">
              Recibes tus fotos editadas profesionalmente en un formato hermoso y permanente.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-container bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-xl text-royal-blue-600">
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
      <section className="section-container bg-gradient-to-br from-royal-blue-900 via-royal-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">
            Fechas Limitadas Disponibles
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Solo tomo un número limitado de eventos por mes para asegurar la máxima calidad 
            y atención personalizada. Las fechas populares (especialmente temporada de bodas) 
            se agotan rápidamente.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-3xl font-bold mb-2">Temporada Alta: Noviembre - Febrero</p>
            <p className="text-purple-100">
              Si planeas una boda o evento importante en estos meses, te recomiendo reservar 
              con al menos 4-6 meses de anticipación.
            </p>
          </div>
          <a
            href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-royal-blue-700 hover:bg-purple-50 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Reservar Mi Fecha Ahora</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-50 to-royal-blue-50 rounded-3xl p-12 md:p-16">
          <h2 className="heading-2 mb-6">
            ¿Listo Para Capturar Tu Momento Especial?
          </h2>
          <p className="text-xl text-royal-blue-600 mb-8">
            Cada historia merece ser contada. Trabajemos juntos para crear imágenes 
            que celebrarás por siempre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Reservar Fecha
            </a>
            <Link to="/portafolio" className="btn-secondary text-lg px-8 py-4">
              Ver Portafolio Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
