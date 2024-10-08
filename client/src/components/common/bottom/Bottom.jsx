import { CiShoppingCart,  CiUser, CiHeart } from "react-icons/ci";
import './Bottom.css'; // Optional: Add custom styles

function Bottom() {
  return (
    <div className="bottom-bar d-lg-none d-flex justify-content-around align-items-center p-3">
      {/* <a href="#" className="nav-icon text-decoration-none text-center  " aria-label="Search">
        <CiSearch size={24} />
        <div className="f-16">Search</div>
      </a> */}
      <a href="#" className="nav-icon text-decoration-none text-center" aria-label="User">
        <CiUser size={24} />
        <div className="f-16">Account</div>

      </a>
      <a href="#" className="nav-icon text-decoration-none text-center" aria-label="Favorites">
        <CiHeart size={24} />
        <div className="f-16">Wishlist</div>

      </a>
      <a href="#" className="nav-icon text-decoration-none text-center" aria-label="Cart">
        <CiShoppingCart size={24} />
        <div className="f-16">Cart</div>

      </a>
    </div>
  );
}

export default Bottom;
