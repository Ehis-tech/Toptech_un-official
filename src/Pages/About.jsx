import Teams from "../Components/Teams"
import Title from "../Components/Title"


function About() {
  return (
    <div className='pt-20'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='flex flex-col border border-[#BF9A33] items-center mt-10 px-10 py-5 mx-auto my-6 w-full max-w-[660px] '>
        <h1 className='text-2xl text-gray-700 mb-2'>
          Our <span className='text-2xl text-[#BF9A33]'>History</span>
        </h1>
        <p className='text-sm text-gray-600 dark:text-700'>
          We started from humble beginnings in the year 2013, our first building
          was located at oregun and we were having less than 50 staffs but still
          thriving due to our professionalism and we were being reffered by
          other companies who were very much satisfied with our work. Fast
          foward to 2026 our building is located at Oguntana Cresent,Gbagada and
          we are having well over more than 85 staffs and more as offsite
          engineers. We have grown rapidly having branches in different parts of
          the country like Lagos, Benin,Cross river, Abuja as well as other
          parts of the country eg; Kenya, Ghana, Benin. We are proudly 13 years
          into the business. Now we have partnerhsip with other companies,
          District.Eng & Hafol Resources
        </p>
      </div>

      <Teams />
    </div>
  )
}

export default About

