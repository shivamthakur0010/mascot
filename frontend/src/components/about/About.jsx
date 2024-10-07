import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "../form/Form";

function About() {
  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto header">
       <div className="header__background">
       <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
          About Us
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            / <span className="text-muted f-14 fw-bolder">About us</span>{" "}
          </p>
        </div>
       </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row d-flex justify-content-evenly">
          <div className="col-lg-7 col-md-7 px-3">
            <img
              src="https://www.uniformbucket.com/img/page/92860_1713175438.jpg"
              alt="about us"
              className="img-fluid"
            />
            <p className="f-14 rubik mt-2">
            Mascot is dealing with designing and fabrication of cotton rich uniform since the last 12 years, with quality material at a reasonable price. We ensure to provide skin friendly products and natural fiber rich fabric. Using fiber dyed fabric of only reputed mills like S.Kumar, Arvind-Mafatlal, Raymond, Valji, Bombay dyeing, Modella and JCT has helped us to maintain our quality standards. Being an ISO certified company; we don't cut corners when it comes to the quality of production for our products.

            </p>
            <p className="f-14 rubik">
            We take care of your uniform while using the best stitching material available to improve the life of the product. The fabrication is done on imported Japanese machines. We provide complete services right from designing, to delivering the final product. We have also been dealing in pants, skirts, shirts, blazers, t-shirts, track suits, lowers, chef courts, aprons and masks.
            </p>{" "}
            <p className="f-14 rubik">
            The work we've been doing since the last 12 years has helped us to gain experience and attain results close to perfection while keeping our principles in sight with a clear view. We believe in respecting the nature, and working along with it not against.
            </p>{" "}
            <p className="f-14 rubik">
            Manufacturing with materials that does not harm the environment and is soft on the skin is our strength and that is why we are proud to associate our brand with the colour green, the colour of nature.
            </p>

            {/* <h3 className="rubik f-20">Our Mission Statement</h3>
            <p className="f-14 rubik">
            Our mission is to provide a high-quality uniform garment and one-stop services to satisfy our client’s needs through a range of efficient, effective manufacturing activities and delivered on a holistic basis.
            </p> */}
          </div>
          <div className="col-lg-4 col-md-4 p-4  bg-blue">
            <div className="title title1 title-effect mb-1 title-left">
            <h2 className="rubik f-22">PLEASE FILL THE FORM & CONTACT US FOR ANY QUERY, WILL GET BACK TO YOU!</h2>
            </div>

            <p className="text-muted f-14 mt-2 ">Your email address will not be published. Required fields are marked *</p>
            <Form/>
          </div>
        </div>
      </div>

      <div className="container  text-center pt-3 mt-5 pb-3">
        <div className="row mx-auto ">
          <div className="col-lg-12 col-md-12 mx-auto rubik">
            <div className="title title2 title-effect">
            <h2>Why Choose Us</h2>
            </div>
            <div className=" col-8 mx-auto pt-3">
            <p className="f-16 choose-content rubik mt-2">
            By choosing us we are making a promise to you, to provide quality products, professionalism, product assurance, on time delivery and our service 24/7. You can rely on us to give you a product that is tailored to your needs and custom made with your idea.
            </p>
            <p className="f-16 choose-content rubik mt-2">We stand by with what we promise and are available to solve your every concern about the product even after the delivery.</p>
            </div>

          </div>
        </div>
      </div>

      <div className="factor-list rubik">
          <h2>The differentiating factors that set us aside from the competition are:</h2>
          <ul>
            <li>Cotton Rich Composition</li>
            <li>Skin Friendly Products</li>
            <li>Fiber Dyed Fabric</li>
            <li>Best Stitching Material Ensuring Better Durability</li>
            <li>Imported Machine Based Setup</li>
          </ul>
          </div>
    </>
  );
}

export default About;
