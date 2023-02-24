import React, { Component } from 'react';  
import '../App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  class Quiz extends Component {  
      
    constructor() {
        super();
        this.state = { questions: [] };
    }

    componentDidMount() {
        fetch('http://localhost:8081/fetch-questions-by-type-category?questionCategory=simple&questionType=aoi')
          .then(response => response.json())
          .then(json => this.setState({ questions: json }));
      }

      render() {
        return (
          <div>
            <h1>Questions</h1>
            {
              this.state.questions.length == 0
                ? 'Loading questions...'
                : this.state.questions.map(question => (
                    <div>
                        <h5><p>{question.questionDescription}</p></h5>
                        {
                            question.questionOption.length == 0
                            ? 'Loading options...' :
                            question.questionOption.map(option => (
                            <div>
                                <Input type="radio"/>{option}
                            </div>
                            ))
                        }
                    </div>
                ))
            }
          </div>
        );
      } 
}  
  
export default Quiz;