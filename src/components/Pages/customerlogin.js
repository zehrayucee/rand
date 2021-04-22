import React, { Component} from "react";
import axios from 'axios';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import IndexNavbar from "../Navbars/IndexNavbar.js";


export default class customerlogin extends Component {
  constructor(props){
    super(props);
    this.state={
        data:[],
        input: "",
        input2:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user ={
      input: this.state.input
    }
    
      axios.post("http://localhost:12283/api/TBLNOTs", {user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
    <div>
     {/**  {this.state.data.map(data=> {
        return (
            <div>
              id: {data.not_txt}
            </div>
        )
      })} */}       

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
                  <Input placeholder="Lütfen kullanıcı adını girin..." onChange={this.handleChange} type="text" />
                  <label>Şifre</label>
                  <Input placeholder="Lütfen şifre girin..."  type="password" />
                  <Button  btn-lg block className="btn-round" Id="getBtn" style={{
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
