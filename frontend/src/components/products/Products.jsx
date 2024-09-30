import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Product.css";

function Products() {
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

  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
        <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
          Products
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            / <span className="text-muted f-14 fw-bolder">Products</span>{" "}
          </p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-4 mb-4" key={product.id}>
              <div className="product-box rounded">
                <div className="product-image-container">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="product-image img-fluid image1"
                  />
                  <img
                    src={product.image2}
                    alt={product.name}
                    className="product-image img-fluid image2"
                  />
                </div>

                <div className="product-name pt-2">
                  <h4 className="rubik text-center p-3"
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}
                      >{product.name}</h4>
                  <h4 className="text-center text-theme mb-3">
                    <b>₹ {product.price}</b>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
