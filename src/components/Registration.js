import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Registration extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      FirstName: '',  
      LastName: '',
      Location: '',
      PhoneNumber: '',
      Dob: '', 
      Username: '',
      UserType: '', 
      Email: '',  
      Password: ''   
    }  
  

    this.FirstName = this.FirstName.bind(this);  
    this.LastName = this.LastName.bind(this);  
    this.Location = this.Location.bind(this);  
    this.PhoneNumber = this.PhoneNumber.bind(this);  
    this.Dob = this.Dob.bind(this);  
    this.Username = this.Username.bind(this);   
    this.UserType = this.UserType.bind(this); 
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  FirstName(event) {  
    this.setState({ FirstName: event.target.value })  
  }  
  LastName(event) {  
    this.setState({ LastName: event.target.value })  
  }
  Location(event) {  
    this.setState({ Location: event.target.value })  
  } 
  PhoneNumber(event) {  
    this.setState({ PhoneNumber: event.target.value })  
  }
  Dob(event) {  
    this.setState({ Dob: event.target.value })  
  }
  Username(event) {  
    this.setState({ Username: event.target.value })  
  }
  UserType(event) {  
    this.setState({ UserType: event.target.value })  
  }
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }  
   
  
  register(event) {  
  
    fetch('http://localhost:8081/addUser', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
        firstName: this.state.FirstName,  
        lastName: this.state.LastName, 
        location: this.state.Location, 
        phoneNumber : this.state.PhoneNumber, 
        emailAddress: this.state.Email,  
        password: this.state.Password, 
        dob: this.state.Dob, 
        userName: this.state.Username,
        userType: this.state.UserType
        
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.statusCode == 200)  
                this.props.history.push("/Dashboard");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.FirstName} placeholder="Enter First Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.LastName} placeholder="Enter Last Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.PhoneNumber} placeholder="Enter Phone Number" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.Dob} placeholder="Enter Dob" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.Username} placeholder="Enter Username" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.UserType} placeholder="Enter UserType" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                    </InputGroup>
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}  
  
export default Registration; 