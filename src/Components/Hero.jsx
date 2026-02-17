import assets from "../assets/assets"


function Hero() {


  return (
    <section className='relative h-screen w-full h-[600px]'>
     <img src={assets.bg_1} alt='' className='absolute inset-0 h-full w-full object-cover' />

     <div className='absolute inset-0 bg-black/60'></div>
     <div className="relative z-10 flex h-full items-center justify-center px-6">
      <div className='max-w-3xl text-center text-white'>
       <h1 className='text-4xl font-bold md:text-6xl'>Want Quality Engineering Projects?</h1>

       <p className='mt-4 text-lg text-[#BF9A33] md:text-xl'>We give state of the art engineering solutions designed to scale with your business</p>

       <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'>
        <button className='rounded-md bg-[#BF9A33] px-6 py-3 font-semibold text-white hover:bg-[#A57B0A] transition cursor-pointer'>Get Started</button>

        <button className='rounded-md border border-[#BF9A33] px-6 py-3 font-semibold text-white hover:text-[#A57B04] transition cursor-pointer'>Learn More</button>

       </div>


      </div>


     </div>


     
      
    </section>
  )
}

export default Hero
