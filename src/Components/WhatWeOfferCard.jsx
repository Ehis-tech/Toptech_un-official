import { useRef, useState } from 'react'

function WhatWeOfferCard({ service }) {
  const divRef = useRef(null)

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    })
  }

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-[#BF9A33] dark:border-[#BF9A33] shadow-2xl shadow-gray-100 dark:shadow-white/10'
    >
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-[#BF9A33] via-[#A57B0A] to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative cursor-pointer'>
        <div className='bg-[#A57B0A] dark:bg-[#BF9A33] rounded-full'>
          <img
            src={service.icon}
            alt=''
            className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2'
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-extrabold text-black dark:text-white'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOfferCard
