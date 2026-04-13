import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaChevronDown } from 'react-icons/fa'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ThemeToggleBtn from './ThemeToogleBtn'
import { services } from '../assets/assets'

function Navbar({ setSidebarOpen, theme, setTheme }) {

  const {setShowSearch, getCartCount} = useContext(ShopContext) 

  return (
    <div className='flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-30 backdrop-blur-xl bg-white dark:bg-[#1A1A1A] dark:text-white font-medium w-full'>
      <Link to='/'>
        <img
          className='w-15 h-15 sm:w-15 cursor-pointer'
          src={theme === 'dark' ? assets.toptech_img : assets.toptech_img}
          alt=''
        />
      </Link>

      {/*<ul className='hidden sm:flex gap-6 text-sm text-gray-700 '>
        {[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'About', path: '/about' },
          { name: 'Shop', path: '/shop' },
          { name: 'ContactUs', path: '/contact-us' },
        ].map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 cursor-pointer ${isActive ? 'text-[#BF9A33]' : 'text-gray-700'} hover:text-[#BF9A33]`
            }
          >
            {({ isActive }) => (
              <>
                <span>{name}</span>

                
                <span
                  className={`
              hidden sm:block
              h-[2px] w-1/2
              transition-all duration-300
              ${isActive ? 'bg-gray-700' : 'bg-transparent'}
              group-hover:bg-[#BF9A33]
            `}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul> */}

      <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>

  {/* HOME */}
  <NavLink to='/' className={({ isActive }) =>
    `dark:text-white group flex flex-col items-center gap-1 ${isActive ? 'text-[#BF9A33]' : ''}`
  }>
    <span>Home</span>
    <span className='h-[2px] w-1/2 bg-transparent group-hover:bg-[#BF9A33] transition-all duration-300'></span>
  </NavLink>

  {/* SERVICES (CUSTOM DROPDOWN) */}
  <li className="relative group list-none">
    <div className="flex flex-col items-center cursor-pointer dark:text-white hover:text-[#BF9A33]">
      <span className='flex gap-1'>Services<FaChevronDown className='flex mt-1'/></span>
      <span className="h-[2px] w-1/2 bg-transparent group-hover:bg-[#BF9A33] transition-all duration-300"></span>
    </div>

    {/* DROPDOWN */}
    <div className="absolute left-0 mt-4 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
      <div className="py-4">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            style={{
              transitionDelay: `${index * 80}ms`,
              transitionDuration: '300ms'
            }}
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  </li>

  {/* ABOUT */}
  <NavLink to='/about' className={({ isActive }) =>
    `dark:text-white group flex flex-col items-center gap-1 ${isActive ? 'text-[#BF9A33]' : ''}`
  }>
    <span>About</span>
    <span className='h-[2px] w-1/2 bg-transparent group-hover:bg-[#BF9A33] transition-all duration-300'></span>
  </NavLink>

  {/* SHOP */}
  <NavLink to='/shop' className={({ isActive }) =>
    `dark:text-white group flex flex-col items-center gap-1 ${isActive ? 'text-[#BF9A33]' : ''}`
  }>
    <span>Shop</span>
    <span className='h-[2px] w-1/2 bg-transparent group-hover:bg-[#BF9A33] transition-all duration-300'></span>
  </NavLink>

  {/* CONTACT */}
  <NavLink to='/contact-us' className={({ isActive }) =>
    `dark:text-white group flex flex-col items-center gap-1 ${isActive ? 'text-[#BF9A33]' : ''}`
  }>
    <span>ContactUs</span>
    <span className='h-[2px] w-1/2 bg-transparent group-hover:bg-[#BF9A33] transition-all duration-300'></span>
  </NavLink>

</ul>

      <div className='flex items-center gap-6'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <FaSearch
          onClick={() => setShowSearch(true)}
          className='cursor-pointer'
        />
        <div className='group relative'>
          <Link to='/login'>
            <FaUser className='cursor-pointer' />
          </Link>
        </div>
        <Link to='/cart' className='relative'>
          <FaShoppingCart />
          <p className='absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-3 text-center leading-4 bg-[#BF9A33] text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger */}
        <FaBars
          onClick={() => setSidebarOpen(true)}
          className='w-5 cursor-pointer sm:hidden text-[#BF9A33]'
        />
      </div>
    </div>
  )
}

export default Navbar


































































{/* import {
  FaHome,
  FaServicestack,
  FaBriefcase,
  FaPhone,
  FaBars,
  FaArrowRight,
} from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import ThemeToggleBtn from './ThemeToogleBtn'
import { motion } from 'framer-motion'

function Navbar({ theme, setTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 z-50 backdrop-blur-xl font-medium bg-white/90 dark:bg-gray-900/90'
    >
      <Link to = '/'>
        <img
          className='w-15 h-15 sm:w-15 cursor-pointer'
          src={theme === 'dark' ? assets.toptech_img : assets.toptech_img}
          alt=''
        />
      </Link>

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#BF9A33] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <FaX
          className='w-5 absolute right-4 top-4 sm:hidden'
          onClick={() => setSidebarOpen(false)}
        />

        <Link
          to='/'
          onClick={() => setSidebarOpen(false)}
          className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'
        >
          <FaHome className='text-lg sm:hidden' />
          <span>Home</span>
        </Link>

        <Link
          to='/services'
          onClick={() => setSidebarOpen(false)}
          className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'
        >
          <FaServicestack className='text-lg sm:hidden' />
          <span>Services</span>
        </Link>

        <Link
          to='/about'
          onClick={() => setSidebarOpen(false)}
          className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'
        >
          <FaBriefcase className='text-lg sm:hidden' />
          <span>About</span>
        </Link>

        <Link
          to='/contact-us'
          onClick={() => setSidebarOpen(false)}
          className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'
        >
          <FaPhone className='text-lg sm:hidden' />
          <span>Contact Us</span>
        </Link>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <FaBars
          onClick={() => setSidebarOpen(true)}
          className={`text-2xl cursor-pointer sm:hidden ${theme === 'dark' ? 'text-[#BF9A33]' : 'text-[#BF9A33]'} `}
        />

        <Link
          to='/contact-us'
          className='text-sm max-sm:hidden flex items-center gap-2 bg-[#BF9A33] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          Connect <FaArrowRight />{' '}
        </Link>
      </div>
    </motion.div>
  )
}

export default Navbar  */}
