import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Row, Col, FormGroup, Button} from 'react-bootstrap';
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";


class TutorialEdit extends Component {
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
        const id = this.props.match.params.id
        this.setState({
            id:id
        })
        this.recogerDatos(id)
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

    recogerDatos = (id) =>{
        TutorialDataService.get(id)
        .then(response =>{
            this.setState({
                title: response.data.title,
                description: response.data.description,
                published: response.data.published
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    handleSubmit = () =>{
        let data = this.state;
        TutorialDataService.update(this.state.id, data)
        .then(response =>{
            console.log(response.data)
            console.log("Exito")
        })
        .catch(e =>{
            console.log(e)
        })
    }
    
    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
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
                    <Button type="submit">Editar</Button>
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

export default TutorialEdit;