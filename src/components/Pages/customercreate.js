import React, { Component } from "react";
import axios from 'axios';
import IndexNavbar from "../Navbars/IndexNavbar.js";
import Cookies from 'js-cookie'
import {
  Button,
  Label,
  Card,
  Pagination,
  FormGroup,
  Input,
  PaginationItem,
  PaginationLink,
  Form,
  Modal,
  Container,
  Row,
  Col,
} from "reactstrap";

class Customercreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      page: 1,
      err: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangeHandle = this.onChangeHandle.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.backTo = this.backTo.bind(this)
    this.postt = this.postt.bind(this)
  }

  postt(user) {
    var bu = this
    axios.post("http://localhost:3001/customer", { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        bu.setState({
          resPass: res.data[0].not_txt
        })
      }).catch(err => {
        console.log(err);
      })
    this.setState({ page: 2 })
    alert("aaa")
  }

  backTo() {
    this.setState({ page: 1 })
  }
  onChangeHandle(key) {
    return e => {
      this.setState({
        [key]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    let input = this.state.input;
    

    e.preventDefault();
    const user = {
      idtt: this.state.idtt,
      name: this.state.name,
      lastname: this.state.lastname,
      fathername: this.state.fathername,
      datetime: this.state.datetime,
      email: this.state.email,
      adress: this.state.adress,
      phone: this.state.phone,
      passw: this.state.pass,
      passw2: this.state.pass2,
    }
    var inputs = [].slice.call(document.getElementsByTagName("input"));

    [].slice.call(document.getElementsByClassName("error")).forEach(res => {
      res.remove()
    })
    inputs.map((data) => {
      //   
      if (data.value === "") {
        var element = data.parentElement;

        var e2 = element.appendChild(document.createElement("div", { innerText: "test" }))
        e2.innerText = "Lütfen boş bırakmayınız!";
        e2.classList.add("error")
        var div = element.children;
      }
      else {
        if (typeof this.state.passw !== "undefined" && typeof this.state.passw2 !== "undefined") {
          if (this.state.passw != this.state.passw2) {
            this.setState({ err: true });
          }
          else {
            this.setState({ page: 2 })
          }
        }
      }
    })
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

  render() {
    return (
      <>
        <IndexNavbar />
        <div className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/axa.jpg").default + ")",
          }} >

          <div className="filter " />
          <Container>
            <Row >{/*11111111111111111111 */}
              <div className={this.state.page == 1 ? "bir rml-auto mr-auto mw-100 " : "d-none"}>
                <Col className=" rml-auto mr-auto mw-100  whtp" >
                  <Card className="card-register ml-auto mr-auto" style={{ padding: "10px" }}>

                    <div className="as1 " /*ustdıv */
                      style={{
                        backgroundColor: "#6bd098", //#6bd098
                        width: "100%",
                        height: "15%",
                        display: "flex",
                      }} >

                      <div className="asic mrr col-md-10"
                        style={{
                          backgroundColor: "#6bd098",
                          width: "55%",
                          height: "80%",

                        }}>
                        <div className="title text-dark text-border  " >
                          <h4><span className="note bld">Kayıt Olun</span></h4>
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

                    <div className="as2 ">
                      <div className="form1 mlk">
                        <Container>
                          <form >
                            <div className="row">
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
                                      <Input id="test" placeholder="Default" className="form-control" type="text" value={this.state.adres} onChange={this.onChangeHandle("adres")} />
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

                            </div></form>

                          <div className="ta mt-3" >

                            <Button className="cre mra" color="success" outline size="lg" type="Button" onClick={this.handleReset}>
                              <i class="far fa-trash-alt"></i>&nbsp; Temizle
                 </Button>
                            <Button className="cre mla" color="info" outline size="lg" type="button" onClick={this.handleSubmit} >
                              <i class="fas fa-check"></i>&nbsp;Kaydet
                </Button>
                          </div>
                        </Container>

                      </div>
                    </div>

                  </Card>
                </Col>
              </div>
              {/*2222222222222222222222222 */}
              <div className={this.state.page == 2 ? 'iki rml-auto mr-auto mw-100' : 'd-none'}>
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
                          <h4><span className="note bld">Lütfen Kontrol Ediniz...</span></h4>
                        </div>
                      </div>
                      <div className="paniation mll "
                        style={{
                          backgroundColor: "#6bd098", //#6bd098
                          display: "flex",
                          width: "20%",
                          height: "80%",
                        }}>

                        {/*panigation (1-2)*/}
                        <nav aria-label="...">
                          <Pagination count={10} disabled>
                            <PaginationItem  >
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                1
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                              <PaginationLink
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                2
                </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </nav>
                        {/*panfinish */}
                      </div>
                    </div>

                    <div className="as2 ">
                      <div className="form1 mlk">
                        <Form className="register">
                          <Container>
                            <div className="row">

                              <div className="col-md-12 col-lg-6 col-sm-12 ml-6">

                                {/*text-ınput */}
                                <FormGroup className="mt-3">
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      {this.state.idtt}
                                    </div>

                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld" >
                                      {this.state.name}
                                    </div>

                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      {this.state.lastname}
                                    </div>

                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      {this.state.fathername}
                                    </div>

                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      {this.state.datebird}
                                    </div>

                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                              </div>

                              <div className="col-md-12 col-lg-6 col-sm-12 ml-6 ">

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      {this.state.email}
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      {this.state.adress}
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      {this.state.phone}
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                                {/*text-ınput */}
                                <FormGroup>
                                  <div className="row">
                                    <div className="col-md-4 bld ">
                                      {this.state.passw2}
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}

                              </div>
                            </div>

                            <div className="ta mt-3" >

                              <Button className="cre mra" color="success" outline size="lg" type="button" onClick={this.backTo}>
                                <i class="bi bi-caret-left-fill"> </i>Düzenle
               </Button>
                              <Button className="cre mla" color="danger" outline size="lg" type="button" onClick={this.postt}>
                                <i class="fas fa-check"></i>&nbsp;Kaydet
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
export default Customercreate;