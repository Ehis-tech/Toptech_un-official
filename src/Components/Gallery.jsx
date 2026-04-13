import { useState } from 'react'
import Title from './Title'
import { gallery } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import 'swiper/css'
import 'swiper/css/pagination'

function Gallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <div className='pt-20 mb-5'>
      <div className='text-center flex flex-col items-center text-2xl pt-10'>
        <Title text1={'OUR'} text2={'GALLERY'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='mt-4'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='my-6'
        >
          {gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className='overflow-hidden rounded-lg shadow-md cursor-pointer'
                onClick={() => {
                  setIndex(i)
                  setOpen(true)
                }}
              >
                <img
                  src={img}
                  alt={`gallery-${i}`}
                  className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover transition-transform duration-500 hover:scale-110'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery.map((img) => ({ src: img }))}
      />
    </div>
  )
}

export default Gallery
