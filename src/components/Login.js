import React, { Component } from 'react';  
import '../App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
class Login extends Component {  
    constructor() {  
        super();  
  
        this.state = {  
            Username: '',  
            Password: ''  
        }  
  
        this.Password = this.Password.bind(this);  
        this.Username = this.Username.bind(this);  
        this.login = this.login.bind(this);  
    }  
  
    Username(event) {  
        this.setState({ Username: event.target.value })  
    }  
    Password(event) {  
        this.setState({ Password: event.target.value })  
    }  
    login(event) {    
        fetch('http://localhost:8081/user-search', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                userName: this.state.Username,  
                password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                if (result === null)  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Quiz");  
            })  
    }  
  
    render() {  
  
        return (  
            <div className="app flex-row align-items-center">  
                <Container>  
                    <Row className="justify-content-center">  
                        <Col md="9" lg="7" xl="6">  
  
                            <CardGroup>  
                                <Card className="p-2">  
                                    <CardBody>  
                                        <Form>  
                                            <div class="row" className="mb-2 pageheading">  
                                                <div class="col-sm-12 btn btn-primary">  
                                                    Login  
                             </div>  
                                            </div>  
                                            <InputGroup className="mb-3">  
  
                                                <Input type="text" onChange={this.Username} placeholder="Enter Username" />  
                                            </InputGroup>  
                                            <InputGroup className="mb-4">  
  
                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />  
                                            </InputGroup>  
                                            <Button onClick={this.login} color="success" block>Login</Button>  
                                        </Form>  
                                    </CardBody>  
                                </Card>  
                            </CardGroup>  
                        </Col>  
                    </Row>  
                </Container>  
            </div>  
        );  
    }  
}  
  
export default Login;