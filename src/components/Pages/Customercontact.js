import React, { Component, useState } from "react";
import DemoFooter from "../Footers/DemoFooter.js";
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";
import axios from 'axios';
import PhoneInput from 'react-phone-number-input'
import TextField from '@material-ui/core/TextField';
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


const initialState = {
  name: "",
  eposta: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class Customercontact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      tc: "",
      value: "",
      phone: "",
      adress: "",
      eposta: "",
    }
  }
  state = { phone: "" };

  handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };
  onChangeHandle(key) {
    return e => {
      this.setState({
        [key]: e.target.value
      })
    }
  }


  componentDidMount() {
    var bu = this
    axios.get("http://localhost:12283/api/TBLNOTs/").then(res => {
      bu.setState({ id: res.data[0].not_txt })
      bu.setState({ tc: res.data[0].not_date })
      bu.setState({ phone: res.data[0].not_date })
      bu.setState({ adress: res.data[0].not_date })
      bu.setState({ eposta: res.data[0].not_date })

    }).catch(err => {
      console.log(err)
    })
  }
  onChangeHandle(key) {
    return e => {
      this.setState({
        [key]: e.target.value
      });
    }
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
          {/*2222222222222222222*/}
          <Container >
            <div className="e  mt">

              <Navbar className="bg-primary" expand="lg">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  ??leti??im Bilgileri
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
                          href="#pablo" >
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
                            ??leti??im Bilgileri
            </DropdownItem></Link>
                        <Link to="/Customerpassword">
                          <DropdownItem
                            href="#pablo"
                          >
                            Parolam?? Yenile
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
                            Randevular??m
            </DropdownItem></Link>
                        <Link to="/Customerdate">
                          <DropdownItem
                            href="#pablo"
                          >
                            Randevu Ge??mi??i
            </DropdownItem></Link>


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
                        />????k????
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
                      {/*text-??nput */}
                      <FormGroup>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>ID :</h5>
                          </div>
                          <div className="col-md-8">
                            <Input placeholder="Default" maxLength="11" type="text" value={this.state.id} onChange={this.onChangeHandle("id")} />
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-??*/}
                      {/*text-??nput */}
                      <FormGroup>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>TC :</h5>
                          </div>
                          <div className="col-md-8">
                            <Input placeholder="Default" maxLength="11" type="number" value={this.state.tc} onChange={this.onChangeHandle("tc")} />
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-??*/}
                    </div>
                    <div className="col-md-6">

                      <div className="bslk"></div>
                      {/*text-??nput */}
                      <FormGroup>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>TELEFON :</h5>
                          </div>
                          <div className="col-md-8">
                            <PhoneInput
                              className="phone "
                              inputExtraProps={{
                                name: "phone",
                                required: true,
                                autoFocus: true
                              }}
                              defaultCountry={"sg"}
                              value={this.state.phone}
                              onChange={this.handleOnChange}
                            />{/* <Input placeholder="Default" type="text" value={this.state.phone}/> */}
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-??*/}


                      {/*text-??nput */}
                      <FormGroup>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>ADRES :</h5>
                          </div>
                          <div className="col-md-8">
                            <Input placeholder="Default" maxLength="100" type="text" value={this.state.adress} onChange={this.onChangeHandle("adress")} />
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-??*/}
                      {/*text-??nput */}
                      <FormGroup>
                        <div className="row">
                          <div className="col-md-4">
                            <h5>E_POSTA :</h5>
                          </div>
                          <div className="col-md-8">
                            <Input placeholder="Default" name="email" type="text" maxLength="50" value={this.state.eposta} onChange={this.onChangeHandle("eposta")} />
                          </div>
                          <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.emailError}</div>
                        </div>
                      </FormGroup>
                      {/*t-??*/}

                      <Button className="cre mra clts" outline size="lg" type="button">
                        G??ncelle
       </Button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </Container>

        </div><DemoFooter />
      </>
    );
  }
}
