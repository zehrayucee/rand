import React, { Component } from "react";
import DemoFooter from "../Footers/DemoFooter.js";
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";
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
} from "reactstrap";



export default class Customerid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tc: "",
      name: "",
      lastname: "",
      fathername: "",
      datebird: "",

    }
  }
  componentDidMount() {
    var bu = this
    axios.get("http://localhost:12283/api/TBLNOTs/").then(res => {
      bu.setState({ id: res.data[0].not_txt })
      bu.setState({ tc: res.data[0].not_date })
      bu.setState({ name: res.data[0].not_date })
      bu.setState({ lastname: res.data[0].not_date })
      bu.setState({ fathername: res.data[0].not_date })
      bu.setState({ datebird: res.data[0].not_date })
    }).catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <>
        <div className="page-header  section-dark dsf"
          style={{
            backgroundImage:
              "url(" + require("assets/img/axa.jpg").default + ")",
            alignItems: "baseline"
          }}>

          <div className="filter" />
          <Container >
            <div className="e  mt" >
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
                      <Link to="/index">
                        <NavLink
                          href="#pablo"
                        >
                          Anasayfa
          </NavLink></Link>
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
                            <Input placeholder="Default" type="text" value={this.state.id} />
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
                            <Input placeholder="Default" type="text" value={this.state.tc} />
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
                            <Input placeholder="Default" type="text" value={this.state.name} />
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
                            <Input placeholder="Default" type="text" value={this.state.lastname} />
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
                            <Input placeholder="Default" type="text" value={this.state.fathername} />
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
                            <Input placeholder="Default" type="text" value={this.state.datebird} />
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-ı*/}
                      <Button className="cre mra clts" onClick={this.handleQueryString} outline size="lg" type="button">
                        Güncelle
       </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </div>
        <DemoFooter />
      </>
    );
  }
}
