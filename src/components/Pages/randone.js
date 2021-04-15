import React from "react";
// import Dropdown from "react-dropdown";
//import { Button, Card, Pagination,Dropdown, PaginationItem, PaginationLink, Form, Input, Container, Row, Col } from "reactstrap";
import { displayPartsToString } from "typescript";
import ReactDatetime from "react-datetime";
import {
  Button,
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

// import "assets/css/style.css";


import IndexNavbar from "../Navbars/IndexNavbar.js";
function randone() {
    return (
        <>
        
        <IndexNavbar />
        
        <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/axa.jpg").default + ")",
        }}
        >
        
      <div className="filter "/>
      
      <Container>
      <Row >
      <div className="bir rml-auto mr-auto mw-100">
                <Col className=" rml-auto mr-auto mw-100 " >
                  <Card className="card-register ml-auto mr-auto"
                  style={{ padding:"10px"}}
                  >
                  
                   <div className="as1" 
                      style={{
                       backgroundColor:"#6bd098", //#6bd098
                       width:"100%",
                       height:"15%",
                       display:"flex",
                     }} 
                   >
                       <div className="asic mrr col-md-6"
                          style={{
                          backgroundColor:"#6bd098" ,
                          width:"55%",
                         height:"80%",}}>
                         <div className="title text-dark text-border  " >
                    <h4><span className="note bld">Hizmet Sağlayıcıyı Seçin</span></h4>
                   </div>
                    </div> 
                    <div className="paniation mll "
                   style={{
                    backgroundColor:"#6bd098", //#6bd098
                    display:"flex",
                    width:"20%",
                    height:"80%",
                   }}>
                   {/*panigation (1-2-3-4)*/}
                   <nav aria-label="...">
                <Pagination count={10} disabled>
                  {/*<PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>*/}
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem >
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3 {/*<span className="sr-only">(current)</span>*/}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  {/*<PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>*/}
                  </Pagination>
              </nav>
                    {/*panigation finish */}
                    </div>
                       </div>


                   <div className="as2  "style={{
                    backgroundColor:"#ffff",
                    width:"100%",
                    height:"90%",
                   }} 
                   >
                   
                   <div className="form1 mlk">
                   
                   <Form className="register-form">
                   <Container>
                   <Row>
                   <div className="col-md-12 col-lg-5 col-sm-12">
                   <div className="title text-dark text-border " >
                    <h5><span className="note bld ">Seçim-1</span></h5>
                    <div className="select">
                    <select class="custom-select  " aria-label=".form-select-lg example">
                    <option selected>Open this select menu</option>
                    </select></div> </div>
                    </div>
                   
                    <div className="col-md-12 col-lg-5 col-sm-12">
                   <div className="title text-dark text-border bld " >
                   <h5><span className="note bld">Seçim 2</span></h5>
                   <select class="custom-select form-select-lg col-md-12 " aria-label=".form-select-lg example">
                   <option selected>Open this select menu</option>
                   </select>
                   </div>
                   </div>
                   </Row> 
                   
                   <Row>
                   <div className="col-md-12 col-lg-5 col-sm-12">
                   <div className="title text-dark text-border bld " >
                   <h5><span className="note bld">Seçim 3</span></h5>
                   <select class="custom-select form-select-lg col-md-12 " aria-label=".form-select-lg example">
                   <option selected>Open this select menu</option>
                   </select>
                   </div>
                   </div>

                   <div className="col-md-12 col-lg-5 col-sm-12">
                   <div className="title text-dark text-border" >
                   <h5><span className="note bld">Seçim 4</span></h5>
                   <span className="note ">Seçim 4</span></div>
                   </div>
                   </Row>
                   <Row>
                   <Button className="btn-round mr-1 mllt btn-lg" color="danger" type="button">
                    Sonraki
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
              
            <div className="footer register-footer text-center">
              <h6>
                © {new Date().getFullYear()}
              </h6>
            </div>
          </div>
         
