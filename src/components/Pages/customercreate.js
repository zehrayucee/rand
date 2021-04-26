import React, { Component } from "react";
import { displayPartsToString } from "typescript";
import ReactDatetime from "react-datetime";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from 'axios';
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
} from "reactstrap";


import IndexNavbar from "../Navbars/IndexNavbar.js";
class  Customercreate extends Component {

  constructor(props){
    super(props);
    this.state={
      tc:"",
      name:"",
      lastname:"",
      fathername:"",
      datetime:"",
      passw:"",
    }
  }
    handleReset = () => {
      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
      );
      this.setState({
        itemvalues: [{}]
      });

      this.onChangeHandle =this.onChangeHandle.bind(this)
    }
    
    clıckkopy = () => {}
componentDidMount(){
  var bu = this
  axios.get("http://localhost:12283/api/TBLNOTs").then(res=>{
    bu.setState({
    tc: res.data[0].not_txt, 
    name: res.data[0].not_txt,
    lastname: res.data[0].not_txt,
    fathername: res.data[0].not_date,
    datebird: res.data[0].not_txt,
    passw: res.data[0].not_txt})

  }).catch(err=>{
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
      <IndexNavbar />
      <div className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/axa.jpg").default + ")",
        }} >
         {/*11111111111111111111 */}
        <div className="filter " />
        <Container>
          <Row >
            <div className="bir rml-auto mr-auto mw-100 ">
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
                    <div className="paniation mll col-md-2 "
                      style={{
                        backgroundColor: "yellow", //#6bd098
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

                            <div className="col-md-12 col-lg-6 col-sm-12">

                              {/*text-ınput */}
                              <FormGroup className="mt-3">
                                <div className="row">
                                  <div className="col-md-4 bld">
                                    Tc Kimlik NO
                     </div>
                                  <div className="col-md-8">
                                    <Input placeholder="Default" type="text" value={this.state.tc}  onChange={this.onChangeHandle("tc")}/>
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
                                    <Input placeholder="Default" type="text"  value={this.state.name} onChange={this.onChangeHandle("name")}   />
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
                                    <Input placeholder="Default" type="text" value={this.state.fathername} onChange={this.onChangeHandle("fathername")}/>
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
                                    <Input placeholder="Default" type="text" value={this.state.datebird} onChange={this.onChangeHandle("datebird")}/>
                                  </div>
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                            </div>

                            <div className="col-md-12 col-lg-6 col-sm-12">

                              <div className="form-group col-md-12 mt-3">
                                <div className="row">
                                  <div className="col-md-4 pl-0 bld">
                                    Şifre
                                  </div>
                                  <div className="col-md-8">
                                    <Input placeholder="Default" className="form-control" type="text" />
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
                                    <Input placeholder="Default" className="form-control" type="text" value={this.state.passw} onChange={this.onChangeHandle("passw")}/>
                                  </div>
                                </div>
                              </div>

                              {/*t-ı*/}
                            </div>
                          </div>

                          <div className="ta mt-3" >

                            <Button className="cre mra" color="success" outline size="lg" type="Button" onClick = {this.handleReset}>
                            <i class="far fa-trash-alt"></i>&nbsp; Temizle 
                 </Button>
                            <Button className="cre mla" color="info" outline size="lg" type="button" onClick={this.onSubmit} >
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
         
        
        {/*2222222222222222222222222 */}
      </div>
      <div className="filter " />
        <Container>
          <Row >
            <div className="iki rml-auto mr-auto mw-100">
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
                                    {this.props.tc}
                     </div>
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld" >
                                    {this.props.name}
                     </div>
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld">
                                    {this.props.lastname}
                     </div>
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld ">
                                    {this.props.fathername}
                     </div>
                                 
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld">
                                    {this.props.datebird}
                     </div>
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                            </div>

                            <div className="col-md-12 col-lg-6 col-sm-12 ml-6 ">

                              <div className="form-group col-md-12 mt-3">
                                <div className="row">
                                  <div className="col-md-6 pl-0 bld">
                                    {this.props.passw}
                                  </div>
                                  
                                </div>
                              </div>

                              {/*t-ı*/}
                              
                            </div>
                          </div>

                          <div className="ta mt-3" >

                            <Button className="cre mra" color="success" outline size="lg" type="button">
                            <i class="bi bi-caret-left-fill"> </i><Link to="/customercreate">Düzenle</Link>  
                 </Button>
                            <Button className="cre mla" color="danger" outline size="lg" type="button" onClick={this.onSubmit}>
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

      



    </>
  );
}
}
export default Customercreate;