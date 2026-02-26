import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Bodas from './pages/services/Bodas'
import QuinceAnios from './pages/services/QuinceAnios'
import Fiestas from './pages/services/Fiestas'
import Corporativo from './pages/services/Corporativo'
import LiveTransmision from './pages/services/LiveTransmision'
import Paquetes from './pages/Paquetes'
import SobreMi from './pages/SobreMi'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'
import FAQ from './pages/FAQ'
import AdminReservas from './pages/AdminReservas'

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  )
}

export default App