/******22222**************************************************************************** */ 
<Container>
<Row >
<div className="iki rml-auto mr-auto mw-100">
          <Col className=" rml-auto mr-auto mw-100 " >
            <Card className="card-register ml-auto mr-auto"
            style={{ padding:"10px"}}
            >
            
             <div className="as1" 
                style={{
                 backgroundColor:"#6bd098", //#6bd098
                 width:"100%",
                 height:"15%",
                 display:"flex",
               }} 
             >
                 <div className="asic mrr col-md-6"
                    style={{
                    backgroundColor:"#6bd098" ,
                    width:"55%",
                   height:"80%",}}>
                   <div className="title text-dark text-border  " >
              <h4><span className="note bld">Randevu Zamanı ve Tarihini Seçin</span></h4>
             </div>
              </div> 
              <div className="paniation mll "
             style={{
              backgroundColor:"#6bd098", //#6bd098
              display:"flex",
              width:"20%",
              height:"80%",
             }}>
             {/*panigation (1-2-3-4)*/}
             <nav aria-label="...">
          <Pagination count={10} disabled>
            {/*<PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tabIndex="-1"
              >
                Previous
              </PaginationLink>
            </PaginationItem>*/}
            <PaginationItem >
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
            <PaginationItem >
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                3 {/*<span className="sr-only">(current)</span>*/}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                4
              </PaginationLink>
            </PaginationItem>
            
            </Pagination>
        </nav>
              {/*panigation finish */}
              </div>
              </div>
             <div className="as2  "style={{
              backgroundColor:"#ffff",
              width:"100%",
              height:"90%",
             }} 
             >
             
             <div className="form1 mlk">
             <Form className="register-form">
             <Container>
             <Row>
             <div className="col-md-12 col-lg-6 col-sm-12">
             <div className="title text-dark text-border bld " >
              <h5><span className="note bld">Seçim 5</span></h5>
              </div>
                <Col sm="6">
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                    <ReactDatetime
                    inputProps={{
                      placeholder: "Datetime",
                      
                    }}
                  />
                      <InputGroupAddon addonType="append ">
                        <InputGroupText className="dtclr">
                          <span className="glyphicon glyphicon-calendar  ">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
             </div>
             
             <div className="col-md-12 col-lg-5 col-sm-12">
             <div className="title text-dark text-border bld " >
             <h5><span className="note bld">Seçim 6</span></h5>
             </div>
             <div>
             <select class="custom-select form-select-lg col-md-12 " aria-label=".form-select-lg example">
             <option selected>Open this select menu</option>
             </select>
             </div>
             <div className="asd">
             <ul>
             <Button className="tkh" color="#6bd098" type="button">
             Default
             </Button>
             <Button className="tkh" color="#6bd098" type="button">
             Default
             </Button>
             <Button className="tkh" color="#6bd098" type="button">
             Default
             </Button>
             </ul>
             </div>
             </div>
             </Row>

             
             <div className="ta" >
             <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button">
              Önceki 
             </Button>
             <Button className="btn-round mr-1 mla btn-lg" color="danger" type="button">
               Sonraki
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

/******33333**************************************************************************** */ 
<Container>
<Row >
<div className="iki rml-auto mr-auto mw-100">
          <Col className=" rml-auto mr-auto mw-100 " >
            <Card className="card-register ml-auto mr-auto"
            style={{ padding:"10px"}}
            >
            
             <div className="as1" 
                style={{
                 backgroundColor:"#6bd098", //#6bd098
                 width:"100%",
                 height:"15%",
                 display:"flex",
               }} 
             >
                 <div className="asic mrr col-md-6"
                    style={{
                    backgroundColor:"#6bd098" ,
                    width:"55%",
                   height:"80%",}}>
                   <div className="title text-dark text-border  " >
              <h4><span className="note bld">Randevu Zamanı ve Tarihini Seçin</span></h4>
             </div>
              </div> 
              <div className="paniation mll "
             style={{
              backgroundColor:"#6bd098", //#6bd098
              display:"flex",
              width:"20%",
              height:"80%",
             }}>
             {/*panigation (1-2-3-4)*/}
             <nav aria-label="...">
          <Pagination count={10} disabled>
            {/*<PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                tabIndex="-1"
              >
                Previous
              </PaginationLink>
            </PaginationItem>*/}
            <PaginationItem >
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem  className="active">
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                3 {/*<span className="sr-only">(current)</span>*/}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                4
              </PaginationLink>
            </PaginationItem>
            
            </Pagination>
        </nav>
              {/*panigation finish */}
              </div>
              </div>
             <div className="as2  "style={{
              backgroundColor:"#ffff",
              width:"100%",
              height:"90%",
             }} 
             >
             
             <div className="form1 mlk">
             <Form className="register-form">
             <Container>
             <Row>

             <div className="col-md-12 col-lg-6 col-sm-12">
             <div className="aspt">
             

             <Col sm="6">
              <FormGroup>
                <Input placeholder="Default" type="text" />
              </FormGroup>
             </Col>

             </div>
             </div>
             
             <div className="col-md-12 col-lg-5 col-sm-12">
             <div className="aspt">

             </div>
             <div>
            
             </div>
            
             </div>
             </Row>

             <div className="ta" >
             <Button className="btn-round mr-1 mra btn-lg" color="dark" type="button">
              Önceki 
             </Button>
             <Button className="btn-round mr-1 mla btn-lg" color="danger" type="button">
               Sonraki
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

export default randone;
