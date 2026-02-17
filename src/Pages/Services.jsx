import assets from '../assets/assets'
import Title from '../Components/Title'
import TrustedBy from '../Components/TrustedBy'

function Services() {
  return (
    <div className='pt-20'>

      <div className='text-center flex flex-col items-center text-2xl pt-10 border-t '>
        <Title text1={'OUR'} text2={'SERVICES'} />
        <div className='w-16 sm:w-24 h-[2px] bg-[#BF9A33]'></div>
      </div>

      <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold' >Data Center <span className='text-3xl text-[#BF9A33]'>Management</span></h1>
        <p className='text-gray-700 text-xl mb-1'>We offer a wide range of services when it comes to data center management:</p>
        <ul className=''>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>1</span> We install UPS as a backup for power supply to the data center which is very paramount, our ups ranges from 10kva - 500kva</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>2</span> We can install PDU's on server racks as well as cable management under raise floors, also installation of cameras in the data center.</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>3</span> We install ATS needed for automatic transfer of power in the data room</li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>Here are images of our past jobs done for various companies</h2>
          <ul className='flex gap-3 px-4 py-4 border border-[#BF9A33] w-full my-5 justify-evenly'>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all'  src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
          </ul>
        </div>

      </div>

        <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

         <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold' >FM-200 <span className='text-3xl text-[#BF9A33]'>Installation</span></h1>
        <p className='text-gray-700 text-xl mb-1'>We offer a wide range of services when it comes to fm-200 installation:</p>
        <ul className=''>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>1</span> We install fm-200 cylinders of various kilograms depending on the size of the data room</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>2</span> We can install and connect the pipes throught the vent or the roof of the offices.</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>3</span> We can install smoke detectors on the ceilings of critical locations in your company</li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>Here are images of our past jobs done for various companies</h2>
          <ul className='flex gap-3 px-4 py-4 border border-[#BF9A33] w-full my-5 justify-evenly'>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all'  src={assets.datacenter_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.datacenter_2} alt={''}/></li>
          </ul>
        </div>

      </div>

       <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

        <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold' >Cooling <span className='text-3xl text-[#BF9A33]'>Systems</span></h1>
        <p className='text-gray-700 text-xl mb-1'>We offer a wide range of services when it comes to HVAC or Air conditioning:</p>
        <ul className=''>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>1</span> We install HVAC or Air conditioning systems for data centers or batery rooms</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>2</span> We can install temperature sensors which give the actual temperature of the environment.</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>3</span> We sell both indoor and outdoor unit or cooling systems</li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>Here are images of our past jobs done for various companies</h2>
          <ul className='flex gap-3 px-4 py-4 border border-[#BF9A33] w-full my-5 justify-evenly'>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.cooling_1} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.cooling_4} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all'  src={assets.cooling_3} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.cooling_4} alt={''}/></li>
          </ul>
        </div>

      </div>

       <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

       <div className='flex flex-col justify-start px-4 py-4 my-10'>
        <h1 className='text-3xl text-gray-700 mb-1 font-bold' >Low Voltage Panel <span className='text-3xl text-[#BF9A33]'>Installation</span></h1>
        <p className='text-gray-700 text-xl mb-1'>We offer a wide range of services when it comes to making and installing of LVP:</p>
        <ul className=''>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>1</span> We have a state of the art factory where we make panels fitting your need</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>2</span> We offer a wide range of panel types and we make use of the best MCCB and MCB in our panels.</li>
          <li className='text-gray-500 px-2 py-2'><span className='text-[#BF9A33]'>3</span> Our outdoor panels are well coated and do not rust inrespective of being exposed to harsh weather conditions</li>
        </ul>

        <div className='mt-5'>
          <h2 className='text-2xl text-gray-700 font-semibold'>Here are images of our past jobs done for various companies</h2>
          <ul className='flex gap-3 px-4 py-4 border border-[#BF9A33] w-full my-5 justify-evenly'>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.panel_4} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.panel_2} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all'  src={assets.panel_3} alt={''}/></li>
            <li><img className='w-full md:max-w-[250px] hover:cursor-pointer hover:scale-103 transition-all' src={assets.panel_4} alt={''}/></li>
          </ul>
        </div>

      </div>

      <div className='w-full h-[2px] bg-[#BF9A33] mt-5'></div>

      <TrustedBy/>



















    </div>
  )
}

export default Services
