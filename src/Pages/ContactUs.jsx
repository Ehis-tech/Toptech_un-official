import assets from '../assets/assets'
import FaultCall from '../Components/FaultCall'
import Title from '../Components/Title'


function ContactUs() {
  return (
    <div className='pt-20'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          className='w-full md:max-w-[480px]'
          src={assets.contactus_img}
          alt=''
        />
        <div className='flex flex-col justify-center items-start gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Loctaion</p>
          <p className='text-gray-500'>
            No 9 Oguntana Cresent <br /> off Gbagada Road Phase I
          </p>
          <p className='text-gray-500'>
            Tel: (234) 284-5032 <br /> Email: toptech@gmail.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>
            Carrers at Toptech
          </p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>
          <button className='dark:text-white border border-black dark:border-[#BF9A33] px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>
            Explore Jobs
          </button>
        </div>
      </div>

      <FaultCall />
    </div>
  )
}

export default ContactUs
