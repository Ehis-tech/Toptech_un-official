import { company_logos } from "../assets/assets"

function TrustedBy() {

  return (
    <div
     className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80 mt-10'>
      <h3 className='font-bold text-gray-600 text-3xl'> Trusted By <span className='text-[#BF9A33] text-3xl font-bold'>Leading Companies</span></h3>

      <div
      className=' flex flex-col items-center gap-6
    sm:flex-row sm:flex-wrap sm:justify-evenly sm:gap-10
    m-4'>
       {company_logos.map((logo, index)=>(
        <img
         key={index} src={logo} alt='' className='h-10
        sm:h-14
        lg:h-20
        object-contain
        transition-all duration-300
        dark:drop-shadow-xl' />
       ))}
      </div>
    </div>
  )
}

export default TrustedBy