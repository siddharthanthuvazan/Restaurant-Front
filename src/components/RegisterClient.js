import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";


export default function RegisterClient(props){



    const [fields, setFields] = useState({ 
            nom:"", prenom:"", email:"", password:"", telephone:"",
           addressDto:{noAdd:"", streetName:"", postalCode:"", cityName:""} 
            });


    return(
       < >
       
      
       <Row className="d-flex-column justify-content-center p-3 pt-5">
           <Card className="max-width-50-rem p-0 bg-primary">
           <Card.Header className="text-center text-white">Register as Client</Card.Header>  
           <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">nom</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpnom"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpnom"
                            placeholder="Nom"
                            value={fields.nom}
                            onChange={form => setFields({...fields, nom: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           <Row className=" p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}> 
                    <output className="text-white">Prenom</output>
                 </Col>
                 <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                   <InputGroup className="mb-3">
                       <InputGroup.Text id="inpPrenom"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                       <Form.Control 
                           type="text"
                           aria-describedby="inpPrenom"
                           placeholder="Prenom"
                           value={fields.prenom}
                           onChange={form => setFields({...fields, prenom: form.target.value})}
                       />
                   </InputGroup>
                    
                 </Col>
             
           </Row>

           <Row className=" p-2">
               <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
               <output className="text-white">Email</output>
                </Col>           
               <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                    <InputGroup.Text id="inpEmail"><i className="fa fa-envelope" aria-hidden="true"></i></InputGroup.Text>
                       <Form.Control 
                           type="text"
                           aria-describedby="inpEmail"
                           placeholder="Email"
                           value ={fields.email}
                           onChange={form => setFields({...fields, email: form.target.value})}
                       />
                    </InputGroup>
               </Col>
               
           </Row>


            <Row className="p-2">
            <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
            <output className="text-white">Password</output>
            </Col>
            
            <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}> 
                <InputGroup className="mb-3">
                 <InputGroup.Text id="inpPassword"><i className="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
                    <Form.Control 
                        type="text"
                        aria-describedby="inpPassword"
                        placeholder="Password"
                        value={fields.password}
                        onChange={form => setFields({...fields, password: form.target.value})}
                    />
                 </InputGroup>
            </Col>
        </Row>
        <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">Telephone</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpTelephone"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpTelephone"
                            placeholder="Telephone"
                            value={fields.telephone}
                            onChange={form => setFields({...fields, telephone: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">Door Number</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpDoorNumber"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpDoorNumber"
                            placeholder="House Number"
                            value={fields.noAdd}
                            onChange={form => setFields({...fields, noAdd: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">Street Name</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpStreetName"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpStreetName"
                            placeholder="Name of the street"
                            value={fields.streetName}
                            onChange={form => setFields({...fields, streetName: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">City Name</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpCityName"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpCityName"
                            placeholder="City Name"
                            value={fields.cityName}
                            onChange={form => setFields({...fields, cityName: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           <Row className="p-2">
                <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                   <output className="text-white">Postal Code</output>
                </Col>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpCodePostal"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control 
                            type="text"
                            aria-describedby="inpCodePOstal"
                            placeholder="Code Postal"
                            value={fields.postalCode}
                            onChange={form => setFields({...fields, postalCode: form.target.value})}
                        />
                    </InputGroup>
                   
                </Col>      
           </Row>
           
   
           <Row className="d-flex p-2 text-white" >
                    
               <Nav.Link
                   className="btn btn-justify-content-center"
                   onClick={ () => props.saveClient(fields.nom,fields.prenom,fields.email,fields.password,fields.telephone,fields.noAdd,fields.streetName,fields.cityName,fields.postalCode)}
                >
                Submit
               </Nav.Link>        
           </Row>
       </Card>
       </Row>
       
       </>
   );
    
}