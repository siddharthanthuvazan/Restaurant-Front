import React,{useState} from "react";
import {Link} from "react-router-dom";
import{Col,Form,InputGroup,Nav,Row,Card} from "react-bootstrap";

export default function Connection(props){
    
    

    const [fields, setFields] = useState({ login: "", password: "" });

    return( 
        <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0 bg-primary">
            <Card.Header className="text-center text-white">Authentification</Card.Header>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output className="text-white">Identifiant</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpLogin"><i className="fa fa-user"></i></InputGroup.Text>
                            <Form.Control 
                                type="text"
                                aria-describedby="inpLogin"
                                placeholder="Veuillez entrer un identifiant"
                                value={fields.login}
                                onChange={form => setFields({...fields, login:form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output className="text-white">Mot de passe</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPassword"><i className="fa fa-key"></i></InputGroup.Text>
                            <Form.Control 
                                type="text" 
                                aria-describedby="inpPassword"
                                placeholder="Veuillez entrer un mot de passe"
                                value={fields.password}
                                 onChange={form => setFields({...fields, password:form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="d-flex p-2 text-white" >
                    <Row >
                            <Nav.Link
                                className="btn btn-justify-content-center"
                                as={Link} to="/Home"
                                onClick={() => props.fetchClient(fields.login, fields.password)}
                            >
                            <button>Submit</button> 
                            </Nav.Link>        
                    </Row>
                    <Row>

                        <Col className="ms-auto p-2">
                        <Nav.Link >
                           <button value="Mot de passe oublié" >Mot de passe oublié</button> 
                        </Nav.Link>
                        </Col>
                        <Col className="d-flex flex-row-reverse p-2">
                        <Nav.Link
                                
                                as={Link} to="/RegisterClient"
                               
                            >
                             <button>SignUp </button>
                        </Nav.Link>

                        </Col>
                        
                    </Row>
                   
                </Row>
                
            </Card>
        </Row>
    );
}