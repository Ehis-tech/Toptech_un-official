import { NavLink, Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'
import { services } from '../assets/assets'
import { FaChevronDown } from 'react-icons/fa'

function Sidebar({ open, onClose }) {
  const [view, setView] = useState('main') // 'main' or 'services'

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#BF9A33] transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
      
      {/* MAIN MENU */}
      {view === 'main' && (
        <div className="flex flex-col h-full text-white">
          <div onClick={onClose} className="flex items-center gap-4 p-4 border-b cursor-pointer">
            <FaChevronLeft className="rotate-180" />
            <p>Back</p>
          </div>

          <NavLink onClick={onClose} className='py-3 pl-6 border-b' to='/'>Home</NavLink>
          <NavLink onClick={onClose} className='py-3 pl-6 border-b' to='/about'>About</NavLink>

          {/* SERVICES CLICK */}
 <div onClick={() => setView('services')} className='py-3 pl-6 border-b cursor-pointer flex'>Services<FaChevronDown className='flex mt-1.5 gap-2'/></div>

          <NavLink onClick={onClose} className='py-3 pl-6 border-b' to='/shop'>Shop</NavLink>
          <NavLink onClick={onClose} className='py-3 pl-6 border-b' to='/contact-us'>Contact</NavLink>
        </div>
      )}

      {/* SERVICES MENU */}
      {view === 'services' && (
        <div className="flex flex-col h-full text-white">
          <div onClick={() => setView('main')} className="flex items-center gap-4 p-4 border-b cursor-pointer">
            <FaChevronLeft />
            <p>Back</p>
          </div>

          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              onClick={onClose}
              className="py-3 pl-6 border-b opacity-0 translate-y-2 animate-fadeIn"
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Sidebar
