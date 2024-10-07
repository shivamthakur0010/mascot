'use client'
import './Testimonial.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    const testimonials = [
        {
          name: "John Smith",
          from: "School Uniform Buyer",
          message: "The uniforms we ordered for our school are perfect! High quality and delivered on time.",
        },
        {
          name: "Emily Johnson",
          from: "Corporate Client",
          message: "Our office staff loves the new uniforms! Professional and comfortable.",
        },
        {
          name: "Michael Brown",
          from: "Salon Manager",
          message: "These uniforms give our salon a premium feel. Great craftsmanship!",
        },
        {
          name: "Sarah Wilson",
          from: "Hospital Admin",
          message: "Uniforms for our healthcare staff are durable and fit perfectly.",
        },
        {
          name: "David Thompson",
          from: "Restaurant Owner",
          message: "We’ve never received better uniforms for our restaurant staff. Excellent service!",
        },
        {
          name: "Lisa Davis",
          from: "Retail Store Manager",
          message: "Our retail staff looks sharp and professional, thanks to these uniforms.",
        },
        {
          name: "James Taylor",
          from: "Gym Owner",
          message: "The sportswear uniforms are exactly what we needed for our trainers.",
        },
        {
          name: "Jessica Martinez",
          from: "Hotel Manager",
          message: "Beautiful, well-tailored uniforms that add to our hotel’s elegance.",
        },
        {
          name: "Daniel Anderson",
          from: "Construction Company",
          message: "Durable and comfortable uniforms for our crew. Highly recommend this tailor!",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
      <>
        <div className="container my-5 pt-lg-3">
          <h1 className="satisfy text-center text-theme display-5">We are just Awesome!</h1>
          <h5 className="text-center">What customers say about us...</h5>
          <div className="container testimonial-container mt-4 p-4 py-5">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide p-4">
                  <h2 className="testimonial-name text-theme text-center">{testimonial.name}</h2>
                  <h5 className="testimonial-from text-center f-18">{testimonial.from}</h5>
                  <hr />
                  <p className='f-14'>{testimonial.message}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
}

export default Testimonial;
