import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "../form/Form";

function About() {
  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
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

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-7 col-md-7 px-3">
            <img
              src="https://www.uniformbucket.com/img/page/92860_1713175438.jpg"
              alt="about us"
              className="img-fluid"
            />
            <p className="f-14 rubik mt-2">
              UNIFORM BUCKET, A unit of JAF Enterprises Pvt. Ltd. is a fast
              emerging name in the world of work wear, corporate wear, hospital
              wear, hotel wear, school and college wear. We are providing
              quality garments for a diverse range of people, industries and
              commercial establishments.
            </p>
            <p className="f-14 rubik">
            Backed by over a decade of experience in the industry, our expertise has been carefully cultivated through a work ethic that strives for excellence in every project that we undertake, From cutting, stitching, to finishing and packing all our processes integrated under one roof this gives us tremendous flexibility in handling projects where we work to client specifications. Integration also empowers us to plan, design and implement projects with minimal lead times.
            </p>{" "}
            <p className="f-14 rubik">
            We are committed to providing products that are built to the satisfaction of the customer. Our clientele is a demonstration of our capabilities in the industry and dedication to our work. We look forward to serving new customers around the country forming and enriching long-lasting partnership with them.
            </p>{" "}
            <p className="f-14 rubik">
            Our product fits you beautifully and makes you feel amazing, your employees will look and feel great wearing our Hospital uniforms and your clients will notice the positive difference in their performance.
            </p>

            <h3 className="rubik f-20">Our Mission Statement</h3>
            <p className="f-14 rubik">
            Our mission is to provide a high-quality uniform garment and one-stop services to satisfy our client’s needs through a range of efficient, effective manufacturing activities and delivered on a holistic basis.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 p-2  bg-blue">
            <Form/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
