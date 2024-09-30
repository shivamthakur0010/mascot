import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Custom CSS for multi-level dropdown
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [navbarExpanded, setNavbarExpanded] = useState(false); // Track navbar expansion state

  useEffect(() => {
    // Detect screen width change
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
            src="https://mitishasoftech.in/assets/ms-logo-B6hFIm6h.png"
            alt="mitisha logo"
            className="logo-nav"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Corporate Menu */}
            <div className={`dropdown ${subMenuOpen['corporate'] ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, 'corporate')}
              >
                Corporate
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={handleNavClick}>
                    HTML
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleNavClick}>
                    CSS
                  </a>
                </li>
                <li className={`dropdown-submenu ${subMenuOpen['corporateSubmenu'] ? 'show' : ''}`}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, 'corporateSubmenu')}
                  >
                    New dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Schools Menu */}
            <div className={`dropdown ${subMenuOpen['schools'] ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, 'schools')}
              >
                Schools
              </a>
              <ul className="dropdown-menu">
                <li className={`dropdown-submenu ${subMenuOpen['schoolsSubmenu1'] ? 'show' : ''}`}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, 'schoolsSubmenu1')}
                  >
                    New dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={`dropdown-submenu ${subMenuOpen['schoolsSubmenu2'] ? 'show' : ''}`}>
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    onClick={(e) => handleSubMenuClick(e, 'schoolsSubmenu2')}
                  >
                    Another dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleNavClick}>
                        2nd level dropdown
                      </a>
                    </li>
                  </ul>
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
            <div className={`dropdown ${subMenuOpen['pages'] ? 'show' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={(e) => handleFirstLevelMenuClick(e, 'pages')}
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/faq" onClick={handleNavClick}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleNavClick}>
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
