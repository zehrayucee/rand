import { useState, useEffect,React }  from "react";
import { Link } from "react-router-dom";
import DemoFooter from "../Footers/DemoFooter.js";
import axios from 'axios';
import {
    Button,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Col,
    Row,
    Container,
    TabContent,
    TabPane,
  } from "reactstrap";

  import ReactDatetime from "react-datetime";

function Customerdate() {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <> 
<div className="page-header  section-dark dsf"
         style={{
         backgroundImage:
        "url(" + require("assets/img/axa.jpg").default + ")",
        alignItems:"baseline"
}}>
<div className="filter"/>
{/*11111111111111111111111111111111111111111111111111111111111111 */}
<Container>
<div className="e  mt">
  <Navbar className="bg-primary" expand="lg">
    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
      Randevu işlemleri
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
            href="/index"
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
          <Link to="/Customerid">
            <DropdownItem
              href="#pablo"
            >
              Kimlik Bilgileri
            </DropdownItem></Link>
            <Link to="/Customercontact">
            <DropdownItem
              href="#pablo"
            >
              İletişim Bilgileri
            </DropdownItem></Link>
            <Link to="/Customerpassword">
            <DropdownItem
              href="#pablo"
            >
              Parolamı Yenile
            </DropdownItem></Link>
            
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
          <Link to="/Customerdate">
            <DropdownItem
              href="#pablo"
            >
              Randevularım
            </DropdownItem></Link>
            <Link to="/Customerdate">
            <DropdownItem
              href="#pablo"
            >
              Randevu Geçmişi
            </DropdownItem></Link>
            
            
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
   
   <div className="col-md-12">
   <div className="nav-tabs-navigation  " >
                <div className="nav-tabs-wrapper "style={{
                  width:"98%",
                  height:"100%",
                }}>
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem >
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Randevularım
                      </NavLink>
                    </NavItem>
          
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Geçmiş Randevularım
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab} className="text-center  ">
                <TabPane  tabId="1">
                  <div className="tabcls ">

                  <div className="row">
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">   
                  </div>
                  
                  </div>
                  <div className="row">
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                  <Button
                  className="btn-just-icon ml-1"
                  color="danger"
                  type="button"
                >
                <i class="fas fa-times"></i>
                </Button>
                   <Button
                  className="btn-just-icon ml-1"
                  color="default"
                  type="button"
                >
                <i class="fas fa-edit"></i>
                </Button>
                   <Button
                  className="btn-just-icon ml-1"
                  color="default"
                  type="button"
                >
                <i class="fas fa-print"></i>
                </Button>
                    
                  </div>
                  
                  </div>

                  </div>
                </TabPane>
                <TabPane tabId="2">
                <div className="tabcls ">

                  <div className="row">
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">   
                  </div>
                  
                  </div>
                  <div className="row">
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>ID :</h5>
                  </div>
                  <div className="col-md-3">
                  <Button
                  className="btn-just-icon ml-1"
                  color="danger"
                  type="button"
                >
                <i class="fas fa-times"></i>
                </Button>
                   <Button
                  className="btn-just-icon ml-1"
                  color="default"
                  type="button"
                >
                <i class="fas fa-edit"></i>
                </Button>
                   <Button
                  className="btn-just-icon ml-1"
                  color="default"
                  type="button"
                >
                <i class="fas fa-print"></i>
                </Button>
                    
                  </div>
                  
                  </div>

                  </div>
                
                </TabPane>
                
              </TabContent>
           
                </div>
              </div>
              
   </div>
          
   </div>          
</div>
</Container>
</div>
<DemoFooter/>
</>
  );
}
export default Customerdate;