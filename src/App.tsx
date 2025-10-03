import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import SnowParticles from './components/SnowParticles'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import './styles/globals.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Background Elements */}
        <div className="background-container">
          <SnowParticles />
        </div>

        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
