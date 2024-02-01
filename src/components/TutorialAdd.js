import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Col, FormGroup, Button} from 'react-bootstrap';
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";


class TutorialAdd extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            title: '',
            description: '',
            published: false
        }
    }

    componentDidMount = () => {
        
    }

    onChangeValue = (e) => {
        const nameValue = e.target.name;
        const formValue = e.target.value;
       
        this.setState({[nameValue]: formValue})
    }

    onChangeValueChecked = (e) =>{
        const checked = e.target.checked;
        this.setState({published: checked})
    }

    handleSubmit = () =>{
        let data = this.state;
        console.log(data)
        TutorialDataService.create(data)
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                    <FormGroup>
                        <Form.Label>ID</Form.Label>
                        <Form.Control placeholder='Introduzca el ID' name='id' value={this.state.id}  onChange={this.onChangeValue}></Form.Control>
                    </FormGroup>
                    </Col>
                    </Row>
                <Row>
                    <Col>
                    <FormGroup>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder='Introduzca el nombre del tutorial' name='title' value={this.state.title}  onChange={this.onChangeValue}></Form.Control>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <FormGroup>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control placeholder='Introduzca la descripción del tutorial' name='description' value={this.state.description} onChange={this.onChangeValue}></Form.Control>
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <FormGroup>
                        <Form.Check
                         type="checkbox"
                         id="customCheckbox"
                         checked={this.state.published}
                         name='published'
                         label="Publicado"
                         onChange={this.onChangeValueChecked}>                            
                        </Form.Check>
                    </FormGroup>
                    </Col>
                    </Row>
                <Row>
                    <Col>
                    <FormGroup>
                    <Button type="submit">Crear</Button>
                    <Link to={"/tutorials/"} className="badge badge-primary">
                Volver
              </Link>
                    </FormGroup>
                    </Col>
                </Row>
                </Form>
            </div>
        );
    }
}

export default TutorialAdd;