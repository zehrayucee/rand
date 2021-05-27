import React, { Component } from 'react'
import axios from 'axios';
import {
  Button, Label, Card, Pagination, FormGroup, Input, InputGroupAddon, InputGroupText, InputGroup,
  PaginationItem, PaginationLink, Form, Modal, Container, Row, Col, UncontrolledTooltip, PopoverBody,
  PopoverHeader, UncontrolledPopover, Table,
} from "reactstrap";

export class rand extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data2: [],
      data3: [],
      data4: [],
      id: "",
      pagex: 1,
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
      datebird: "",
      email: "",
      addres: "",
      phone: "",
      passw: "",
      passw2: "",
      err: false,
      isvalid: true,
      isvalid2: true
    }
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }

  componentDidMount() {
    var bu = this
    axios.get("http://localhost:3003/company").then(res => {
      bu.setState({
        data: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  mett = (e) => {
    var akt = this;
    var deger = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    axios.get("http://localhost:3004/companystaff/" + e.target.value).then(res => {
      akt.setState({
        data2: res.data,
        compname: deger[0].innerText,
      })
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
    var fonkt = this
    axios.get("http://localhost:3006/companyrundate/" + e.target.value).then(res => {
      fonkt.setState({
        data4: res.data,
        disabled: 2,
        compuser: deger2[0].innerText,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  submithandle = () => {
    if (this.state.compname != "") {
      if (this.state.compstaff != "") {
        document.getElementById("inputcompname").classList.remove("is-invalid");
        document.getElementById("inputcompstaff").classList.remove("is-invalid");
        if (this.state.compuser != "") {
          document.getElementById("inputcompuser").classList.remove("is-invalid");
          this.setState({ pagex: this.state.pagex + 1, })
        }
        else {
          document.getElementById("inputcompuser").classList.add("is-invalid");
        }
      }
      else {
        document.getElementById("inputcompstaff").classList.add("is-invalid");
        document.getElementById("inputcompuser").classList.add("is-invalid");
      }
    }
    else {
      document.getElementById("inputcompname").classList.add("is-invalid");
      document.getElementById("inputcompstaff").classList.add("is-invalid");
      document.getElementById("inputcompuser").classList.add("is-invalid");
    }
  }

  handledate = () => {
    if (this.state.compdate != "") {
      if (this.state.comptimerr != "") {
        this.setState({ pagex: this.state.pagex + 1, })
      }
      else {
        this.setState({ isvalid: false, isvalid2: true })
      }
    }
    else {
      this.setState({ isvalid: true })
    }
  }

  onClickhandlee = (e) => {
    var id = e.target.dataset.id;//button data-id deger ataması
    var array = this.state.data4[id];
    var deger4 = e.target.innerText;
    this.setState({ comptimerr: '', isvalid: false })
    this.setState({ times: array, compdate: deger4, page: 5 })
    var arr = [].slice.call(document.getElementsByClassName("hyy"))
    arr.map(item => {
      item.classList.remove("active")
      var arr = [].slice.call(document.getElementsByClassName("tuu"))
      arr.map(item => {
        item.classList.remove("active")
      })
    })
    e.target.classList.add("active")
  }

  show = (e) => {
    var deger5 = e.target.innerText;
    this.setState({ comptimerr: deger5, disabled: 1, isvalid2: false })
    var arr = [].slice.call(document.getElementsByClassName("tuu"))
    arr.map(item => {
      item.classList.remove("active")
    })
    e.target.classList.add("active")
  }

  handlesubmitless = () => {
    this.setState({ pagex: this.state.pagex - 1 })
  }


  handlepp = () => {
    var form1 = document.getElementsByClassName("form1")[2];
    this.setState({ stt: 0 });
    [].slice.call(form1.getElementsByTagName("input")).map((item, count) => {
      var valid = form1.getElementsByClassName("is-invalid");
      if (valid.length == 0) {
        this.setState({ pagex: this.state.pagex + 1, })
      }
    })
  }

  onChangeHandle(key) {
    var form1 = document.getElementsByClassName("form1")[2];
    if (form1 != undefined) {
      var disabled = false;
      [].slice.call(form1.getElementsByTagName("input")).map((item, count) => {
        if (item.value == "") {
          item.classList.add("is-invalid");
        }
        else {
          if(this.state.passw == this.state.passw2){
             item.classList.remove("is-invalid");
             item.classList.add("is-valid");
          }
          else{
            document.getElementById("inputdeneme").classList.add("is-invalid");
          }
         
        }
      })
      return e => {
        this.setState({
          [key]: e.target.value,
        })
      }
    }
  }

  submitt = (user) => {
    var bu = this
    axios.post("http://localhost:3001/customer", {
      idtt: this.state.idtt,
      name: this.state.name,
      lastname: this.state.lastname,
      datebird: this.state.datebird,
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
        //console.log(res);
        console.log("başarılı");
        alert("Kayıt işleminiz gerçekleşmiştir.")
      }).catch(err => {
        console.log(err);
        console.log("başarısız");
        alert("Kayıt işlemi başarısız... Lütfen tekrar deneyiniz!")
      })
  }

  render() {
    return (
        <>
       <div className="Container" >
       <div className="Row">
     
            {/*1111 */}
            {/*<div className={this.state.pagex == 1 ? 'bir rml-auto mr-auto mw-100' : 'd-none'}>
        <div className="bir" style={{ backgroundImage: "url(" + require("assets/img/pexels-lorenzo-242236.jpg").default + ")",}}>
                
        */}
              <div className="bir">
                  <Card className="card-register " style={{ padding: "10px" }} >
                  
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
                              <div className="col-md-12 col-lg-10 col-sm-12">
                                <div className="title text-dark text-border " >
                                  <h5><span className="note bld ">İl </span></h5>
                                  <div className="select" >
                                    <select id="inputcompname" class="custom-select" onInput={this.mett} aria-label=".form-select-lg example">
                                      <option value="0" disabled="true" selected="true">il seçiniz</option>

                                      {this.state.data.map(item => {
                                        return (
                                          <option value={item.company_id}>{item.company_name}</option>
                                        )
                                      })}

                                    </select></div></div>

                                    <div className="title text-dark text-border bld " >
                                  <h5><span className="note bld">İlçe</span></h5>
                                  <select class="custom-select form-select-lg col-md-12" id="inputcompstaff" onInput={this.ret} aria-label=".form-select-lg example">
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
                            
                              <Button className="btn-round mr-1 mla btn-lg" onClick={this.submithandle} color="danger" type="button">
                                Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                              </Button>
                            </Row>
                          </Container>
                        </Form>
                      </div>
                    </div>
                  </Card>
                
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

                              <div className="asd row" >
                                {this.state.data4.map((item, index) =>

                                  <div className={"col-lg-5"}>
                                    {console.log(item.date)}
                                    <Button

                                      color="success"
                                      size="lg"
                                      type="button"
                                      className="ml-1 asdf hyy"
                                      data-id={index}
                                      onClick={this.onClickhandlee}
                                    >
                                      {item.date}
                                    </Button>
                                  </div>

                                )}
                              </div>
                              <div className={this.state.isvalid != false ? 'fntc' : 'd-none'}>
                                <h5>Lütfen tarih Seçiniz...</h5>
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
                                      <Button onClick={this.show} className="btn-1 ml-1 tuu" color="success" type="button">
                                        {item}
                                      </Button>
                                    )
                                  }) : ''}
                                </div>
                              </div><div className={this.state.isvalid2 != false ? 'fntc' : 'd-none'}>
                                <h5>Lütfen tarih Seçiniz...</h5>
                              </div>
                            </div>
                          </Row>
                          <div className="ta" >
                            <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmitless} >
                              <i class="fas fa-chevron-left">&nbsp;&nbsp;Önceki</i>
                            </Button>
                            <Button className="btn-round mr-1 mla btn-lg" color="danger" onClick={this.handledate} type="button">
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
                    <div className=" as1" >
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
                                      <Input placeholder="Default" data- type="text" value={this.state.datebird} onChange={this.onChangeHandle("datebird")} />
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
                                      <Input placeholder="Default" className="form-control" type="text" value={this.state.addres} onChange={this.onChangeHandle("addres")} />
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
                                      <Input id="inputdeneme" placeholder="Default" className="form-control" type="text" value={this.state.passw2} onChange={this.onChangeHandle("passw2")} />

                                    </div>
                                  </div>
                                </div>
                                {/*t-ı*/}
                              </div>
                            </Row>
                            <div className="ta" >
                              <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmitless} >
                                <i class="fas fa-chevron-left">&nbsp;&nbsp;</i>Önceki
                              </Button>
                              <Button className="btn-round mr-1 mla btn-lg" color="danger" onClick={this.handlepp} type="button">
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
                              <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button" onClick={this.handlesubmitless}>
                                <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Önceki
                                  </Button>

                              <Button className="cre mla" color="info" outline size="lg" type="button" onClick={this.submitt} >
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
            
           
          </div>
           
        </div>

     </> 
    );
  }
}

export default rand;