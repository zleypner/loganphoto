import { Link } from 'react-router-dom'
import { Camera, Instagram, Facebook, Mail, Phone } from 'lucide-react'
import FooterCredit from './FooterCredit'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy via-deep-blue to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-sky-blue" />
              <span className="text-xl font-bold">Logan Photography</span>
            </Link>
            <p className="text-primary-100 mb-4 max-w-md">
              Capturando momentos inolvidables con arte y profesionalismo.
              Especializados en bodas, eventos, corporativo y más.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/eyall.logan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-sky-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-sky-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portafolio" className="text-primary-100 hover:text-sky-blue transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/paquetes" className="text-primary-100 hover:text-sky-blue transition-colors">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-primary-100 hover:text-sky-blue transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link to="/testimonios" className="text-primary-100 hover:text-sky-blue transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-100 hover:text-sky-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-primary-100">
                <Phone className="w-4 h-4" />
                <a href="tel:+50660140366" className="hover:text-sky-blue transition-colors">
                  +506 6014-0366
                </a>
              </li>
              <li className="flex items-center space-x-2 text-primary-100">
                <Mail className="w-4 h-4" />
                <a href="mailto:eyalllogan@gmail.com" className="hover:text-sky-blue transition-colors">
                  eyalllogan@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block btn-secondary bg-white text-primary-500 hover:bg-primary-50"
            >
              Reservar Fecha
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700 text-center text-primary-100 text-sm">
          <p>&copy; {new Date().getFullYear()} Logan Photography. Todos los derechos reservados.</p>
          <FooterCredit />
        </div>
      </div>
    </footer>
  )
}
