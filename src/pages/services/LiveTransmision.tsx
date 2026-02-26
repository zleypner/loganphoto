import { ArrowRight } from 'lucide-react'
import Hero from '../../components/Hero'
import GalleryGrid from '../../components/GalleryGrid'
import PricingCard from '../../components/PricingCard'
import FAQAccordion from '../../components/FAQAccordion'
import { services } from '../../data/services'

export default function LiveTransmision() {
  const service = services.find(s => s.id === 'live-transmision')!

  return (
    <div>
      <Hero
        title="LIVE-Transmisión en vivo"
        subtitle="Lleva tu evento a quien no pueda estar presente."
      />

      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center mb-12">
            <h2 className="heading-2 mb-6">Transmisión en vivo profesional</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-lg text-primary-600 leading-relaxed">
              Transmitimos bodas, conferencias, lanzamientos y eventos en vivo con calidad
              estable y enlace compartible para que tus invitados vivan el momento desde cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container bg-primary-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Transmisiones en vivo</h2>
        </div>
        <GalleryGrid images={service.gallery} columns={3} />
      </section>

      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Proceso</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-700 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-primary-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container bg-gradient-to-r from-primary-700 to-primary-700 text-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-white">Paquetes de transmisión en vivo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.packages.map((pkg, index) => (
            <PricingCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              description={`Paquete ${pkg.name} para ${service.title}`}
              features={pkg.features}
              popular={index === 1}
            />
          ))}
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Preguntas Frecuentes</h2>
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      <section className="section-container bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 text-white">Transmite tu evento en vivo</h2>
          <a
            href="https://wa.me/50660140366?text=Hola, me gustaría cotizar una transmisión en vivo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex items-center space-x-2 text-lg px-8 py-4"
          >
            <span>Cotizar transmisión</span>
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  )
}
