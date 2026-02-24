import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contacto() {
  return (
    <div className="section-container bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas? ¿Quieres discutir tu proyecto? Estoy aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-gray-900" />
              <h3 className="text-xl font-bold">Teléfono</h3>
            </div>
            <p className="text-gray-700 mb-2">WhatsApp / Llamadas</p>
            <a href="tel:+50660140366" className="text-gray-900 font-medium hover:text-gray-700">
              +506 6014-0366
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-gray-900" />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className="text-gray-700 mb-2">Correo electrónico</p>
            <a href="mailto:eyalllogan@gmail.com" className="text-gray-900 font-medium hover:text-gray-700">
              eyalllogan@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-gray-900" />
              <h3 className="text-xl font-bold">Ubicación</h3>
            </div>
            <p className="text-gray-700">
              Costa Rica<br />
              Disponible para viajar a todo el país
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-gray-900" />
              <h3 className="text-xl font-bold">Horarios</h3>
            </div>
            <div className="space-y-1 text-gray-700">
              <p>Viernes, Sábado, Domingo: Eventos</p>
              <p>Lunes a Jueves: 2pm a 10pm</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">¿Prefieres WhatsApp?</h3>
            <p className="text-green-100 mb-4">
              Escríbeme directamente para una respuesta más rápida.
            </p>
            <a
              href="https://wa.me/50660140366"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center space-x-2"
            >
              <span>Abrir WhatsApp</span>
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
