"use client"
import Carousel from "react-bootstrap/Carousel";
import "./HeroSection.css";
import Link from 'next/link';

function HeroSection() {
  return (
    <>
      <Carousel controls={false} className="hero-carousel">
        <Carousel.Item interval={7000}>
          <img src="https://www.uniformbucket.com/assets/images/ub/1920_870/Salon.webp" alt="First slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
          
            <h2 className="crousel-heading  mt-2 text-uppercase slide-in-bottom text-dark  ">
            beauty and wellness uniforms
            </h2>
        
            <div className="mt-4 mb-3">
            <Link href='/rooms'>
              <button className="btn-main josefin ms-2 slide-in-bottom ">Discover Collection</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3500}>
          <img src="https://www.uniformbucket.com/assets/images/ub/1920_870/Hospital.webp" alt="Second slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
            {/* <h5 className="crousel-sub-heading cormorant text-cream text-uppercase">
              this is luxury hotel
            </h5> */}
            <h2 className="crousel-heading  mt-2 text-uppercase slide-in-bottom text-dark ">
            hospital and pharmacy uniforms
            </h2>
            {/* <div className="d-flex justify-content-center w-100 my-3">
              <hr className="custom-hr" style={{ width: "20%" }} />
            </div>

            <div className="d-flex justify-content-center  mt-lg-3">
              <p className="josefin crousel-text text-center w-50 w-sm-100 w-md-50 w-lg-50 scale-in-ver-top text-dark ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium amet temporibus eaque laboriosam quas quia
                consectetur. Dignissimos dicta architecto soluta. Ad,
                voluptatum!
              </p>
            </div> */}
            <div className="mt-4 mb-3">
              <Link href='/rooms'>
              <button className="btn-main josefin ms-2 slide-in-bottom ">Discover Collection</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <img src="https://www.uniformbucket.com/assets/images/ub/1920_870/Hotel.webp" alt="First slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
          
            <h2 className="crousel-heading  mt-2 text-uppercase slide-in-bottom text-dark  ">
            Hotel & Restaurant Uniform
            </h2>
        
            <div className="mt-4 mb-3">
            <Link href='/rooms'>
              <button className="btn-main josefin ms-2 slide-in-bottom ">Discover Collection</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={7000}>
          <img src="https://www.uniformbucket.com/assets/images/ub/1920_870/Industrial.webp" alt="First slide" className="d-block w-100" />
          <Carousel.Caption className="center-caption w-100 pt-lg-3">
          
            <h2 className="crousel-heading  mt-2 text-uppercase slide-in-bottom text-dark  ">
            Industrial Uniform
            </h2>
        
            <div className="mt-4 mb-3">
            <Link href='/rooms'>
              <button className="btn-main  josefin ms-2 slide-in-bottom ">Discover Collection</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HeroSection;
