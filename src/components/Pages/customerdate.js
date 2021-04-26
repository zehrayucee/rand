import { useState, useEffect,React }  from "react";
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
              Parolamı Yenile
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
      {/*<UncontrolledDropdown nav inNavbar>
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