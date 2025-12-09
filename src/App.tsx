import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ForumPage } from './pages/ForumPage'
import { EventsPage } from './pages/EventsPage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F1419]">
        {/* Top Banner */}
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#00D4FF] text-[#0A0E14] py-2 px-6 text-center text-sm font-medium">
          Este site é fictício e faz parte do ecossistema de projetos de portfólio do <a href="https://amathyzin.xyz" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">aMathyzin.xyz</a>
        </div>
        <div className="pt-9">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App