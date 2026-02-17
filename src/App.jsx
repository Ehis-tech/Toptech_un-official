import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Footer from './Components/Footer'

function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <Router>
      <div className='dark:bg-black relative overflow-x-hidden'>
        {/*<Toaster/>  */}
        <Navbar theme={theme} setTheme={setTheme} />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  )
}

export default App
