import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle?: string
  image?: string
  ctaText?: string
  ctaLink?: string
  showSecondaryCta?: boolean
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function Hero({
  title,
  subtitle,
  image,
  ctaText = 'Reservar Fecha',
  ctaLink = 'https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha',
  showSecondaryCta = true,
  secondaryCtaText = 'Ver Portafolio',
  secondaryCtaLink = '/portafolio',
}: HeroProps) {
  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-500 via-deep-blue to-navy"
        style={{
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!image && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 via-deep-blue/95 to-navy/95" />
        )}
        {image && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-navy/80 to-primary-900/80" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="heading-1 mb-6 text-white drop-shadow-2xl font-extrabold">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-xl font-medium">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctaLink.startsWith('http') ? (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 hover:scale-105 inline-flex items-center space-x-2 group shadow-2xl transition-all duration-300"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <Link
              to={ctaLink}
              className="bg-white text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 hover:scale-105 inline-flex items-center space-x-2 group shadow-2xl transition-all duration-300"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {showSecondaryCta && (
            <Link
              to={secondaryCtaLink}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-primary-500 inline-flex items-center transition-all duration-300"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
