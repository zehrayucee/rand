import React, { Component, } from "react";
import axios from 'axios';
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import IndexNavbar from "../Navbars/IndexNavbar.js";


export default class Customerlogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      id: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle(key){
    return e =>{
      this.setState({
        [key]: e.target.value
      })
    } 
 }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, id } = this.state;

    axios
      .post(
        "https://reqres.in/api/users?page=2",
        {
          user: {
            email: this.state.email,
            id: this.state.id,
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("customerlogin error", error);
      });
    event.preventDefault();
  }
 
  render() {
    return (
    <div>
    <IndexNavbar />
      
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/axa.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h1 className="title mx-auto"><i class="far fa-user"></i></h1>
               
                <Form className="register-form" onSubmit={this.handleSubmit}>
                  <label>Kullanıcı Adı:</label>
                  <Input placeholder="Lütfen kullanıcı adını girin..." value={this.state.email} onChange={this.onChangeHandle("email")} type="text" />
                  <label>Şifre</label>
                  <Input placeholder="Lütfen şifre girin..." value={this.state.id} onChange={this.onChangeHandle("id")} type="password" />
                  <Button  btn-lg block className="btn-round" Id="getBtn" onSubmit={this.handleSubmit} style={{
                    backgroundColor: "#2b5659",
                  }}>
                  <i class="fas fa-user"></i>&nbsp;Giriş Yap
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                  <i class="fas fa-unlock"></i>&nbsp;Şifremi Unuttum
                  </Button>
                  
                  <Button
                  className="btn-link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Üye OL&nbsp;<i class="fas fa-user-plus"></i>
                </Button>
                
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
      </div>
      
    )
  }
}
