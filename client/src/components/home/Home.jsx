import React from 'react'
import HeroSection from './herosection/HeroSection'
import Counter from './counter/Counter'
import Testimonial from './testimonial/Testimonial'
import Trending from './trending/Trending'
import ThreeColSection from './threecolsection/ThreeColSection'
import Brand from './brand/Brand'

function LandingPage() {
  return (
    <>
      <HeroSection />
      <Counter />
      <Testimonial/>
      <Brand/>
      <Trending/>
      <ThreeColSection/>
    </>
  )
}

export default LandingPage