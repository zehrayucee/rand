import React from "react";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

import IndexNavbar from "../Navbars/IndexNavbar.js";
function layoutpage() {
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
            <div className="filter "
            />
            <Container>
              <Row >
                <Col className="ml-auto mr-auto mw-100 "   >
                  <Card className="card-register ml-auto mr-auto"
                  style={{ padding:"10px"}}
                  >
                   <div className="as1"
                   style={{
                       backgroundColor:"#6bd098", 
                       width:"100%",
                       height:"15%",
                   }} 
                   >
                   </div>
                   <div className="as2"style={{
                    backgroundColor:"#ffff",
                    width:"100%",
                    height:"100%",
                   }} 
                   >
                   afdfsdf
                   </div>
                  </Card>
                </Col>
              </Row>
            </Container>
            
            <div className="footer register-footer text-center">
              <h6>
                © {new Date().getFullYear()}
              </h6>
            </div>
          </div>
        </>
      );
    }

export default layoutpage;
