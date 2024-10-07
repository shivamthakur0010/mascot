
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from 'react'
import './TermsCondition.css';

function TermsCondition() {
  return (
    <>
    <div className="container-fluid bg-breadcrum py-auto header">
    <div className="header__background">
    <h1 className="breadcrum text-center pt-3 display-6 lh-1 rubik">
       Terms & Conditions
     </h1>
     <div className="container">
       <p>
         <Link to="/" className="text-decoration-none text-muted">
           <FaHome />{" "}
         </Link>
         / <span className="text-muted f-14 fw-bolder">Terms & Conditions</span>{" "}
       </p>
     </div>
    </div>
   </div>

   <div className="f-14 container-fluid faq-title-head rubik">
        <h1>TERMS AND CONDITIONS</h1>
      </div>

   <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="terms-box rubik">
                        <div className="terms1-box">
                        <h4 className="f-26">TERMS & CONDITIONS</h4>
                        <p className=" text-muted f-14">Welcome to the website of Mascot Uniforms– the bespoke uniforms company. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Beyond Uniforms relationship with you in relation to this website.</p>
                        </div>
                        <div className="terms2-box">
                            <h4 className="f-26">ONLINE STORE TERMS</h4>
                            <p className="f-14 text-muted">The term Beyond Uniforms or ‘us’ or ‘we’ refers to the owner of the website whose registered office is at Mascot Uniforms, 460 New Sunny Enclave, Mohali. The term ‘you’ refers to the user or viewer of our website.</p>
                        </div>
                        <div className="terms3-box">
                            <h4 className="f-26">COMPLETENESS AND TIMELINESS OF INFORMATION</h4>
                            <p className="f-14 text-muted">The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
                            <p className="f-14 text-muted">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                        </div>
                        <div className="terms4-box">
                            <h4 className="f-26">PRODUCTS OR SERVICES (if applicable)</h4>
                            <p className="f-14 text-muted">Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products or information available through this website meet your specific requirements.</p>
                            <p className="f-14 text-muted">This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
                        </div>
                        <div className="terms5-box">
                            <h4 className="f-26">OPTIONAL TOOLS</h4>
                            <p className="f-14 text-muted">All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</p>
                            <p className="f-14 text-muted">From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website. We have no responsibility for the content of the linked website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
   </>

   
  )
}

export default TermsCondition