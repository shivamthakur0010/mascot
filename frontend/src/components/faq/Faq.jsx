import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function Faq() {
  return (
    <>
      <div className="container-fluid bg-breadcrum py-auto">
        <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
         FAQ
        </h1>
        <div className="container">
          <p>
            <Link to="/" className="text-decoration-none text-muted">
              <FaHome />{" "}
            </Link>
            / <span className="text-muted f-14 fw-bolder">FAQ</span>{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default Faq