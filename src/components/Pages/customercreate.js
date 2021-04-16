import React from "react";
import { displayPartsToString } from "typescript";
import ReactDatetime from "react-datetime";
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
function customercreate() {
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
                        <h4><span className="note bld">Kayıt Olun</span></h4>
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
                          <PaginationItem className="active" >
                            <PaginationLink
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              1
                  </PaginationLink>
                          </PaginationItem>
                          <PaginationItem >
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
                                    <Input placeholder="Default" type="text" />
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
                                    <Input placeholder="Default" type="text" />
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
                                    <Input placeholder="Default" type="text" />
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
                                    <Input placeholder="Default" type="text" />
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
                                    <Input placeholder="Default" type="text" />
                                  </div>
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                            </div>

                            <div className="col-md-12 col-lg-6 col-sm-12">

                              <div className="form-group col-md-12 mt-3">
                                <div className="row">
                                  <div className="col-md-4 pl-0 bld">
                                    Şifre:
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
                                    Şifre (Tekrar) :
                                </div>
                                  <div className="col-md-8">
                                    <Input placeholder="Default" className="form-control" type="text" />
                                  </div>
                                </div>
                              </div>

                              {/*t-ı*/}
                            </div>
                          </div>

                          <div className="ta mt-3" >

                            <Button className="cre mra" color="success" outline size="lg" type="button">
                              Temizle
                 </Button>
                            <Button className="cre mla" color="info" outline size="lg" type="button">
                              Kaydet
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
                                    Tc Kimlik NO
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
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld">
                                    Soyad
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
                                 
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                              {/*text-ınput */}
                              <FormGroup>
                                <div className="row">
                                  <div className="col-md-4 bld">
                                    Doğum Tarihi
                     </div>
                                  
                                </div>
                              </FormGroup>
                              {/*t-ı*/}
                            </div>

                            <div className="col-md-12 col-lg-6 col-sm-12 ml-6 ">

                              <div className="form-group col-md-12 mt-3">
                                <div className="row">
                                  <div className="col-md-6 pl-0 bld">
                                    Şifre:
                                  </div>
                                  
                                </div>
                              </div>

                              {/*t-ı*/}
                              
                            </div>
                          </div>

                          <div className="ta mt-3" >

                            <Button className="cre mra" color="success" outline size="lg" type="button">
                            <i class="bi bi-caret-left-fill"> </i>Düzenle  
                 </Button>
                            <Button className="cre mla" color="danger" outline size="lg" type="button">
                              Kaydet
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

export default customercreate;