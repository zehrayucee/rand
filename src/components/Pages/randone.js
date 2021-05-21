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
      page: 1,
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
      disabled:3
    }
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
    console.log(e.target)
    var deger = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    console.log(deger[0].innerText)
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
    console.log(e.target)
    var deger1 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    console.log(deger1[0].innerText)
    axios.get("http://localhost:3005/companyuser/" + e.target.value).then(res => {
      // console.log(res.data)
      ntt.setState({
        data3: res.data,
        page: 4,
        compstaff: deger1[0].innerText,
      })
      // console.log(ntt.state.data)
    }).catch(err => {
      console.log(err)
    })
  }

  fonk = (e) => {
    this.setState({ page: 4 })
    var deger2 = [].slice.call(e.target.children).filter(function (item) { return item.value == e.target.value });
    console.log(deger2[0].innerText)
    console.log("fonk")
    var fonkt = this
    axios.get("http://localhost:3006/companyrundate/" + e.target.value).then(res => {
      console.log(res.data)
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
    console.log(deger4)
    this.setState({ times: array, page: 5, compdate: deger4 })
  }


  show = (e) => {
    var deger5 = e.target.innerText;
    console.log(deger5)
    this.setState({ comptimerr: deger5 })
  }

handlesubmit = () => {
  this.setState({ page: 2 })
  
}
handlesubmit2 = () => {
  this.setState({ page1: 4 })
  
}

  /*
   //  onClickhandlee= (e) => { 
   //   var id=e.target.dataset.id;//button data-id deger ataması
   //   var array=this.state.data[id];
   //   this.setState({times:array})
   // }
     // var nesne = this
     // axios.get("http://localhost:3003/timearray", {
     //  // method: "cors"
     // }).then(res=>{
     //   console.log(res.data[0])
     //    nesne.setState({
     //      //zaman:res.data.date,
     //      //dizi:res.data.timearray
     //      data:res.data
     //     })
     //   console.log(res.data)
     //   console.log(this)
     // }).catch(err=>{
     //   console.log(err)
     // })
  
 
 // setSelectedDate = (date) => {
 //   this.setState({
 //     selectedDate: date
 //   })
 //   //console.log(this.state.zaman);
 //   console.log(new Intl.DateTimeFormat('en-US').format(this.state.selectedDate))
 //   if(this.state.zaman != this.state.selected){
 //    console.log("false");
 //   }
 //   else{
 //     console.log("true")
 //   }
   
  // }*/

  render() {
    // console.log(this.state.data2 == false ? "bş" : typeof(this.state.data2[0].company_name))
    console.log(this.state)
    return (
      <>

        <IndexNavbar />
        <div className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/axa.jpg").default + ")",
          }} >

          <div className="filter " />
          {/*11111111***********************************************************************/}
          <Container>
            <Row >
              <div className="bir rml-auto mr-auto mw-100">
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
                                    <option value="0" disabled="true" selected="true">ilçe seçiniz</option>
                                    {this.state.data2.map(index => {
                                      return (
                                        <option value={index.companystaff_id} >{index.companystaff_name}</option>
                                      )
                                    })}
                                    {/* 
                   {this.state.data2 != false ? this.state.data2[0].companystaff_name.map((item, index)=>{
                    return(
                      <option value={item.companystaff_id} key={index}>{item}</option>
                    )
                  }): ""}*/}
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

                              {/*<div className="col-md-12 col-lg-5 col-sm-12">
                                <div className="title text-dark text-border" >
                                  <h5><span className="note bld">Seçim 4</span></h5>
                                  <span className="note ">Seçim 4</span>
                                </div>
                                  </div>*/}
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
            </Row>
          </Container>
        </div>

        /*22222**************************************************************************** */
        <Container>
          <Row >
          
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

                              <div className="asd">
                                {this.state.data4.map((item, index) =>
                                  <div className="col-md-3" >
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
                                    </Button></div>
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

                                <div className="bv" >

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
                            <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button">
                              <i class="fas fa-chevron-left">&nbsp;&nbsp;Önceki</i>
             </Button>
                            <Button className="btn-round mr-1 mla btn-lg" disabled={this.state.disabled == 2 ? true : false} color="danger" type="button">
                              Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
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

        /*33333**************************************************************************** */
        <Container>
          <Row >
          
            <div className={this.state.page1 == 4 ? 'iki rml-auto mr-auto mw-100': 'd-none'}>
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
                                3
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
                                    <th>il</th>
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
                            <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button">
                              <i class="fas fa-chevron-left"></i>&nbsp;&nbsp;Önceki
             </Button>
                            <Button className="btn-round mr-1 mla btn-lg" color="danger" type="button">
                              Sonraki&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
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
       </>
    );
  }
}

export default randone;