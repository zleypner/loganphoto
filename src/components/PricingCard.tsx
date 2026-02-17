import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Reservar',
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
        popular
          ? 'bg-gradient-to-br from-royal-blue-700 to-purple-700 text-white transform scale-105 border-4 border-purple-500'
          : 'bg-white'
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-white text-royal-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={`mb-6 ${popular ? 'text-purple-100' : 'text-royal-blue-600'}`}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                popular ? 'text-white' : 'text-royal-blue-700'
              }`}
            />
            <span className={popular ? 'text-purple-50' : 'text-royal-blue-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/50660140366?text=Hola, me gustaría reservar una fecha"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-white text-royal-blue-700 hover:bg-purple-50'
            : 'bg-gradient-to-r from-royal-blue-700 to-purple-700 text-white hover:from-royal-blue-800 hover:to-purple-800'
        }`}
      >
        {ctaText}
      </a>
    </div>
  )
}
