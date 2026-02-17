import assets from '../assets/assets'
import { motion } from 'motion/react'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer({ theme }) {
  return (
    <div className='bg-[#BF9A33] dark:bg-[#A57B0A] pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-white dark:text-gray-700'>
          <img
            src={theme === 'dark' ? assets.toptech_img : assets.toptech_img}
            className='w-10 sm:w-10'
            alt=''
          />
          <p className='max-w-md'>
            From strategy to execution, we craft power solutions that move your
            business foward.
          </p>

          <ul className='flex gap-8'>
            <li>
              <Link to='/' className='hover:text-[#A57B0A]'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/services' className='hover:text-[#A57B0A]'>
                Services
              </Link>
            </li>
            <li>
              <Link to='/our-work' className='hover:text-[#A57B0A]'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact-us' className='hover:text-[#A57B0A]'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className=' text-white dark:text-gray-400'>
          <h3 className='font-semibold'>Send Us A Mail Today</h3>
          <p className='text-sm mt-2 mb-6'>
            Tell Us Which Of Our Services You Need.
          </p>
          <div className='flex gap-2 text-sm'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
            />
            <button className='hover:bg-[#A57B0A] p-3 text-white rounded cursor-pointer hover:scale-103'>
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/*footer bottom */}

      <div className='pb-6 text-sm text-white dark:text-gray-700 flex justify-center sm:justify-between gap-4 flex-wrap'>
        <p>Copyright 2025 @Toptech - All Right Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <a
            href='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
          >
            <FaFacebook className='text-xl cursor-pointer' />{' '}
          </a>

          <a
            href='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Instagram'
          >
            <FaInstagram className='text-xl cursor-pointer' />{' '}
          </a>

          <a
            href='https://www.linkedin.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Linkedin'
          >
            <FaLinkedin className='text-xl cursor-pointer' />{' '}
          </a>

          <a
            href='https://www.twitter.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter'
          >
            <FaTwitter className='text-xl cursor-pointer' />{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
