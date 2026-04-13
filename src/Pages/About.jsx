import ReachOut from '../Components/ReachOut'
import Teams from '../Components/Teams'
import Title from '../Components/Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='pt-20'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='flex flex-col items-center mt-10 px-10 py-5 mx-auto my-6 w-full  '>
        <h1 className='text-2xl text-gray-700 mb-2'>
          Our <span className='text-2xl text-[#BF9A33]'>History</span>
        </h1>
        <p className='text-md text-gray-600 dark:text-700'>
          We have been in existence since the year 2000. Over the years, we have
          established our presence across the country and have expanded to the
          West African market. A testament to our commitment and excellence is
          the spread and depth of our clientele across all industries, including
          banking, telecommunications, manufactoring, oil & gas and real sector.
        </p>
        <br></br>
        <p className='text-md text-gray-600 dark:text-700'>
          {' '}
          We control, distribute, transfer, monitor, measure, manage, display,
          service and communicate with power for critical informatiion
          technology equipment. We are representatives to leading Original
          Equipment Manufacturers. Our goal is to consistently satisfy our
          clientele by offering top quality services that are unsurpassed in our
          area of specialization.
        </p>
        <br></br>
        <p className='text-md text-gray-600 dark:text-700'>
          As partners to the leading IT OEM operators; Microsoft, Dell, HP,
          Commscope and NTI, we are well poised to deliver current and future
          technologies that optimize infrastructure, streamline spending, and
          maximize efficiency.
        </p>
        <br></br>
        <p className='text-md text-gray-600 dark:text-700'>
          Our growth is predicated on our unparalled reputation for product
          excellence, knowledgeable staff and industry's largest service
          personnel. We associate freely with leading organizations across the
          globe with the ultimate goal to scure the satisfaction of our valued
          customers.
        </p>
      </div>

      <div className='w-full px-6 md:px-16 py-16'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
          {/* LEFT SIDE (TEXT) */}
          <motion.div
            className='w-full md:w-1/2 space-y-10'
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Mission */}
            <div>
              <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-700 mb-4'>
                Our <span className='text-[#BF9A33]'>Mission</span>
              </h2>
              <p className='text-center text-gray-600 leading-relaxed'>
                Our mission is to deliver quality electromechanical solutions
                and build stakeholders value.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-700 mb-4'>
                Our <span className='text-[#BF9A33]'>Vision</span>
              </h2>
              <p className='text-center text-gray-600 leading-relaxed'>
                Our vision is to be the leading provider of electromechanical
                maintenance support services for critical infrastructure.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE (IMAGES STACKED) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full md:w-1/2'
          >
            {/* MOBILE: STACKED */}
            <div className='flex flex-col gap-4 md:hidden'>
              <img
                src={assets.toptech_img_13}
                alt=''
                className='w-full h-[220px] object-cover rounded-lg'
              />
              <img
                src={assets.toptech_img_12}
                alt=''
                className='w-full h-[220px] object-cover rounded-lg'
              />
            </div>

            {/* DESKTOP: OVERLAP */}
            <div className='hidden md:block relative h-[400px]'>
              {/* Big Image */}
              <img
                src={assets.toptech_img_13}
                alt=''
                className='w-full h-full object-cover rounded-lg shadow-lg'
              />

              {/* Small Overlapping Image */}
              <img
                src={assets.toptech_img_12}
                alt=''
                className=' absolute  bottom-[-30px] left-[-30px] w-[65%] h-[60%] object-cover rounded-lg shadow-xl '
              />
            </div>
          </motion.div>
        </div>

        <div className=' flex flex-col px-6 md:px-16 py-8 mt-20'>
          <div>
            <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-700 mb-4'>
              Quality <span className='text-[#BF9A33]'>Statement</span>
            </h2>
            <p className='text-center text-gray-600 leading-relaxed'>
              Toptech engineering is poised to delivering unparraled
              Electromechanical Engineering Solutions and Service Management
              ensuring customer fufilment, employeee satisfaction and good ROI
              for the investors at all times. We implement a robust Quality
              Management System (QMS) that enables us meet with applicable
              product and legal requirements and improve it continually in
              accordance with the requirements of the ISO 9001 Standard.
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-6 px-6 py-16 items-center justify-center'>
            <img
              className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain rounded-lg'
              src={assets.toptech_certificate_13}
              alt='toptech_certificate'
            />

            <img
              className='w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain rounded-lg'
              src={assets.toptech_certificate_14}
              alt='toptech_certificate'
            />
          </div>

          <div>
            <h2 className='text-center text-3xl md:text-4xl font-bold text-gray-700 mb-4'>
              Core <span className='text-[#BF9A33]'>Values</span>
            </h2>
            <ul className='text-center flex-col py-7 mb-5'>
              <li>
                <h3 className='text-2xl text-[#BF9A33] font-bold'>Godliness</h3>
                <p className=' text-gray-600 leading-relaxed mb-10'>
                  Our actions and principles will be guided by our belief in God
                </p>
              </li>
              <li>
                <h3 className='text-2xl text-[#BF9A33] font-bold'>Integrity</h3>
                <p className=' text-gray-600 leading-relaxed mb-10'>
                  Toptech will be honest and keep to her word in all dealings
                </p>
              </li>
              <li>
                <h3 className='text-2xl text-[#BF9A33] font-bold'>Courtesy</h3>
                <p className=' text-gray-600 leading-relaxed mb-10'>
                  We will be polite and considerate to all people who came in
                  contact with us
                </p>
              </li>
              <li>
                <h3 className='text-2xl text-[#BF9A33] font-bold'>
                  Professionalism
                </h3>
                <p className=' text-gray-600 leading-relaxed'>
                  Professionalism in terms of quality of work, skill and
                  experience shall be our watchword.<br></br>Toptech Engineering
                  is committed to equality, justice, work and lifestyle, mutual
                  respect and dignity at work for all experts. We do our best to
                  ensure that we exceed client's expectation
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Teams />

      <div className='w-full px-6 md:px-16 py-16 mt-10'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10'>
          {/* LEFT SIDE (IMAGES STACKED) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='w-full md:w-1/2'
          >
            {/* MOBILE: STACKED */}
            <div className='flex flex-col gap-4 md:hidden'>
              <img
                src={assets.toptech_img_16}
                alt=''
                className='w-full h-[420px] object-cover rounded-lg'
              />
              <img
                src={assets.toptech_img_15}
                alt=''
                className='w-full h-[420px] object-cover rounded-lg'
              />
            </div>

            {/* DESKTOP: OVERLAP */}
            <div className='hidden md:block relative h-[400px]'>
              {/* Big Image */}
              <img
                src={assets.toptech_img_16}
                alt=''
                className='w-full h-full h-[420px] object-cover rounded-lg shadow-lg'
              />

              {/* Small Overlapping Image */}
              <img
                src={assets.toptech_img_15}
                alt=''
                className=' absolute w-full h-[420px]  bottom-[-200px] right-[-30px] object-cover rounded-lg shadow-xl '
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE (TEXT) */}
          <motion.div
            className='w-full md:w-1/2 space-y-10'
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className='text-center text-4xl md:text-4xl font-bold text-gray-700 mb-4'>
                We would love to work for you{' '}
                <span className='text-[#BF9A33]'>reach out to us!</span>
              </h2>
              <ul className='flex flex-col md:flex-row gap-6 px-6 items-center justify-center'>
                <li>
                  <h3 className='text-[#BF9A33] font-bold text-2xl text-center'>
                    Address
                  </h3>
                  <p className='text-gray-600'>
                    9, Oguntona Cresent, Gbagada Phase One, Gbagada, Lagos{' '}
                  </p>
                </li>
                <li>
                  <h3 className='text-[#BF9A33] font-bold text-2xl text-center'>
                    Contact
                  </h3>
                  <p className='text-gray-600'>
                    {' '}
                    08176688585, 08172324800 <br />{' '}
                    infro@toptechengineeeringltd.com
                  </p>
                </li>
              </ul>
              <div className='flex justify-center'>
                <button className='mt-10 rounded-md bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                  Reach Out
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ReachOut/>
    </div>
  )
}

export default About
