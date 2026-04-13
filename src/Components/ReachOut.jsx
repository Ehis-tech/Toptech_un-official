import assets from "../assets/assets"
import { Link } from "react-router-dom"


function ReachOut() {
  return (
    <div className='relative bg-[#fffff] pt-24 pb-30 overflow-hidden md:mt-65 mt-5'>
      {/* SLANTED HERO BACKGROUND */}
      <div
        className='absolute inset-0 bg-gradient-to-r from-[#0b1f3a] to-[#1c3d6b]'
        style={{
          clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
        }}
      ></div>

      <div className='relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center'>
        {/* IMAGE (OVERLAPPING) */}
        <div className='w-full md:w-1/2 relative'>
          <img
            src={assets.toptech_woman_purple_10}
            alt='Consultation'
            className='w-[85%] md:w-[75%] relative z-10 -mt-20 md:-mt-32 shadow-xl rounded-md '
          />
        </div>

        {/* TEXT */}
        <div className='w-full md:w-1/2 text-white mt-10 md:mt-0 space-y-6 text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Request a free <br /> consultation session
          </h1>

          <p className='text-gray-300 max-w-md mx-auto md:mx-0'>
            Our teams will help you with your enquiries regarding your power,
            cooling, or IT needs and help you achieve best practice in your
            infrastructure.
          </p>

          <Link to='/request-quote'>
          <button className='bg-[#BF9A33] hover:bg-[#A57B0A] px-6 py-3 rounded-md font-medium transition cursor-pointer'>
            Request Quote →
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReachOut
