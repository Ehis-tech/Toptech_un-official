import { assets } from '../assets/assets'
import Title from "./Title"

function WhyChooseUs() {
  return (
    <div className='py-20 mt-10'>
      <Title text1={'Why Choose'} text2={'Us?'} />

      <div className='max-w-7xl mx-auto px-4 mt-5'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>

          {/* TEXT SECTION */}
          <div className='w-full lg:w-1/2'>
            <h1 className='text-3xl font-bold mb-4 dark:text-gray-500'>
              Here's why you should <span className='text-[#BF9A33]'>Choose</span> Us
            </h1>

            <p className='max-w-lg dark:text-gray-500'>
              At Toptech we offer state of the art engineering solutions and we provide professional certified engineers to handle your projects within your provided time frame.
            </p>

            <div className='mt-8'>
              <h2 className='text-xl font-bold dark:text-gray-500'>State of the art solutions</h2>
              <p className='text-sm dark:text-gray-500'>
                We analyze your project carefully and deliver the best engineering solutions using experienced professionals.
              </p>
            </div>

            <div className='mt-8'>
              <h2 className='text-xl font-bold dark:text-gray-500'>Quality Materials</h2>
              <p className='text-sm dark:text-gray-500'>
                We use only top-quality materials and the right tools to ensure safety and durability.
              </p>
            </div>

            <div className='mt-8'>
              <h2 className='text-xl font-bold dark:text-gray-500'>Professional Services</h2>
              <p className='text-sm dark:text-gray-500'>
                Our engineers are certified professionals across different specializations.
              </p>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className='hidden lg:flex w-1/2 justify-end'>
            <img
              src={assets.engineering_img}
              className='w-[500px] h-[500px] object-cover rounded-lg'
              alt='Engineering'
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
