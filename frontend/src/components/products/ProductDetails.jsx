import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState , useRef , useEffect } from "react";
import './ProductDetails.css'; 

function ProductDetails() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 150,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur lectus, at convallis neque. Sed posuere justo eu lectus auctor, non malesuada nunc ultricies. Sed vel sollicitudin lectus, id fringilla ipsum. Sed facilisis, nunc at bibendum consectetur, metus metus faucibus velit, vel tempus velit tellus vel purus.",
      image1:
        "https://www.uniformbucket.com/img/product/original/worsted-blazer-for-men_1.jpg",
      image2:
        "https://www.uniformbucket.com/img/product/thumb370x472/black-formal-blazer-for-men_2.jpg",
      image3:
        "https://www.uniformbucket.com/img/product/original/worsted-blazer-for-men_2.jpg",
    },
    {
      id: 2,
      name: "Product 2 adfasdfasdfasfsa",
      price: 190,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur lectus, at convallis neque. Sed posuere justo eu lectus auctor, non malesuada nunc ultricies. Sed vel sollicitudin lectus, id fringilla ipsum. Sed facilisis, nunc at bibendum consectetur, metus metus faucibus velit, vel tempus velit tellus vel purus.",
      image1:
        "https://www.uniformbucket.com/img/product/original/worsted-blazer-for-men_1.jpg",
      image2:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
  ];
  // State to track the selected image for the first product
  const [selectedImage, setSelectedImage] = useState(products[0].image1);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for auto-slideshow
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = [products[0].image1, products[0].image2, products[0].image3];
  
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const handleMouseMove = (e) => {
    if (containerRef.current && imgRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const percentX = (x / width) * 100;
      const percentY = (y / height) * 100;

      imgRef.current.style.transformOrigin = `${percentX}% ${percentY}%`;
      imgRef.current.style.transform = `scale(2)`; // Zoom scale can be adjusted here
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)"; // Reset zoom
      imgRef.current.style.transformOrigin = "center center"; // Reset transform origin
    }
  };

    // Auto-slide logic using useEffect to change the image automatically every 5 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
      }, 3000); // 2 seconds interval
  
      return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);
  
    useEffect(() => {
      setSelectedImage(images[currentIndex]); // Update the selected image based on currentIndex
    }, [currentIndex, images]);

  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
        <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
          Products Details
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            /{" "}
            <span className="text-muted f-14 fw-bolder">Products Details</span>{" "}
          </p>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row justify-content-between">
          {/* Left Side - Image Grid */}
          <div className="col-lg-6 d-flex flex-wrap align-items-center">
            {/* Three smaller images */}
            <div className="d-flex flex-column w-25 align-items-center flex-wrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={products[0].name}
                  className={`img-fluid small-image ${
                    selectedImage === image ? "" : "blur-image"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
            {/* Larger main image */}
            <div
              className="w-75 overflow-hidden"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={selectedImage} // Display selected image here
                alt={products[0].name}
                className="img-fluid large-image"
                ref={imgRef}
              />
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="col-lg-6 p-3">
            <div className="detail-image-concept">
              <h1>Black Formal Blazer For Men</h1>
            </div>
            <h3 className="price-details">₹2,513</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
