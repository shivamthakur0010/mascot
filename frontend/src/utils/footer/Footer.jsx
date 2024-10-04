import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaLocationPin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import logo from '/mascot-footer.png';

function Footer() {
  return (
   <>
   <hr />
    <div className="container-fluid bg-body-tertiary text-black py-5">

      <div className="container">
      <div className="row justify-content-between">
     <div className="col-lg-4 mt-3">
     <img src={logo} alt="LUXURY " className='footer-logo' />
    
      <p className="mt-3 josefin text-dark f-18 ">
     <div className="d-flex gap-3">
        <div className="icon text-muted d-flex align-items-center">
        <FaLocationPin  size={24}/>
        </div>
        <p className="f-16 text-muted">
        SCO 90, Sector 35-C, <strong>Chandigarh</strong> <br />
       <div className="mt-3">
       SCF 60, Near Bassi Theatre, Phase 2, <strong>Mohali</strong><br />
       </div>
        </p>
     </div>

     <div className="d-flex gap-3">
        <div className="icon text-muted">
        <IoMail  size={24}/>
        </div>
        <p className="f-16 text-muted">
        thinkmascot@gmail.com
        </p>
     </div>

     <div className="d-flex gap-3">
        <div className="icon text-muted">
        <IoIosCall  size={24}/>
        </div>
        <p className="f-16 text-muted">
        77079-34521 | 9465-654521
        </p>
     </div>

      </p>

      <div className="d-flex gap-2 mt-2">
        <Link to='/'>
        <div className="social-icon-container ">
        <FaFacebookF className='text-muted f-20'/>
        </div>
        </Link>
        <Link to='/'>
        <div className="social-icon-container ">
        <FaTwitter className='text-muted f-20'/>
        </div>
        </Link>

        <Link to='/'>
        <div className="social-icon-container ">
        <FaInstagram className='text-muted f-20'/>
        </div>
        </Link>

      </div>
     </div>

     <div className="col-lg-4  mt-3 ">
     <h3 className="cormorant lh-1  fw-bolder text-dark">
     Let’s stay in touch
     </h3>

     <form>
  <div className="my-4 d-flex newsletter-input form-group rounded">
    <input
      type="email"
      placeholder="Enter Your Email..."
      className="newsletter-input cormorant  px-3 w-75 f-18 text-black rounded-start"
      required
    />
    <button type="submit" className="btn-main josefin ms-2 scale-in-ver-bottom w-25 rounded-end" id='newsletter-btn'>
      →
    </button>
  </div>
</form>

     <img src="https://www.uniformbucket.com/img/ccavenueold.png" alt="payments" className='img-fluid mt-2' />
     </div>

    </div>

      </div>
   </div>
<hr />
   <div className="container-fluid bg-body-tertiary p-2">
    <div className="container">
      <div className="d-flex gap-3 justify-content-center">
        <p className="cormorant f-18 text-dark">
        © 2024 <span className="text-theme">Moscot</span>. All rights reserved.
        </p>
        <div className="social-media-icons">
         
    </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Footer