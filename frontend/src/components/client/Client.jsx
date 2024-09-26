import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Client() {
    const Clients = [
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/2.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/3.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/4.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/5.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/6.webp'
        },
        {
            image: 'https://www.uniformbucket.com/assets/images/brand/7.webp'
        },
    ];

    const settings = {
        dots: false, // Remove dots
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Show one slide (image) at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
                <h2 className="satisfy text-center text-theme display-5">Trusted by great teams</h2>
                <div className="container Client-container mt-3 p-4 py-5">
                    <Slider {...settings}>
                        {Clients.map((Client, index) => (
                            <div key={index} className="Client-slide p-4" style={{ textAlign: 'center' }}>
                               <div> <img
                                    src={Client.image}
                                    alt="Client"
                                    style={{
                                        width: '100%',
                                        height: '300px', // Adjust height as needed
                                        objectFit: 'contain', // Keeps the image proportional
                                    }}
                                /></div>
                            </div>
                        ))}
                    </Slider>
                    <p className="text-muted fst-italic text-center">
                    All Brands/Logos are sole properties of their respective owners. Logos are for representative purpose only.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Client;
