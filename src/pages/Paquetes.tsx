import { Camera, Palette, Cloud, ArrowRight } from 'lucide-react'

export default function Paquetes() {
  return (
    <div className="bg-primary-50">
      {/* Hero */}
      <section className="section-container bg-gradient-to-br from-primary-500 via-deep-blue to-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6 text-white">Paquetes</h1>
          <p className="text-xl text-primary-100">
            Servicios profesionales de fotografía adaptados a tus necesidades.
          </p>
        </div>
      </section>

      {/* ¿Qué Incluyen Todos los Paquetes? */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 mb-12 text-center text-primary-800">¿Qué Incluyen Todos los Paquetes?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fotografía Profesional */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-primary-800">Fotografía Profesional</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Equipamiento de última generación
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Experiencia y técnica probada
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Enfoque artístico y profesional
                </li>
              </ul>
            </div>

            {/* Edición de Calidad */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-primary-800">Edición de Calidad</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Corrección de color profesional
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Retoque y optimización
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Estilo consistente y elegante
                </li>
              </ul>
            </div>

            {/* Entrega Premium */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-primary-800">Entrega Premium</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Álbum digital en alta resolución
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Formato listo para imprimir
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Acceso permanente online
                </li>
                <li className="flex items-start text-primary-600">
                  <span className="text-primary-500 mr-2">•</span>
                  Almacenamiento en nube y link transferible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Necesitas un Paquete Personalizado? */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-navy via-deep-blue to-primary-800 rounded-[2rem] p-12 text-center text-white shadow-2xl">
            <h2 className="heading-2 mb-6 text-white">¿Necesitas un Paquete Personalizado?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Trabajemos juntos para crear un paquete que se ajuste perfectamente a tus necesidades.
            </p>
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría una cotización personalizada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Contactar para Cotización Personalizada</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
