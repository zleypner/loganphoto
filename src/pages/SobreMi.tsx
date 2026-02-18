import { Link } from 'react-router-dom'
import { Award, Camera, Heart, ArrowRight } from 'lucide-react'

export default function SobreMi() {
  return (
    <div className="bg-primary-50">
      {/* Hero */}
      <section className="section-container bg-gradient-to-br from-primary-500 via-deep-blue to-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <Camera className="w-16 h-16 text-primary-700" />
          </div>
          <h1 className="heading-1 mb-6 text-white">Sobre Mí</h1>
          <p className="text-xl text-primary-100">
            Fotógrafo profesional apasionado por capturar momentos auténticos
            y crear imágenes que perduran para siempre.
          </p>
        </div>
      </section>

      {/* Historia - Bento Grid */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card principal */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="heading-2 mb-6 text-primary-800">Mi Historia</h2>
              <p className="text-lg text-primary-700 leading-relaxed mb-6">
                Mi pasión por la fotografía comenzó hace más de 10 años, cuando descubrí que
                tenía la capacidad de congelar momentos en el tiempo y contar historias a través
                de imágenes.
              </p>
              <p className="text-lg text-primary-600 leading-relaxed">
                He tenido el privilegio de trabajar con más de 200 parejas, familias y empresas,
                capturando desde bodas íntimas hasta eventos corporativos grandes.
              </p>
            </div>

            {/* Cards pequeñas */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-primary-500 to-deep-blue rounded-[2rem] p-8 text-white shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-3">Mi Enfoque</h3>
                <p className="text-primary-100">
                  Combino técnica profesional con un ojo artístico, siempre buscando
                  capturar la emoción auténtica y los detalles especiales.
                </p>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3 text-primary-800">Mi Filosofía</h3>
                <p className="text-primary-600">
                  La mejor fotografía no es la más perfecta técnicamente, sino la que
                  mejor transmite una emoción y cuenta una historia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credenciales - Bento */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-12 text-center text-primary-800">Credenciales y Experiencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 rounded-[2rem] p-8 text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Más de 200 Eventos</h3>
              <p className="text-primary-600">
                Experiencia comprobada en bodas, eventos corporativos, celebraciones y más.
              </p>
            </div>
            <div className="bg-primary-50 rounded-[2rem] p-8 text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">Educación Continua</h3>
              <p className="text-primary-600">
                Certificaciones profesionales y constante actualización en técnicas.
              </p>
            </div>
            <div className="bg-primary-50 rounded-[2rem] p-8 text-center hover:scale-[1.02] transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-800">100% Comprometido</h3>
              <p className="text-primary-600">
                Cada proyecto recibe la misma atención al detalle y dedicación personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía - Bento */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-8 text-center text-primary-800">Mi Filosofía de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Autenticidad por Encima de Todo</h3>
              <p className="text-primary-600">
                Las mejores fotos capturan momentos reales y emociones genuinas. Trabajo de manera
                discreta para que puedas ser tú mismo/a frente a la cámara.
              </p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Atención Personalizada</h3>
              <p className="text-primary-600">
                Cada cliente es único. Dedico tiempo a entender tu visión y expectativas para crear
                un resultado que refleje quién eres.
              </p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Calidad Sin Compromisos</h3>
              <p className="text-primary-600">
                Equipamiento profesional de última generación y estándares editoriales en cada foto.
                La edición es parte integral del proceso.
              </p>
            </div>
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <h3 className="text-xl font-bold mb-3 text-primary-800">Compromiso a Largo Plazo</h3>
              <p className="text-primary-600">
                Estas fotos serán tesoros familiares por generaciones. Mi compromiso es crear
                imágenes que atesores toda la vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="section-container bg-gradient-to-br from-primary-500 via-deep-blue to-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">Mi Promesa a Ti</h2>
          <p className="text-xl text-primary-100 mb-8">
            Estoy comprometido con tu satisfacción. Si no estás completamente feliz con tus fotos,
            trabajaré contigo para hacer los ajustes necesarios.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-8">
            <p className="text-lg text-white">
              <strong>Garantía de Calidad:</strong> Si hay algún problema técnico o no estás satisfecho
              con el resultado, revisaré y corregiré sin costo adicional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-50 to-primary-50 rounded-[2rem] p-12">
          <h2 className="heading-2 mb-6 text-primary-800">Trabajemos Juntos</h2>
          <p className="text-xl text-primary-600 mb-8">
            Si mi estilo y filosofía resuenan contigo, me encantaría ser parte de tu historia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link to="/contacto" className="bg-white text-primary-700 border-2 border-primary-700 text-lg px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <span>Contactar</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
