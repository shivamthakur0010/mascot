"use client"
import RegisterForm from "./RegisterForm";
import Link from 'next/link'


function RegisterPage() {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center bg-blue py-4"
      
      >
        <div className="container">
          <div className="row mx-auto ">
            <div className="col-lg-4 mx-auto bg-white rounded py-5 px-3 ">
                <div className="login-title">
              <h2 className="rubik text-theme ps-3">Register</h2>
                </div>

              <RegisterForm />

              <Link href="/login" className="text-decoration-none">
                <p className="text-theme rubik text-center">
                  Alredy have an account?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
