import assets from '../assets/assets'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { EffectFade, Autoplay } from 'swiper/modules'

const slides = [
  {
    image: assets.bg_1,
    title: 'Want Quality Engineering Projects?',
    text: 'We give state of the art engineering solutions designed to scale with your business',
  },
  {
    image: assets.bg_2,
    title: 'We Got You Covered on Projects?',
    text: 'We give state of the art engineering solutions designed to scale with your business',
  },
  {
    image: assets.bg_3,
    title: 'Need Quality UPS/Power Backup System?',
    text: 'We give state of the art engineering solutions designed to scale with your business',
  },
]

function Hero() {
  return (
    <section className='min-h-screen w-full'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
        slidesPerView={1}
        className='min-h-screen w-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>
              {/* Background Image */}
              <img
                src={slide.image}
                alt=''
                className='absolute inset-0 w-full h-full object-cover'
              />

              {/* Dark Overlay */}
              <div className='absolute inset-0 bg-black/60'></div>

              {/* Content */}
              <div className='relative z-10 px-6 text-center text-white max-w-3xl'>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className='text-4xl font-bold md:text-6xl'
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className='mt-4 text-lg text-[#BF9A33] md:text-xl'
                >
                  {slide.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'
                >
                  <button className='rounded-md bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>
                    Get Started
                  </button>

                  <button className='rounded-md border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
