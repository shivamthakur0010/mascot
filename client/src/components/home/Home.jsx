import React from 'react'
import HeroSection from './herosection/HeroSection'
import Counter from './counter/Counter'
import Testimonial from './testimonial/Testimonial'
import Trending from './trending/Trending'
import ThreeColSection from './threecolsection/ThreeColSection'

function LandingPage() {
  return (
    <>
      <HeroSection />
      <Counter />
      <Testimonial/>
      <Trending/>
      <ThreeColSection/>
    </>
  )
}

export default LandingPage