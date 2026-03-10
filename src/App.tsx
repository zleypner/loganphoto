import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Bodas = lazy(() => import('./pages/services/Bodas'))
const QuinceAnios = lazy(() => import('./pages/services/QuinceAnios'))
const Fiestas = lazy(() => import('./pages/services/Fiestas'))
const Corporativo = lazy(() => import('./pages/services/Corporativo'))
const LiveTransmision = lazy(() => import('./pages/services/LiveTransmision'))
const Paquetes = lazy(() => import('./pages/Paquetes'))
const SobreMi = lazy(() => import('./pages/SobreMi'))
const Testimonios = lazy(() => import('./pages/Testimonios'))
const Contacto = lazy(() => import('./pages/Contacto'))
const FAQ = lazy(() => import('./pages/FAQ'))
const AdminReservas = lazy(() => import('./pages/AdminReservas'))

// Loading spinner component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/bodas" element={<Bodas />} />
            <Route path="/15-anios" element={<QuinceAnios />} />
            <Route path="/fiestas" element={<Fiestas />} />
            <Route path="/corporativo" element={<Corporativo />} />
            <Route path="/live-transmision" element={<LiveTransmision />} />
            <Route path="/paquetes" element={<Paquetes />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin-reservas" element={<AdminReservas />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
