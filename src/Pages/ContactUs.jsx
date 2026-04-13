import FaultCall from '../Components/FaultCall'
import Title from '../Components/Title'

function ContactUs() {
  return (
    <div className='pt-20 mb-5'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
       
        <div className='w-full px-4 md:px-0 md:w-[50%]'>
           <iframe
          src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15850.787320094047!2d3.3691251500000003!3d6.684426749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b8d9ebf0bf09b%3A0xd18bc922c8848780!2sToptech%20Engineering%20Ltd.%2C%209%2C%20Oguntona%20Crescent%2C%20Off%20Oworonsoki%2FOshodi%20Expressway%20Gbagada%20Phase%20One%2C%20Gbagada%2C%20Lagos!3m2!1d6.5498102!2d3.3752492999999997!5e0!3m2!1sen!2sng!4v1773959511488!5m2!1sen!2sng'
          style={{ border: 0 }}
          allowfullscreen
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-lg shadow-md '
        ></iframe>
        </div>
       
        <div className='flex flex-col justify-center items-center gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Loctaion</p>
          <p className='text-gray-500'>
            No 9 Oguntana Cresent <br /> off Gbagada Road Phase I
          </p>
          <p className='text-gray-500'>
            Tel: (234) 8101415188 <br /> Email: info@toptechengineeringltd.com
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
