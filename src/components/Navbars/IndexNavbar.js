import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Randevu Sistemi
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
          <Link to="/randone">
            <NavItem>
              <Button
                className="btn-round btn-lg"
               
                color="success"
                target="_blank"
              >
              <i class="far fa-calendar-alt"></i>&nbsp; Randevu AL
              </Button>
            </NavItem> 
            </Link>
             <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        Kullanıcı Girişleri
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        <Link to="/Customerlogin">
                        <DropdownItem href="#pablo" >
                        <i class="fas fa-user">&nbsp;&nbsp;Giriş Yap</i>
                        </DropdownItem></Link>

                        <Link to="/Customercreate"> 
                        <DropdownItem href="#pablo" >
                        <i class="fas fa-user-plus">&nbsp;&nbsp;Kayıt OL</i>
                        </DropdownItem></Link>

                        <Link to="/customerlogin">
                        <DropdownItem href="#pablo">
                        <i class="fas fa-user-md">&nbsp;&nbsp; Dr. Giriş Yap</i>
                        </DropdownItem></Link>

                       <Link to="/customerlogin">
                       <DropdownItem  href="#pablo">
                       <i class="fas fa-user-tie">&nbsp;&nbsp; Yönetici Giriş Yap</i>
                        </DropdownItem></Link>

                      <Link to="/customerlogin">
                      <DropdownItem href="#pablo">
                      <i class="fas fa-user-cog">&nbsp;&nbsp;  Admin Giriş Yap</i>
                      </DropdownItem></Link>
                        
                      </DropdownMenu>
                    </UncontrolledDropdown>
          
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          
            
            </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
