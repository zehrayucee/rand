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
  } from "reactstrap";

  import ReactDatetime from "react-datetime";

function customers() {
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
      Kimlik Bilgileri
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
   
   <div className="col-md-12">
   <div className="row">
     <div className="col-md-6">
        <div className="bslk"></div>
        {/*text-ınput */}
        <FormGroup>
        <div className="row">
         <div className="col-md-4">
           <h5>ID :</h5>
         </div>
         <div className="col-md-8">
           <Input placeholder="Default" type="text" />
         </div>
        </div>
        </FormGroup>
         {/*t-ı*/}
         {/*text-ınput */}
        <FormGroup>
        <div className="row">
         <div className="col-md-4">
           <h5>TC :</h5>
         </div>
         <div className="col-md-8">
           <Input placeholder="Default" type="text" />
         </div>
        </div>
        </FormGroup>
         {/*t-ı*/}
     </div>
     <div className="col-md-6">
     <div className="bslk"></div>
     {/*text-ınput */}
     <FormGroup>
     <div className="row">
      <div className="col-md-4">
        <h5>ADI :</h5>
      </div>
      <div className="col-md-8">
        <Input placeholder="Default" type="text" />
      </div>
     </div>
     </FormGroup>
      {/*t-ı*/}
      {/*text-ınput */}
      <FormGroup>
      <div className="row">
       <div className="col-md-4">
         <h5>SOYADI :</h5>
       </div>
       <div className="col-md-8">
         <Input placeholder="Default" type="text" />
       </div>
      </div>
      </FormGroup>
       {/*t-ı*/}
       {/*text-ınput */}
       <FormGroup>
       <div className="row">
        <div className="col-md-4">
          <h5>BABA ADI :</h5>
        </div>
        <div className="col-md-8">
          <Input placeholder="Default" type="text" />
        </div>
       </div>
       </FormGroup>
        {/*t-ı*/}
        {/*text-ınput */}
        <FormGroup>
        <div className="row">
         <div className="col-md-4">
           <h5>DOĞUM TARİHİ:</h5>
         </div>
         <div className="col-md-8">
           <Input placeholder="Default" type="text" />
         </div>
        </div>
        </FormGroup>
         {/*t-ı*/}
         <Button className="cre mra clts"   outline size="lg" type="button">
        Güncelle
       </Button>
     </div>
   </div>
   </div>
          
   </div>          
</div>
</Container>
</div>
<DemoFooter/>

 {/*222222222222222222222222222222222222222222222222222222222*/}
<Container>
<div className="e  mt">

  <Navbar className="bg-primary" expand="lg">
    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
      İletişim Bilgileri
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
      <UncontrolledDropdown nav inNavbar>
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

      <NavItem>
        <NavLink
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i
            aria-hidden={true}
            className="nc-icon nc-settings-gear-65"
          />Çıkış
        </NavLink>
      </NavItem>
      </Nav>
  </UncontrolledCollapse>
</Navbar>
</div>
<div className="ese">
   <div className="eseic">
   
   <div className="col-md-12">
   <div className="row">
     <div className="col-md-6">
        <div className="bslk"></div>
        {/*text-ınput */}
        <FormGroup>
        <div className="row">
         <div className="col-md-4">
           <h5>ID :</h5>
         </div>
         <div className="col-md-8">
           <Input placeholder="Default" type="text" />
         </div>
        </div>
        </FormGroup>
         {/*t-ı*/}
         {/*text-ınput */}
        <FormGroup>
        <div className="row">
         <div className="col-md-4">
           <h5>TC :</h5>
         </div>
         <div className="col-md-8">
           <Input placeholder="Default" type="text" />
         </div>
        </div>
        </FormGroup>
         {/*t-ı*/}
     </div>
     <div className="col-md-6">
     
     <div className="bslk"></div>
     {/*text-ınput */}
     <FormGroup>
     <div className="row">
      <div className="col-md-4">
        <h5>TELEFON :</h5>
      </div>
      <div className="col-md-8">
        <Input placeholder="Default" type="text" />
      </div>
     </div>
     </FormGroup>
      {/*t-ı*/}
      {/*text-ınput */}
      <FormGroup>
      <div className="row">
       <div className="col-md-4">
         <h5>ADRES :</h5>
       </div>
       <div className="col-md-8">
         <Input placeholder="Default" type="text" />
       </div>
      </div>
      </FormGroup>
       {/*t-ı*/}
       {/*text-ınput */}
       <FormGroup>
       <div className="row">
        <div className="col-md-4">
          <h5>E_POSTA :</h5>
        </div>
        <div className="col-md-8">
          <Input placeholder="Default" type="text" />
        </div>
       </div>
       </FormGroup>
        {/*t-ı*/}
        
         <Button className="cre mra clts"   outline size="lg" type="button">
        Güncelle
       </Button>
     </div>
   </div>
   </div>
          
   </div>         
   
</div>
</Container>


{/*33333333333333333333333333333333333333333333333333333333333*/}
<Container>
<div className="e  mt">

  <Navbar className="bg-primary" expand="lg">
    <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
      Parola
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
              Parola Yenile
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
      <UncontrolledDropdown nav inNavbar>
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

      <NavItem>
        <NavLink
          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i
            aria-hidden={true}
            className="nc-icon nc-settings-gear-65"
          />Çıkış
        </NavLink>
      </NavItem>
      </Nav>
  </UncontrolledCollapse>
</Navbar>
</div>
<div className="ese">
   <div className="eseic">
   
   <div className="col-md-12">
   <div className="row">
   <div className="col-md-8 maa">
   <div className="bsl">
   </div>
   {/*text-ınput */}
   <FormGroup>
   <div className="row">
   
    <div className="col-md-4">
      <h5>Eski Şifre :</h5>
    </div>
    <div className="col-md-8 ">
      <Input placeholder="Default" type="text" />
    </div>
   </div>
   </FormGroup>
    {/*t-ı*/}
     {/*text-ınput */}
   <FormGroup>
   <div className="row">
    <div className="col-md-4">
      <h5>Yeni Şifre :</h5>
    </div>
    <div className="col-md-8">
      <Input placeholder="Default" type="text" />
    </div>
   </div>
   </FormGroup>
    {/*t-ı*/}
     {/*text-ınput */}
   <FormGroup>
   <div className="row">
    <div className="col-md-4">
      <h5>Yeni Şifre(Tekrar) :</h5>
    </div>
    <div className="col-md-8">
      <Input placeholder="Default" type="text" />
    </div>
   </div>
   </FormGroup>
    {/*t-ı*/}
    
    <Button className="cre mra clts maaf"   outline size="lg" type="button">
        Güncelle
    </Button>
    </div>

    </div>
   </div>
          
   </div>         
   
</div>
</Container>

</>
  );
}
export default customers;