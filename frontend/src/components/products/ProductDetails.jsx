import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState , useRef  } from "react";
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
        "https://www.uniformbucket.com/img/product/original/worsted-blazer-for-men_2.jpg",
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
              <img
                src={products[0].image1}
                alt={products[0].name}
                className="img-fluid small-image"
                onClick={() => setSelectedImage(products[0].image1)} // Set clicked image as the main image
              />
              <img
                src={products[0].image2}
                alt={products[0].name}
                className="img-fluid small-image"
                onClick={() => setSelectedImage(products[0].image2)} // Set clicked image as the main image
              />
              <img
                src={products[0].image3}
                alt={products[0].name}
                className="img-fluid small-image"
                onClick={() => setSelectedImage(products[0].image3)} // Set clicked image as the main image
              />
            </div>
            {/* Larger main image */}
            <div className="w-75 overflow-hidden"   ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
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
            <h2 className="rubik f-26">{products[0].name}</h2>
            <h4 className=" fw-light  ">Rs. {products[0].price}</h4>
            <p>{products[0].description}</p>
            <button className="btn btn-primary btn-block">Add to Cart</button>
            <Link
              to={`/product/${products[0].id}`}
              className="btn btn-secondary btn-block mt-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
