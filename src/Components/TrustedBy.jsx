import { company_logos } from '../assets/assets'
import Marquee from 'react-fast-marquee'

function TrustedBy() {
  return (
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 mt-10'>
      <h3 className='font-bold text-gray-600 text-2xl sm:text-3xl text-center'>
        Trusted By{' '}
        <span className='text-[#BF9A33] font-bold'>Leading Companies</span>
      </h3>

      <div className='w-full'>
        <Marquee speed={60} gradient={false} pauseOnHover={true}>
          {company_logos.map((logo, index) => (
            <div
              key={index}
              className='mx-4 flex items-center justify-center
              bg-[#f9f9f9] rounded-xl
              p-6 sm:p-8 lg:p-10
              shadow-sm'
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className='
                h-12 sm:h-16 lg:h-24
                w-auto
                object-contain
                transition-transform duration-300
                hover:scale-110
                '
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default TrustedBy
