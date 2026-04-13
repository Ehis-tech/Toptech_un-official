import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Home from './Pages/Home'
import ServiceDetails from './Pages/ServiceDetails'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Sidebar from './Components/Sidebar'
import Orders from './Pages/Orders'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { Toaster } from 'react-hot-toast'
import BlogDetails from './Pages/BlogDetails'
import GetStarted from './Pages/GetStarted'
import RequestQuote from './Pages/RequestQuote'


function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  )

   const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className='dark:bg-black relative overflow-x-hidden'>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          setSidebarOpen={setSidebarOpen}
        />

        <Toaster
          position='top-center'
          toastOptions={{
            style: {
              background: '#BF9A33',
              color: '#fff',
              fontWeight: '500',
            },
          }}
          containerStyle={{
            top: 80,
          }}
        />

        <SearchBar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services/:slug' element={<ServiceDetails />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/blog-details/:id' element={<BlogDetails />} />
            <Route path='/get-started' element={<GetStarted />} />
            <Route path='/request-quote' element={<RequestQuote />} />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </Router>
  )
}

export default App
