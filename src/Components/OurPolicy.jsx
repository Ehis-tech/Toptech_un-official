
import { FaCertificate, FaPhone } from 'react-icons/fa'
import { assets } from '../assets/assets'
import { FaRecycle } from 'react-icons/fa6'
import Title from "./Title"

function OurPolicy() {
  return (
    <div className='text-center mt-10 px-4'>
      <Title text1={'Our'} text2={'Policy'} />

      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
          <FaRecycle className='w-12 m-auto mb-5 text-[#BF9A33] text-3xl' />
          <p className='font-semibold dark:text-gray-500'>
            Easy Exchange Policy
          </p>
          <p className='text-[#BF9A33]'>We provide stop-gap during downtime</p>
        </div>

        <div>
          <FaCertificate className='w-12 m-auto mb-5 text-[#BF9A33] text-3xl' />
          <p className='font-semibold dark:text-gray-500'> Quality Services</p>
          <p className='text-[#BF9A33]'>We provide quality services</p>
        </div>

        <div>
          <FaPhone className='w-12 m-auto mb-5 text-[#BF9A33] text-3xl' />
          <p className='font-semibold dark:text-gray-500'>
            Best Customer Support
          </p>
          <p className='text-[#BF9A33]'>We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
