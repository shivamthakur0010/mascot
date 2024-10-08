"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Brand() {
    const groupImages = (clients, groupSize) => {
        let groupedClients = [];
        for (let i = 0; i < clients.length; i += groupSize) {
            groupedClients.push(clients.slice(i, i + groupSize));
        }
        return groupedClients;
    };
    const Clients = [
        {
           image :'https://araglobalinc.com/wp-content/uploads/2021/09/2017-logo-Tata-Motors.jpg'
        },
        {
            image:'https://i.pinimg.com/originals/17/38/ff/1738ff204f7eaaf912742070a0871f8e.jpg'
        },
        {
           image :'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/1469793731_TgkfLogo1.png'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0Q13_C00IQcr9Q4_4QwhDrSIh1NmLXO6AXPwXNF-t46fiZ5T3h4sw1q0OBpGuOUZakE&usqp=CAU'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP63YhftM_mTFmbYZ_JlqyfFG1cdoAp-TGVw&s'
        },
        {
            image:'https://i.etsystatic.com/isla/0490da/70533357/isla_180x180.70533357_rbmoq20a.jpg?version=0'
        },
        {
            image:'/download.png'
        },
        {
            image:'https://zerocreativity0.wordpress.com/wp-content/uploads/2016/05/tanishq-logo.jpg?w=736'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp52JvclEPsy70j2GA7a79OFVuK5mixKjrvQ&s'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBm1b6egxJl9pgIlUTgt5DKy6MwG0--G6Csrh5eoH5sa3l3wm-ofdIcyaeu5lqsQbRzvc&usqp=CAU'
        },
        {
            image:'https://cdn.dribbble.com/users/2846201/screenshots/11335902/affinity-01_4x.png'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2OJAod8o--LIHijy-Hb72v-MajHnPv4qug&s'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6jomF_68HvklqvokcrEgX-GWCDfOE1Z1ig&s'
        },
        {
            image:'https://media.licdn.com/dms/image/v2/C4D0BAQFWHy6tKLSRtQ/company-logo_200_200/company-logo_200_200/0/1631338742122?e=2147483647&v=beta&t=3V96u5EL1qntaYWjgEes--rMaLbuNl4_prPZaqUBex8'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMEuCyPXlJRtvdQzElFJWsNS2j6ffuMdJIw&s'
        },
        {
            image:'https://www.livelaw.in/h-upload/2024/06/10/543921-untitled-design-2024-06-10t074803619.webp'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzLSan7diPVD4Q8nOJOeIAiPd7ocgKXD-HA&s'
        },
        {
            image:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022011/fortis_logo.png?itok=uP3_kVd8'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3rybu5-O1KCqUecDBj0BYl6mYPP8tJSbcw&s'
        },
        {
            image:'https://img.freepik.com/premium-vector/emblem-letter-j-gold-monogram-design-luxury-volumetric-logo-template-3d-line-ornament-business_252051-5150.jpg'
        },
        {
            image:'https://files.ekmcdn.com/b17f09/images/jeanneau-star-logo-chrome-6214-p.jpg'
        }

    ];

    const settings = {
        dots: false, // Remove dots
        infinite: true,
        speed: 500,
        slidesToShow: 7, // Show one slide (image) at a time
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
    const groupedClients = groupImages(Clients, 3);
    return (
        <>
        <div className="container my-5 pt-lg-3">
            <h2 className="satisfy text-center text-theme display-5">Trusted by great teams</h2>
            <div className="container Client-container mt-3 p-4 py-5">
                <Slider {...settings}>
                    {groupedClients.map((group, index) => (
                        <div key={index} className="Client-slide p-4" style={{ textAlign: 'center' }}>
                            <div className="row">
                                {group.map((Client, i) => (
                                    <div key={i} className="col-12 mb-4">
                                        <img
                                            src={Client.image}
                                            alt="Client"
                                            style={{
                                                width: '100%',
                                                height: '150px', // Adjust height for each image
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
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

export default Brand;
