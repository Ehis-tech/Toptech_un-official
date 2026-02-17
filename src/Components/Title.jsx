

function Title({text1,text2,text3}) {
  return (
    <div className='flex flex-col gap-2 items-center mb-3 max-w-full overflow-hidden'>
      <p className='text-3xl sm:text-4xl md:text-5xl text-gray-500'>{text1} <span className='text-[#BF9A33] font-semibold'>{text2}</span></p>
        <p className='text-sm md:text-base text-[#BF9A33] text-center'>{text3}</p>
      
    </div>
  )
}

export default Title
