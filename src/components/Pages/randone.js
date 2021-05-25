import React, { Component } from 'react'
import { displayPartsToString } from "typescript";
import ReactDatetime from "react-datetime";
import axios from 'axios';
//import { BrowserRouter, Route, Redirect, Switch, Router } from "react-router-dom";
import IndexNavbar from "../Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import {
  Button,
  Label,
  Card,
  Pagination,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  PaginationItem,
  PaginationLink,
  Form,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Table,
} from "reactstrap";



export class randone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data2: [],
      data3: [],
      data4: [],
      id: "",
      sel1: "",
      sel2: "",
      sel3: "",
      pagex: 1,
      //data2:false,
      selectedDate: new Date(),
      zaman: "",
      dizi: [],
      page2: 3,
      times: false,
      compname: "",
      compstaff: "",
      compuser: "",
      compdate: "",
      comptimerr: "",
      disabled: 1,
      idtt: "",
      name: "",
      lastname: "",
      fathername: "",
      datetime: "",
      email: "",
      addres: "",
      phone: "",
      passw: "",
      passw2: "",
      err: false,

    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }

  componentDidMount() {
    var bu = this
    axios.get("http://localhost:3003/company").then(res => {
      //console.log(res.data)
      bu.setState({
        data: res.data
      })
      // console.log(this.state.data)

    }).catch(err => {
      console.log(err)
    })
  }

  mett = (e) => {
    var akt = this;
    //console.log(e.target)
    var deger = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    // console.log(deger[0].innerText)
    axios.get("http://localhost:3004/companystaff/" + e.target.value).then(res => {
      //console.log(res.data)
      akt.setState({
        data2: res.data,
        compname: deger[0].innerText,
      })
      // console.log(akt.state.data)
    }).catch(err => {
      console.log(err)
    })
  }

  ret = (e) => {
    var ntt = this
    //console.log(e.target)
    var deger1 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    //console.log(deger1[0].innerText)
    axios.get("http://localhost:3005/companyuser/" + e.target.value).then(res => {
      // console.log(res.data)
      ntt.setState({
        data3: res.data,
        page2: 4,
        compstaff: deger1[0].innerText,
      })
      // console.log(ntt.state.data)
    }).catch(err => {
      console.log(err)
    })
  }

  fonk = (e) => {
    this.setState({ page2: 4 })
    var deger2 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    //console.log(deger2[0].innerText)
    //console.log("fonk")
    var fonkt = this
    axios.get("http://localhost:3006/companyrundate/" + e.target.value).then(res => {
      //console.log(res.data)
      fonkt.setState({
        data4: res.data,
        disabled: 2,
        compuser: deger2[0].innerText,
      })
      // console.log(ntt.state.data)
    }).catch(err => {
      console.log(err)
    })

  }
  onClickhandlee = (e) => {
    var id = e.target.dataset.id;//button data-id deger ataması
    var array = this.state.data4[id];
    var deger4 = e.target.innerText;
    //console.log(deger4)
    this.setState({ times: array, page: 5, compdate: deger4 })
  }


  show = (e) => {
    var deger5 = e.target.innerText;
    //console.log(deger5)
    this.setState({ comptimerr: deger5, disabled: 1 })
  }

  handlesubmit = () => {
    this.setState({ pagex: 2 })

  }
  handlesubmit2 = () => {
    this.setState({ pagex: 3, disabled: 3 })

  }
  handlesubmitx = () => {
    this.setState({ pagex: 1 })

  }
  handlesubmity = () => {
    this.setState({ pagex: 4 })

  }


  onChangeHandle(key) {

    var form1 = document.getElementsByClassName("form1")[2];
    if (form1 != undefined) {
      var disabled = false;

      [].slice.call(form1.getElementsByTagName("input")).map((item, count) => {
        if (item.value == "") {
          disabled = 3
        }
      })
      return e => {
        this.setState({
          [key]: e.target.value,
          disabled: disabled != false ? disabled : this.state.disabled + 1
        })
      }
    } else {
      return e => {
        this.setState({
          [key]: e.target.value,
        })
      }
    }
  }

  handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      idtt: "",
      name: "",
      lastname: "",
      fathername: "",
      datetime: "",
      email: "",
      addres: "",
      phone: "",
      passw: "",
      passw2: "",

    });
  }

  submitt = (user) => {
    var bu = this
    axios.post("http://localhost:3001/customer", {
      idtt: this.state.idtt,
      name: this.state.name,
      lastname: this.state.lastname,
      datetime: this.state.datetime,
      email: this.state.email,
      addres: this.state.addres,
      phone: this.state.phone,
      passw2: this.state.passw2,
      compname: this.state.compname,
      compstaff: this.state.compstaff,
      compuser: this.state.compuser,
      compdate: this.state.compdate,
      comptimerr: this.state.comptimerr


    })
      .then(res => {
        console.log(res);
        console.log("başarılı");

      }).catch(err => {
        console.log(err);
        console.log("başarısız");
      })
    alert("post işlemi")

  }



  render() {
    // console.log(this.state.data2 == false ? "bş" : typeof(this.state.data2[0].company_name))
    // console.log(this.state)
    return (
      <>
        <IndexNavbar />
        <div className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/axa.jpg").default + ")",
          }} >
          <div className="filter " />
          <Container>
            <Row >
              {/*1111 */}
              <div className={this.state.pagex == 1 ? 'bir rml-auto mr-auto mw-100' : 'd-none'}>
                <Col className=" rml-auto mr-auto mw-100 " >
                  <Card className="card-register ml-auto mr-auto" style={{ padding: "10px" }} >

                    <div className="as1" >

                      <div className="asic mrr col-md-6 ytt">
                        <div className="title text-dark text-border  " >
                          <h4><span className="note bld">Hizmet Sağlayıcıyı Seçin</span></h4>
                        </div>
                      </div>

                      <div className="paniation mll yrrf">
                        <nav aria-label="...">
                          <Pagination count={10} disabled>
                            <PaginationItem className="active">
                              <PaginationLink
                                href="#pablo"
                              >
                                1
                      </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </nav>
                      </div>

                    </div>


                    <div className="as2">
                      <div className="form1 mlk">
                        <Form className="register-form">
                          <Container>
                            <Row>
                              <div className="col-md-12 col-lg-6 col-sm-12">
                                <div className="title text-dark text-border " >
                                  <h5><span className="note bld ">İl </span></h5>
                                  <div className="select" >
                                    <select class="custom-select" onInput={this.mett} aria-label=".form-select-lg example">
                                      <option value="0" disabled="true" selected="true">il seçiniz</option>

                                      {this.state.data.map(item => {
                                        return (
                                          <option value={item.company_id}>{item.company_name}</option>
                                        )
                                      })}

                                    </select></div></div>
                              </div>

                              <div className="col-md-12 col-lg-6 col-sm-12">
                                <div className="title text-dark text-border bld " >
                                  <h5><span className="note bld">İlçe</span></h5>
                                  <select class="custom-select form-select-lg col-md-12" onInput={this.ret} aria-label=".form-select-lg example">
                                    <option value="0" selected="true">ilçe seçiniz</option>
                                    {this.state.data2.map(index => {
                                      return (
                                        <option value={index.companystaff_id} >{index.companystaff_name}</option>
                                      )
                                    })}

                                  </select>
                                </div>
                              </div>
                            </Row>
                            <Row>
                              <div className="col-md-12 col-lg-6 col-sm-12">
                                <div className="title text-dark text-border bld " >
                                  <h5><span className="note bld">Doktor </span></h5>
                                  <select class="custom-select form-select-lg col-md-12 " onInput={this.fonk} aria-label=".form-select-lg example">
                                    <option value="0" disabled="true" selected="true">doktor seçiniz</option>
                                    {this.state.data3.map(inx => {
                                      return (
                                        <option value={inx.companyuser_id} >{inx.companyuser_name}</option>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>

                              {/**
                                <div className="col-md-12 col-lg-6 col-sm-12">
                                  <div className="title text-dark text-border bld " >
                                    <h5><span className="note bld">Kişi Sayısı  </span></h5>
                                    <select class="custom-select form-select-lg col-md-12 "  aria-label=".form-select-lg example">
                                      <option value="0" selected="true"  >Kişi sayısı seçiniz</option>
                                      <option value="1"    >1 </option>
                                      <option value="2" >2</option>
                                      <option value="3" >3</option>
                                      <option value="4" >4</option>
                                      <option value="5" >5</option>
                                      <option value="6" >6</option>
                                      
                                    </select>
                                  </div>
                                </div>  */}
                            </Row>
                            <Row>
                              <Button disabled={this.state.disabled == 1 ? true : false} className="btn-round mr-1 mla btn-lg" onClick={this.handlesubmit} color="danger" type="button">
                                Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                              </Button>
                            </Row>
                          </Container>
                        </Form>
                      </div>
                    </div>
                  </Card>
                </Col>
              </div>
              {/*2222 */}
              <div className={this.state.pagex == 2 ? 'iki rml-auto mr-auto mw-100' : 'd-none'} >
                <Card className="card-register ml-auto mr-auto" style={{ padding: "10px" }}>

                  <div className="as1" /*ustdıv */
                    style={{
                      backgroundColor: "#6bd098", //#6bd098
                      width: "100%",
                      height: "15%",
                      display: "flex",
                    }} >

                    <div className="asic mrr col-md-6"
                      style={{
                        backgroundColor: "#6bd098",
                        width: "55%",
                        height: "80%",
                      }}>
                      <div className="title text-dark text-border  " >
                        <h4><span className="note bld">Randevu Zamanı ve Tarihini Seçin</span></h4>
                      </div>
                    </div>
                    <div className="paniation mll "
                      style={{
                        backgroundColor: "#6bd098", //#6bd098
                        display: "flex",
                        width: "20%",
                        height: "80%",
                      }}>
                      <div className="paniation mll yrrf">
                        <nav aria-label="...">
                          <Pagination count={10} disabled>
                            <PaginationItem className="active">
                              <PaginationLink
                                href="#pablo"
                              >
                                2
                      </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div className="as2 " /*altdıv */
                    style={{
                      backgroundColor: "#ffff",
                      width: "100%",
                      height: "90%",
                    }} >

                    <div className="form1 mlk">
                      <Form action="javascipt:;" className="register-form">
                        <Container>
                          <Row>

                            <div className="col-md-12 col-lg-6 col-sm-12">

                              <div className="title text-dark text-border bld " >
                                <h5><span className="note bld">Randevu Tarihi</span></h5>
                              </div>

                              <div className="asd row">
                                {this.state.data4.map((item, index) =>

                                  <div className={"col-lg-5"}>
                                    {console.log(item.date)}
                                    <Button
                                      color="success"
                                      size="lg"
                                      type="button"
                                      className="ml-1 asdf"
                                      data-id={index}
                                      onClick={this.onClickhandlee}
                                    >
                                      {item.date}
                                    </Button>
                                  </div>

                                )}
                              </div>

                            </div>

                            <div className="col-md-12 col-lg-5 col-sm-12">

                              <div className="title text-dark text-border bld " >
                                <h5><span className="note bld">Randevu Zamanı</span></h5>
                              </div>

                              <div className="asd">

                                <div className={this.state.page != 5 ? 'tt' : 'd-none'}>
                                  <h4>Lütfen Tarih Seçiniz...</h4>
                                </div>

                                <div className="bv"  >

                                  {this.state.times != false ? this.state.times.timearray.map(item => {

                                    return (

                                      <Button onClick={this.show} className="btn-1 ml-1" color="success" type="button">
                                        {item}
                                      </Button>

                                    )
                                  }) : ''}</div>

                              </div>
                            </div>
                          </Row>
                          <div className="ta" >
                            <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmitx} >
                              <i class="fas fa-chevron-left">&nbsp;&nbsp;Önceki</i>
                            </Button>
                            <Button className="btn-round mr-1 mla btn-lg" disabled={this.state.disabled == 2 ? true : false} color="danger" onClick={this.handlesubmit2} type="button">
                              Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                            </Button>
                          </div>
                        </Container>
                      </Form>
                    </div>
                  </div>

                </Card>

              </div>
              {/*3333 */}
              <div className={this.state.pagex == 3 ? 'bir rml-auto mr-auto mw-100' : 'd-none'}>
                <Col className=" rml-auto mr-auto mw-100 " >
                  <Card className="card-register ml-auto mr-auto" style={{ padding: "10px" }} >

                    <div className="as1" >

                      <div className="asic mrr col-md-6 ytt">
                        <div className="title text-dark text-border  " >
                          <h4><span className="note bld">Bilgilerinizi Giriniz</span></h4>
                        </div>
                      </div>

                      <div className="paniation mll yrrf">
                        <nav aria-label="...">
                          <Pagination count={10} disabled>
                            <PaginationItem className="active">
                              <PaginationLink
                                href="#pablo"
                              >
                                3
                    </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </nav>
                      </div>

                    </div>
                    <div className="form1 mlk">
                      <Col className=" whtp" >
                        <div className="as2 ">
                          <Container>
                            <Row >

                              <div className="col-md-12 col-lg-6 col-sm-12">

                                {/*text-ınput */}
                                <FormGroup className="mt-3">
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Tc Kimlik NO
              </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" value={this.state.idtt} onChange={this.onChangeHandle("idtt")} />
                                      <div className="text-danger">{this.state.pass}</div>
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Ad
              </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" value={this.state.name} onChange={this.onChangeHandle("name")} />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Soyad
              </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" value={this.state.lastname} onChange={this.onChangeHandle("lastname")} />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      Baba Adı
              </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" value={this.state.fathername} onChange={this.onChangeHandle("fathername")} />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Doğum Tarihi
              </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" value={this.state.datebird} onChange={this.onChangeHandle("datebird")} />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                              </div>

                              <div className="col-md-12 col-lg-6 col-sm-12">
                                {/*text-ınput */}
                                <FormGroup className="mt-3">
                                  <div className="form-group col-md-12 ">
                                    <div className="row">
                                      <div className="col-md-4 bld pl-0 ">
                                        Email
        </div>
                                      <div className="col-md-8">
                                        <Input placeholder="Default" className="form-control" type="text" value={this.state.email} onChange={this.onChangeHandle("email")} />
                                      </div>
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <div className="form-group col-md-12 ">
                                  <div className="row">
                                    <div className="col-md-4 bld pl-0 ">
                                      Adres
      </div>
                                    <div className="col-md-8">
                                      <Input id="test" placeholder="Default" className="form-control" type="text" value={this.state.addres} onChange={this.onChangeHandle("addres")} />
                                    </div>
                                  </div>
                                </div>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <div className="form-group col-md-12 mt-3">
                                  <div className="row">
                                    <div className="col-md-4 pl-0 bld">
                                      Telefon
      </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" className="form-control" type="text" value={this.state.phone} onChange={this.onChangeHandle("phone")} />
                                    </div>
                                  </div>
                                </div>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <div className="form-group col-md-12 mt-3">
                                  <div className="row">
                                    <div className="col-md-4 pl-0 bld">
                                      Şifre
            </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" className="form-control" type="text" value={this.state.passw} onChange={this.onChangeHandle("passw")} />
                                    </div>
                                  </div>
                                </div>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <div className="form-group col-md-12 ">
                                  <div className="row">
                                    <div className="col-md-4 bld pl-0 ">
                                      Şifre (Tekrar)
          </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" className="form-control" type="text" value={this.state.passw2} onChange={this.onChangeHandle("passw2")} />
                                      <div className="text-danger">{this.state.err == true ? "şifre aynı değil" : ""}</div>
                                    </div>
                                  </div>
                                </div>

                                {/*t-ı*/}
                              </div>

                            </Row>

                            <div className="ta mt-3" >

                              <Button className="cre mra" color="success" outline size="lg" type="Button" onClick={this.handleReset}>
                                <i class="far fa-trash-alt"></i>&nbsp; Temizle
  </Button>
                            </div>
                            <div className="ta" >
                              <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmit} >
                                <i class="fas fa-chevron-left">&nbsp;&nbsp;Önceki</i>
                              </Button>
                              <Button className="btn-round mr-1 mla btn-lg" disabled={this.state.disabled == 3 ? true : false} color="danger" onClick={this.handlesubmity} type="button">
                                Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                              </Button>
                            </div>
                          </Container>
                        </div>
                      </Col>

                    </div>

                  </Card>
                </Col>
              </div>
              {/*4444 */}
              <div className={this.state.pagex == 4 ? 'iki rml-auto mr-auto mw-100' : 'd-none'}>
                <Col className=" rml-auto mr-auto mw-100 " >
                  <Card className="card-register ml-auto mr-auto" style={{ padding: "10px" }}>

                    <div className="as1" /*ustdıv */
                      style={{
                        backgroundColor: "#6bd098", //#6bd098
                        width: "100%",
                        height: "15%",
                        display: "flex",
                      }} >

                      <div className="asic mrr col-md-6"
                        style={{
                          backgroundColor: "#6bd098",
                          width: "55%",
                          height: "80%",
                        }}>
                        <div className="title text-dark text-border  " >
                          <h4><span className="note bld">Bilgilerinizi Kontrol Edin</span></h4>
                        </div>
                      </div>
                      <div className="paniation mll "
                        style={{
                          backgroundColor: "#6bd098", //#6bd098
                          display: "flex",
                          width: "20%",
                          height: "80%",
                        }}>

                        <div className="paniation mll yrrf">
                          <nav aria-label="...">
                            <Pagination count={10} disabled>
                              <PaginationItem className="active">
                                <PaginationLink
                                  href="#pablo"
                                >
                                  4
                    </PaginationLink>
                              </PaginationItem>
                            </Pagination>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="as2 ">
                      <div className="form1 mlk">
                        <Form className="register">
                          <Container>

                            <div className="row">

                              <div className="col-md-12 col-lg-12 col-sm-12">
                                <Table>
                                  <thead>
                                    <tr>
                                      <th scope="row">TC Kimlik No</th>
                                      <td>{this.state.idtt}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">isim</th>
                                      <td>{this.state.name}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">soyisim</th>
                                      <td>{this.state.lastname}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Doğumtarihi</th>
                                      <td>{this.state.datebird}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Email</th>
                                      <td>{this.state.email}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Adres</th>
                                      <td>{this.state.addres}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Telefon</th>
                                      <td>{this.state.phone}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">il</th>
                                      <th>{this.state.compname}</th>

                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">ilçe</th>
                                      <td>{this.state.compstaff}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Doktor</th>
                                      <td>{this.state.compuser}</td>

                                    </tr>
                                    <tr>
                                      <th scope="row">Randevu Tarihi</th>
                                      <td>{this.state.compdate}</td>

                                    </tr><tr>
                                      <th scope="row">Randevu Zamanı</th>
                                      <td>{this.state.comptimerr}</td>

                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </div>

                            <div className="ta" >
                              <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmit2}>
                                <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Önceki
                                  </Button>
                              <Button className="btn-round mr-1 mla btn-lg" color="danger" type="button" onClick={this.submitt} >
                                Submit&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                              </Button>
                            </div>
                          </Container>
                        </Form>
                      </div>
                    </div>
                  </Card>
                </Col>
              </div>




            </Row>
          </Container>
        </div>


      </>
    );
  }
}

export default randone;