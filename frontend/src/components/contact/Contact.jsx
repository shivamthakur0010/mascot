import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "../form/Form";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


function Contact() {
  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
        <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
          Contact Us
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            / <span className="text-muted f-14 fw-bolder">Contact us</span>{" "}
          </p>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row mb-5 mt-3">
          <div className="col-lg-7 col-md-7 px-4 py-4">
          <div className="title title1 title-effect mb-1 title-left w-25">
            <h2 className="rubik ">Contact Us</h2>
            </div>

            <p className="text-muted f-14 mt-3 rubik ">Your email address will not be published. Required fields are marked *</p>
            <Form/>
          </div>
          <div className="col-lg-4 col-md-4 p-4 rubik bg-blue">
           <h3>Contact Information</h3>
           <h6 className="text-muted f-14">UniformBucket (A Unit of JAF Enterprises Pvt. Ltd.)</h6>
           <div className="mt-4">
            <div className="d-flex  gap-3">
                <div className="">
                <div className="contact-info-icon text-theme">
                <CiLocationOn size={24} />
                </div>
                </div>
                <div>
                <h6 className="rubik">Factory:</h6>
                <p className="f-16 text-muted">First Floor, F426, Phase 8B <br /> Industrial Area, Sector 91, <br /> New Delhi, India</p>
                <h6 className="rubik">Marketing Office:</h6>
                <p className="f-16 text-muted">First Floor, F426, Phase 8B <br /> Industrial Area, Sector 91, <br /> New Delhi, India</p>
                </div>
            </div>

            <div className="d-flex  gap-3">
                <div className="">
                <div className="contact-info-icon text-theme">
                <IoCallOutline size={24} />
                </div>
                </div>
                <div>
                <h6 className="rubik">Phone Number :</h6>
                <div className="f-16 text-muted">77079-34521 </div>
                <div className="f-16 text-muted">77079-34521 </div>
                </div>
            </div>

            <div className="d-flex mt-3 gap-3">
                <div className="">
                <div className="contact-info-icon text-theme">
                <CiMail size={24} />
                </div>
                </div>
                <div>
                <h6 className="rubik">Email Address :</h6>
                <p className="f-16 text-muted">info@mitishasoftech.in </p>
                </div>
            </div>


           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
