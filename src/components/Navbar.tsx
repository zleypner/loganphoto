import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Logos Logan/todos/Transparente negro sin slogan.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/portafolio', label: 'Portafolio' },
    { path: '/paquetes', label: 'Paquetes' },
    { path: '/sobre-mi', label: 'Sobre mí' },
    { path: '/testimonios', label: 'Testimonios' },
    { path: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="Logan Photography"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-foreground hover:text-primary-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Reservar Fecha
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-foreground hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 btn-primary text-center"
            >
              Reservar Fecha
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
