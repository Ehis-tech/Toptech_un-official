import assets from '../assets/assets'
import Title from '../Components/Title'
import TrustedBy from '../Components/TrustedBy'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Services() {
  return (
    <div className='pt-20'>
      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t '>
        <Title text1={'OUR'} text2={'SERVICES'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      {/* DATA CENTER */}

      <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold'>
          Data Center{' '}
          <span className='text-3xl text-[#BF9A33]'>Management</span>
        </h1>

        <p className='text-gray-700 text-xl mb-1'>
          We offer a wide range of services when it comes to data center
          management:
        </p>

        <ul>
          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>1</span> We install UPS as a backup
            for power supply to the data center which is very paramount.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>2</span> We can install PDU's on
            server racks as well as cable management under raised floors.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>3</span> We install ATS needed for
            automatic transfer of power.
          </li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>
            Here are images of our past jobs done
          </h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='my-6'
          >
            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

      {/* FM-200 */}

      <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold'>
          FM-200 <span className='text-3xl text-[#BF9A33]'>Installation</span>
        </h1>

        <p className='text-gray-700 text-xl mb-1'>
          We offer a wide range of services when it comes to fm-200 installation
        </p>

        <ul>
          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>1</span> We install fm-200
            cylinders depending on the size of the data room.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>2</span> We can install and connect
            pipes through vents or roofs.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>3</span> We install smoke detectors
            on ceilings of critical locations.
          </li>
        </ul>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='my-6'
        >
          {[...Array(6)].map((_, i) => (
            <SwiperSlide key={i}>
              <img
                className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                src={assets.datacenter_2}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

      {/* COOLING */}

      <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold'>
          Cooling <span className='text-[#BF9A33]'>Systems</span>
        </h1>

        <p className='text-gray-700 text-xl mb-1'>
          We offer a wide range of services when it comes to data center
          management:
        </p>

        <ul>
          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>1</span> We install UPS as a backup
            for power supply to the data center which is very paramount.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>2</span> We can install PDU's on
            server racks as well as cable management under raised floors.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>3</span> We install ATS needed for
            automatic transfer of power.
          </li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>
            Here are images of our past jobs done
          </h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='my-6'
          >
            {[
              assets.cooling_1,
              assets.cooling_4,
              assets.cooling_3,
              assets.cooling_4,
              assets.cooling_1,
              assets.cooling_3,
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                  src={img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

      {/* PANELS */}

      <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold'>
          Low Voltage Panel <span className='text-[#BF9A33]'>Installation</span>
        </h1>

        <p className='text-gray-700 text-xl mb-1'>
          We offer a wide range of services when it comes to data center
          management:
        </p>

        <ul>
          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>1</span> We install UPS as a backup
            for power supply to the data center which is very paramount.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>2</span> We can install PDU's on
            server racks as well as cable management under raised floors.
          </li>

          <li className='text-gray-500 px-2 py-2'>
            <span className='text-[#BF9A33]'>3</span> We install ATS needed for
            automatic transfer of power.
          </li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>
            Here are images of our past jobs done
          </h2>

          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='my-6'
          >
            {[
              assets.panel_4,
              assets.panel_2,
              assets.panel_3,
              assets.panel_4,
              assets.panel_2,
              assets.panel_3,
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  className='w-full h-[200px] sm:h-[260px] lg:h-[320px] object-cover rounded-lg shadow-md'
                  src={img}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

      <TrustedBy />
    </div>
  )
}

export default Services
