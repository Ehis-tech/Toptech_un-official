import { motion } from 'framer-motion'

function Title({ text1, text2, text3 }) {
  return (
    <div className='flex flex-col gap-2 items-center text-center mb-3 max-w-full overflow-hidden'>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl md:text-5xl text-gray-500'
      >
        {text1} <span className='text-[#BF9A33] font-semibold'>{text2}</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-sm md:text-base text-[#BF9A33] text-center'
      >
        {text3}
      </motion.p>
    </div>
  )
}

export default Title
