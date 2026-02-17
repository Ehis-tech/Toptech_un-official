import { FaHome, FaServicestack, FaBriefcase, FaPhone, FaBars, FaArrowRight } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { useState } from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import ThemeToggleBtn from './ThemeToogleBtn'

function Navbar({theme, setTheme}) {

 const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 z-50 backdrop-blur-xl font-medium bg-white/90 dark:bg-gray-900/90'>


     <img className='w-15 h-15 sm:w-15 cursor-pointer' src={ theme === 'dark' ? assets.toptech_img : assets.toptech_img } alt='' />

     <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-[#BF9A33] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

      <FaX className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)} />

       <Link
         to='/'
         onClick={()=>setSidebarOpen(false)} 
         className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'>
         <FaHome className='text-lg sm:hidden' />
         <span>Home</span>
         </Link>


        <Link
         to='/services'
         onClick={()=>setSidebarOpen(false)} 
         className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'>
         <FaServicestack className='text-lg sm:hidden' />
         <span>Services</span>
         </Link>


        <Link
         to='/about'
         onClick={()=>setSidebarOpen(false)} 
         className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'>
         <FaBriefcase className='text-lg sm:hidden' />
         <span>About</span>
         </Link>


        <Link
         to='/contact-us'
         onClick={()=>setSidebarOpen(false)} 
         className='flex items-center gap-3 sm:justify-center sm:hover:border-b max-sm:py-7'>
         <FaPhone className='text-lg sm:hidden' />
         <span>Contact Us</span>
         </Link>

     </div>

     <div className='flex items-center gap-2 sm:gap-4'>

       <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

        <FaBars onClick={()=> setSidebarOpen(true)} className={`text-2xl cursor-pointer sm:hidden ${theme === 'dark' ? 'text-[#BF9A33]' : 'text-[#BF9A33]'} `} />

          <Link to='/contact-us' className='text-sm max-sm:hidden flex items-center gap-2 bg-[#BF9A33] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Connect  <FaArrowRight/> </Link>


     </div>
      
    </div>
  )
}

export default Navbar
