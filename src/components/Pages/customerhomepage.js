import React, { Component } from "react";
import DemoFooter from "../Footers/DemoFooter.js";
import { Link } from "react-router-dom";
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

  class  Customerhomepage extends Component {
    render() {
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
   <Link to="/randone">
   <Button className="btn wh ht mtb dfk " color="success" outline size="lg" type="button">
   <i class="fas fa-user"></i>&nbsp;
    Randevu AL
    </Button></Link>
   </Col>

   <Col md="6">
   <Link to="/randone">
   <Button className="btn wh ht mtb dfk" color="primary" outline size="lg" type="button">
   <i class="fas fa-users"></i>&nbsp;
    Randevu AL
    </Button></Link>
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
    }
export default Customerhomepage;