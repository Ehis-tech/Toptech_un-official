import FaultCall from '../Components/FaultCall'
import Hero from '../Components/Hero'
import OurPolicy from '../Components/OurPolicy'
import WhatWeOffer from '../Components/WhatWeOffer'
import WhyChooseUs from '../Components/WhyChooseUs'
import TrustedBy from '../Components/TrustedBy'
import BlogPosts from '../Components/BlogPosts'
import { posts } from '../assets/assets'

function Home() {
  return (
    <div>
      <Hero />
      <WhatWeOffer />
      <FaultCall />
      <WhyChooseUs />
      <OurPolicy />
      <TrustedBy/>
      <BlogPosts posts={posts}/>
    </div>
  )
}

export default Home
