import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-blue"
        style={{ height: "70vh" }}
      >
        <div className="container">
          <div className="row mx-auto">
            <div className="col-lg-4 mx-auto bg-white rounded py-5 px-3">
                <div className="login-title">
              <h2 className="rubik text-theme ps-3">Login</h2>
                </div>

              <LoginForm />

              <Link to="/register" className="text-decoration-none">
                <p className="text-theme rubik text-center">
                <span className="text-muted">Not a member? </span>Sign up now
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
