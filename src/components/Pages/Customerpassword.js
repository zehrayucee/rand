import React, { Component } from "react";
import DemoFooter from "../Footers/DemoFooter.js";
import ReactDatetime from "react-datetime";
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie'
import { Route, Redirect } from 'react-router'
import * as firebase from 'firebase';
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

export default class Customerpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password2: "",
      newpassword: "",
      newpassword2: "",


    };
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }
  onChangeHandle(key) {
    return e => {
      this.setState({
        [key]: e.target.value
      })
    }
  }

  cookiesremove = () => {
    Cookies.remove("name");
    <Redirect to="/index" />
  }

  componentDidMount() {
    var bu = this
    axios.get("http://localhost:3001/customer")
      .then(res => {
        console.log(res);
        console.log(res.data);
        bu.setState({
          respass: res.data[0].customer_password, //gelen data
        })
      }).catch(err => {
        console.log(err)
      })
  }

  change = (e) => {
    let input = this.state.input;
    e.preventDefault();
    const user = {

      newpassword: this.state.newpassword,
      newpassword2: this.state.newpassword2,
    }
    var inputs = [].slice.call(document.getElementsByTagName("input"));
    [].slice.call(document.getElementsByClassName("error")).forEach(res => {
      res.remove()
    })


    inputs.map((data) => {
      if (data.value === "") {
        var element = data.parentElement;

        var e2 = element.appendChild(document.createElement("div", { innerText: "test" }))
        e2.innerText = "Lütfen boş bırakmayınız!";
        e2.classList.add("error")
        var div = element.children;
      }
    })
    if (this.state.password2 === this.state.respass) {
      alert("eski parola doğru")
      if (typeof this.state.newpassword !== "undefined" && typeof this.state.newpassword2 !== "undefined") {
        if (this.state.newpassword != this.state.newpassword2) {
          alert("parolayı doğru yazdığınızı kontrol edin")
          Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
          this.setState({
            newpassword: "",
            newpassword2: "",
          });
        }
        else {
          alert("parola tekrarı doğru")
          if (this.state.password2 !== "") {
            if (this.state.newpassword !== "") {
              if (this.state.newpassword2 !== "") {
                alert("giriş-1")
                var $this = this;
                axios.post("http://localhost:3001/customer")
                  .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                      respass: res.data[0].customer_password
                    })
                  }).catch(err => {
                    console.log(err)

                  })
              }
              alert(this.state.respass)
            }
          }
        }
      }

    }
    else {
      alert("eski parola yalnış")
      return false;
    }
    //alert(this.state.resspass)
    //alert(this.state.password2) //çalışıyoor

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
                            onClick={(e) => e.preventDefault()}
                          >
                            Parola Yenile
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
                        onClick={this.cookiesremove}
                      >

                        <Link to="/index">
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-settings-gear-65"

                          />Çıkış</Link>
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
                            <Input placeholder="Default" type="text" value={this.state.password2} onChange={this.onChangeHandle("password2")} />
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
                            <Input placeholder="Default" type="text" value={this.state.newpassword} onChange={this.onChangeHandle("newpassword")} />
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
                            <Input placeholder="Default" type="text" value={this.state.newpassword2} onChange={this.onChangeHandle("newpassword2")} />
                          </div>
                        </div>
                      </FormGroup>
                      {/*t-ı*/}

                      <Button className="cre mra clts maaf" onClick={this.change} outline size="lg" type="button">
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
