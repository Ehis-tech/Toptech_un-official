import assets from '../assets/assets'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={2500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <section className='relative w-full lg:h-[600px] h-[550px]'>
            <motion.img
              src={assets.bg_1}
              alt=''
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className='absolute inset-0 h-full w-full object-cover'
            />

            <div className='absolute inset-0 bg-black/60'></div>
            <div className='relative z-10 flex h-full items-center justify-center px-6'>
              <div className='max-w-3xl text-center text-white'>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='text-4xl font-bold md:text-6xl'
                >
                  Want Quality Engineering Projects?
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-4 text-lg text-[#BF9A33] md:text-xl'
                >
                  We give state of the art engineering solutions designed to
                  scale with your business
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'
                >
                  <Link to='/get-started'>
                    <button className='rounded-md w-fit bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                      Get Started
                    </button>
                  </Link>

                  <Link to='/about'>
                    <button className='rounded-md w-fit border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='relative w-full lg:h-[600px] h-[550px]'>
            <motion.img
              src={assets.bg_2}
              alt=''
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className='absolute inset-0 h-full w-full object-cover'
            />

            <div className='absolute inset-0 bg-black/60'></div>
            <div className='relative z-10 flex h-full items-center justify-center px-6'>
              <div className='max-w-3xl text-center text-white'>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='text-4xl font-bold md:text-6xl'
                >
                  We Got You Covered on Projects?
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-4 text-lg text-[#BF9A33] md:text-xl'
                >
                  We give state of the art engineering solutions designed to
                  scale with your business
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'
                >
                  <Link to='/get-started'>
                    <button className='rounded-md w-fit bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                      Get Started
                    </button>
                  </Link>

                  <Link to='/about'>
                    <button className='rounded-md w-fit border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='relative w-full lg:h-[600px] h-[550px]'>
            <motion.img
              src={assets.bg_3}
              alt=''
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'easeOut' }}
              className='absolute inset-0 h-full w-full object-cover'
            />

            <div className='absolute inset-0 bg-black/60'></div>
            <div className='relative z-10 flex h-full items-center justify-center px-6'>
              <div className='max-w-3xl text-center text-white'>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='text-4xl font-bold md:text-6xl'
                >
                  Need Quality UPS/Power Backup System?
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-4 text-lg text-[#BF9A33] md:text-xl'
                >
                  We give state of the art engineering solutions designed to
                  scale with your business
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'
                >
                  <Link to='/get-started'>
                    <button className='rounded-md w-fit bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                      Get Started
                    </button>
                  </Link>

                  <Link to='/about'>
                    <button className='rounded-md w-fit border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero

{
  /* import assets from "../assets/assets"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div>
      <section className='relative w-full h-[600px]'>
        <img
          src={assets.bg_1}
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10 flex h-full items-center justify-center px-6'>
          <div className='max-w-3xl text-center text-white'>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className='text-4xl font-bold md:text-6xl'
            >
              Want Quality Engineering Projects?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className='mt-4 text-lg text-[#BF9A33] md:text-xl'
            >
              We give state of the art engineering solutions designed to scale
              with your business
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              viewport={{ once: true }}
              className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'
            >
              <Link to='/get-started'>
                <button className='rounded-md w-fit bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                  Get Started
                </button>
              </Link>

              <Link to='/about'>
                <button className='rounded-md w-fit border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero */
}
