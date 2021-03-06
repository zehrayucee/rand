
import React, { Component } from 'react'
import { displayPartsToString } from "typescript";
import ReactDatetime from "react-datetime";
import IndexNavbar from "../Navbars/IndexNavbar.js";
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

export default class passwordnew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.epostaa = this.epostaa.bind(this)
    this.smss = this.smss.bind(this)
  }

  epostaa() {
    this.setState({ page: 2 })
  }

  smss() {
    this.setState({ page: 1 })
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/axa.jpg").default + ")",
          }} >

          <div className="filter" />
          <Container>
            <Row >
              {/*1111 */}
              <div className={this.state.page == 1 ? "bir rml-auto mr-auto mw-100" : "d-none"}>
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
                          <h4><span className="note bld">Parola İşlemleri</span></h4>
                        </div>
                      </div>
                      <div className="paniation mll "
                        style={{
                          backgroundColor: "#6bd098", //#6bd098
                          display: "flex",
                          width: "20%",
                          height: "80%",
                        }}>


                      </div>
                    </div>

                    <div className="as2 ">
                      <div className="form1 mlk">
                        <Form className="register">
                          <Container>
                            <div className="row">

                              <div className="ta mt-3" >
                                <Button className="cre mra ml-5" color="warning" outline size="lg" type="button" onClick={this.smss}>
                                  SMS ile
               </Button>
                                <Button className="cre mla ml-5" color="info" outline size="lg" type="button" onClick={this.epostaa}>
                                  E-posta ile
              </Button>
                              </div>

                              <div className="col-md-12 col-lg-10 col-sm-12">


                                {/*text-ınput */}
                                <FormGroup className="mt-3">
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Tc Kimlik NO
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
                                    <div className="col-md-4 bld">
                                      Cep Telefonu
                   </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                              </div>
                              <div className="ta mt-3" >

                                <Button className="cre mla mr-5" color="danger" outline size="lg" type="button">
                                  İleri&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                                </Button>
                              </div>
                            </div>


                          </Container>
                        </Form>
                      </div>
                    </div>

                  </Card>
                </Col>
              </div>
              {/*222 */}
              <div className={this.state.page == 2 ? "iki rml-auto mr-auto mw-100" : "d-none"}>
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
                          <h4><span className="note bld">Parola İşlemleri</span></h4>
                        </div>
                      </div>
                      <div className="paniation mll "
                        style={{
                          backgroundColor: "#6bd098", //#6bd098
                          display: "flex",
                          width: "20%",
                          height: "80%",
                        }}>


                      </div>
                    </div>

                    <div className="as2 ">
                      <div className="form1 mlk">
                        <Form className="register">
                          <Container>
                            <div className="row">

                              <div className="ta mt-3" >
                                <Button className="cre mra ml-5" color="warning" outline size="lg" type="button" onClick={this.smss}>
                                  SMS ile
               </Button>
                                <Button className="cre mla ml-5" color="info" outline size="lg" type="button" onClick={this.epostaa}>
                                  E-posta ile
              </Button>
                              </div>

                              <div className="col-md-12 col-lg-10 col-sm-12">


                                {/*text-ınput */}
                                <FormGroup className="mt-3">
                                  <div className="row">
                                    <div className="col-md-4 bld">
                                      Tc Kimlik NO
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
                                    <div className="col-md-4 bld">
                                      E-posta
                   </div>
                                    <div className="col-md-8">
                                      <Input placeholder="Default" type="text" />
                                    </div>
                                  </div>
                                </FormGroup>
                                {/*t-ı*/}
                              </div>
                              <div className="ta mt-3" >

                                <Button className="cre mla mr-5 nbv" color="danger" outline size="lg" type="button">
                                  İleri&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>
                                </Button>
                              </div>
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
