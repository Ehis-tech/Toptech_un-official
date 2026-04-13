import { useParams } from 'react-router-dom'
import { servicedetails } from '../assets/assets'
import { motion } from 'framer-motion'
import ReachOut from '../Components/ReachOut'

function ServiceDetails() {
  const { slug } = useParams()

  const service = servicedetails.find((s) => s.slug === slug)

  if (!service) {
    return <div className='p-10'>Service not found</div>
  }

  return (
    <div className='mt-10'>
      {/* HERO */}
      <h1 className='text-3xl text-center px-4 py-4 md:text-5xl font-bold mb-4 text-gray-700 bg-[#D3D3D3]'>
        {service.heroTitle}
      </h1>

      <div className='mt-8 px-6 py-4'>
        <p className='text-gray-600 mb-5 text-2xl font-bold text-center'>
          {service.description1}
        </p>
        <p
          className='text-gray-600 mb-1 font-md flex-start'
          dangerouslySetInnerHTML={{ __html: service.description2 }}
        ></p>
        <p
          className='text-gray-600 mb-6 font-md flex-start'
          dangerouslySetInnerHTML={{ __html: service.description3 }}
        ></p>
      </div>

      <div className='w-full px-6 md:px-16 py-16'>
        {service.sections.map((section, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={index}
              className={`max-w-7xl mx-auto flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-10 mb-15`}
            >
              {/* TEXT */}
              <motion.div
                className='w-full md:w-1/2 space-y-6 text-center'
                initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className='text-2xl md:text-3xl font-bold text-gray-700'>
                  {section.imageHeader1 || section.imageHeader2 || section.imageHeader3}
                </h2>

                <p className='text-gray-600 px-2'>
                  {section.imageText1 || section.imageText2 || section.imageText3}
                </p>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                className='w-full md:w-1/2'
                initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={section.image1 || section.image2 || section.image3}
                  alt=''
                  className='w-full h-[220px] object-cover rounded-lg'
                />
              </motion.div>
            </div>
          )
        })}
      </div>

      <ReachOut />
    </div>
  )
}

export default ServiceDetails
