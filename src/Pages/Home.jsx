import FaultCall from '../Components/FaultCall'
import Hero from '../Components/Hero'
import OurPolicy from '../Components/OurPolicy'
import WhatWeOffer from '../Components/WhatWeOffer'
import WhyChooseUs from '../Components/WhyChooseUs'
import TrustedBy from '../Components/TrustedBy'
import BlogPosts from '../Components/BlogPosts'

function Home() {
  return (
    <div>
      <Hero />
      <WhatWeOffer />
      <FaultCall />
      <WhyChooseUs />
      <OurPolicy />
      <TrustedBy/>
      <BlogPosts/>
    </div>
  )
}

export default Home
