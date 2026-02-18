import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  image?: string
  link: string
  featured?: boolean
}

export default function ServiceCard({
  title,
  description,
  image,
  link,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link
      to={link}
      className={`group block rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary-500/25 hover:scale-[1.02] ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-gradient-to-br from-primary-400 to-deep-blue">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 via-deep-blue to-navy flex items-center justify-center">
            <span className="text-white/60 text-sm">Foto de {title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 mb-4 line-clamp-2 opacity-90">{description}</p>
          <span className="inline-flex items-center text-white font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-sky-blue">
            Ver más <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
