import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Custom CSS for multi-level dropdown
import { CiShoppingCart, CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from '/mascot.png';
function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [navbarExpanded, setNavbarExpanded] = useState(false); // Track navbar expansion state

  useEffect(() => {
    // Detect screen width change
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle submenus (both first and second level)
  const handleSubMenuClick = (e, level) => {
    if (windowWidth <= 991) {
      e.preventDefault();
      e.stopPropagation();
      setSubMenuOpen((prevState) => ({
        ...prevState,
        [level]: !prevState[level],
      }));
    }
  };

  const handleNavClick = () => {
    if (windowWidth <= 991) {
      setNavbarExpanded(false); // Collapse the Navbar on small screens after a link click
    }
  };

  // Close other submenus when a new one is clicked
  const handleFirstLevelMenuClick = (e, menuKey) => {
    handleSubMenuClick(e, menuKey);
    // Close all other first-level submenus
    Object.keys(subMenuOpen).forEach((key) => {
      if (key !== menuKey && subMenuOpen[key]) {
        setSubMenuOpen((prevState) => ({
          ...prevState,
          [key]: false,
        }));
      }
    });
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top navbar"
      expanded={navbarExpanded}
      onToggle={() => setNavbarExpanded(!navbarExpanded)}
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            src={logo}
            alt="mitisha logo"
            className="logo-nav"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Corporate Menu */}
            <div
              className={`dropdown ${subMenuOpen["corporate"] ? "show" : ""}`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, "corporate")}
              >
                Corporate
              </a>
              <ul className="dropdown-menu">
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["corporateSubmenu1"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "corporateSubmenu1")}
                  >
                    Corporate
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Blazers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Female Dress
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Female Kurti
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Female top
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Shirt
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate T-shirt
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Corporate Trouser
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Corporate Vest
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* =====hotel submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["hotelSubmenu1"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "hotelSubmenu1")}
                  >
                    Hotel
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Aprons
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Badana
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Bed Sheet
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Chef Coats
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Chef Trousers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Accessories
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Hotel Waiter Shirt
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Hotel Waiter Vest
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Hotel Waiter Trouser
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Hotel Scaf
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Hotel Cap
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====hotel submenu ENDS=== */}

                {/* =====hospital submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["hospitalSubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "hospitalSubmenu")}
                  >
                    Hospital
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Doctors Lab Coat
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Nurse & Ward Boy Tunic
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Nurse & Ward Boy Trouser
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Patient Uniform
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Ot Uniform
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====hospital submenu ends=== */}

                {/* =====spa submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["spaSubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "spaSubmenu")}
                  >
                    Spa & Saloon
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Blazers / Jackets
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Salon Dress
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Salon Gown
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Female Kurti
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Apron
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        T-shirt
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Trouser
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====spa submenu ENDS=== */}

                {/* =====Industrial submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["IndustrialSubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "IndustrialSubmenu")}
                  >
                    Industrial
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Dungarees Coverall
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Vest Jacket
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Trouser
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====Industrial submenu ENDS=== */}
              
                {/* =====Automobiles submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["AutomobilesSubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "AutomobilesSubmenu")}
                  >
                    Automobiles
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Staff-Dress
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Vest Jacket
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Trouser
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====Automobiles submenu ENDS=== */}


                {/* =====Security submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["SecuritySubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "SecuritySubmenu")}
                  >
                    Security
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Uniform
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Vest Jacket
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Trouser
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====Security submenu ENDS=== */}

                {/* =====Profession submenu STARTS=== */}
                <li
                  className={`dropdown-submenu ${
                    subMenuOpen["ProfessionSubmenu"] ? "show" : ""
                  }`}
                >
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, "ProfessionSubmenu")}
                  >
                  By Profession
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Air Hostess Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Business Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Bell Boy & Door Man Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleNavClick}
                      >
                        Driver Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Gym Staff Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Day Care Staff Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Events Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Sports Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Super Market Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleNavClick}
                      >
                        Teachers Uniforms
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* =====Profession submenu ENDS=== */}


              </ul>
            </div>

            {/* Schools Menu */}
            <div className={`dropdown ${subMenuOpen["schools"] ? "show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, "schools")}
              >
                Schools
              </a>
              <ul className="dropdown-menu" id="school-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    AKSIPS
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Shri Guru Harkrishan Model School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Oakridge International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Millennium
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    YPS
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Gurukul International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Vivek International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Rayat Bahra International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Gillco International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    SGGS Sr. Sec School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    DAV
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Stepping Stones
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Cambridge
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Paragon-69
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    DPS
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Shivalik
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Tiny Tots
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Sunshine
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Kundan International School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Sri AuroBindo
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    The Tribune School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Banyan Tree
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Angel World School
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Gian Jyoti International School
                  </a>
                </li>
              </ul>
            </div>

            {/* About and Contact Links */}
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact us
            </Nav.Link>

            {/* Pages Menu */}
            <div className={`dropdown ${subMenuOpen["pages"] ? "show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, "pages")}
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/faq"
                    onClick={handleNavClick}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleNavClick}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </Nav>
          <div className="ms-auto d-none d-lg-flex align-items-center gap-3">
            <a href="#" className="nav-icon" aria-label="Search">
              <CiSearch />
            </a>
            <a href="#" className="nav-icon " aria-label="User">
              <CiUser />
            </a>
            <a href="#" className="nav-icon " aria-label="Favorites">
              <CiHeart />
            </a>
            <a href="#" className="nav-icon" aria-label="Cart">
              <CiShoppingCart />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
