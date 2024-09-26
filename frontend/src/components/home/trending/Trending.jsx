import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trending() {
    const Trendings = [
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/1.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/2.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/3.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/4.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/5.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/6.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/banner/7.webp'
        },
    ];

    const settings = {
        dots: false, // Remove dots
        infinite: true,
        speed: 500,
        slidesToShow: 7, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
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
            <div className="container my-4 pt-lg-3">
                <h2 className="satisfy text-center text-theme display-5">#Trending Products</h2>
                <div className="container Trending-container mt-3 p-4 py-5 ">
                    <Slider {...settings}>
                        {Trendings.map((Trending, index) => (
                            <div key={index} className="Trending-slide p-2 " style={{ textAlign: 'center' }}>
                               <div> <img
                                    src={Trending.image}
                                    alt="Trending"
                                    className="trending-product-img rounded"
                                    style={{
                                        width: '100%',
                                        height: '450px', // Adjust height as needed
                                        objectFit: 'cover', // Keeps the image proportional
                                    }}
                                /></div>
                            </div>
                        ))}
                    </Slider>
                   
                </div>
            </div>
        </>
    );
}

export default Trending;
