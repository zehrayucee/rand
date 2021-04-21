import React from "react";
// reactstrap components
// core components
import IndexNavbar from "../Navbars/IndexNavbar.js";
import IndexHeader from "../Headers/IndexHeader.js";
import DemoFooter from "../Footers/DemoFooter.js";
//import DemoFooter from "components/Footers/DemoFooter.js";

import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Col,
    Container,
  } from "reactstrap";

function customerhomepage() {
  return (
    <> 
<div className="page-header  section-dark dsf"
         style={{
         backgroundImage:
        "url(" + require("assets/img/axa.jpg").default + ")",
        alignItems:"baseline"
}}>
<div className="filter"/>
<Container>
<div className="e  mt">
{/*1111111111 */}
  <Navbar className="bg-primary" expand="lg">
    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
      Randevu Sistemi
    </NavbarBrand>
    <button
      aria-controls="navbarSupportedContent"
      aria-expanded={false}
      aria-label="Toggle navigation"
      className="navbar-toggler navbar-toggler-right"
      data-target="#navbar-menu"
      data-toggle="collapse"
      id="navbar-menu"
      type="button"
    >
      <span className="navbar-toggler-bar" />
      <span className="navbar-toggler-bar" />
      <span className="navbar-toggler-bar" />
    </button>
    <UncontrolledCollapse navbar toggler="#navbar-menu">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Anasayfa
          </NavLink>
        </NavItem>
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
            Hesap Bilgisi
          </DropdownToggle>
          <DropdownMenu
            aria-labelledby="dropdownMenuButton"
            className="dropdown-info"
          >
            
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Kimlik Bilgileri
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              İletişim Bilgileri
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Parolamı Sıfırla
            </DropdownItem>
            
          </DropdownMenu>
        </UncontrolledDropdown>
      
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
            Randevu Bilgileri
          </DropdownToggle>
          <DropdownMenu
            aria-labelledby="dropdownMenuButton"
            className="dropdown-info"
          >
            
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Randevularım
            </DropdownItem>
            <DropdownItem
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Randevu Geçmişi
            </DropdownItem>
            
            
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    
    <Nav className="ml-auto" navbar>
     {/* <NavItem className="active">
        <NavLink
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i aria-hidden={true} className="nc-icon nc-email-85" />
        </NavLink>
      </NavItem>*/}
     {/** <UncontrolledDropdown nav inNavbar>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="default"
          data-toggle="dropdown"
          href="#pablo"
          nav
          onClick={(e) => e.preventDefault()}
          role="button"
        >
          <i
            aria-hidden={true}
            className="nc-icon nc-single-02"
          />Bilgilerim
        </DropdownToggle>
        <DropdownMenu className="dropdown-danger" right>
          <DropdownItem header tag="span">
            Dropdown header
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Another action
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
*/} 
      <NavItem>
        <NavLink
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
        Çıkış&nbsp;&nbsp;<i class="fas fa-times-circle"></i>
        </NavLink>
      </NavItem>
      </Nav>
  </UncontrolledCollapse>
</Navbar>
</div>
<div className="ese">
   <div className="eseic">
   <div className="col-md-12 ">
   
   <Col md="6">
   <Button className="btn wh ht mtb dfk " color="success" outline size="lg" type="button">
   <i class="fas fa-user"></i>&nbsp;
    Randevu AL
    </Button>
   </Col>

   <Col md="6">
   <Button className="btn wh ht mtb dfk" color="primary" outline size="lg" type="button">
   <i class="fas fa-users"></i>&nbsp;
    Randevu AL
    </Button>
   </Col>
   
   </div>
   </div>
</div>
</Container>
</div>
<DemoFooter/>
</>
  );
}
export default customerhomepage;