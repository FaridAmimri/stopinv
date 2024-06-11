/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <div className='max-width'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accueil' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/notreentreprise' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </div>
  )
}

export default App
