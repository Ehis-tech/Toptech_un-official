import assets from "../assets/assets"
import Title from "./Title"
import WhatWeOfferCard from "./WhatWeOfferCard"


function WhatWeOffer() {

  const servicesData = [
      {
       title: 'Data Center Management',
       description: 'We offer backup power supply to data centers, UPS...',
       icon:assets.Datacenter_image
      },
      {
       title: 'FM-200 Installation',
       description: 'We offer fire surpresant systems in case of emergency...',
       icon:assets.firesurpresant_image
      },
      {
       title: 'Cooling Systems',
       description: 'We offer HAVAC or AC installations for data center rooms...',
       icon:assets.hvac_image
      },
      {
       title: 'Low Voltage Panels',
       description: 'We help you build a strong and presentable low voltage pannel.',
       icon:assets.voltagepanel_image
      },
  ]


  return (
    <div
     id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
    {/* <img src={assets.bgimage2} alt='' className='absolute flex justify-center items-center h-screen w-1000 h-32 -z-1  dark:hidden'/>  */}

      <Title text1={'What We'} text2={'Offer'} text3={'The services below can be rendered by us,just make a call'} />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
          <WhatWeOfferCard key={index} service={service} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer
