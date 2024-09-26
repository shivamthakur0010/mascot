import Client from "../client/Client";
import Testimonial from "../testimonial/Testimonial";
import ThreeColSection from "../threeColSection/ThreeColSection";
import Counter from "./counter/Counter";
import HeroSection from "./herosection/HeroSection";
import Trending from "./trending/Trending";

function Home() {
  return (
    <>
      <HeroSection />
      <Counter />
      <Testimonial />
      <Client/>
      <Trending/>
      <ThreeColSection/>
     
    </>
  );
}

export default Home;
