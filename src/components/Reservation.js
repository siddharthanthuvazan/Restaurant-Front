import React, { useState } from "react";
import TimePicker from "rc-time-picker";
import DatePicker from "./DatePicker";
import { Card, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";




export default function Reservation(props){
    
    

    const [fields, setFields] = useState({ name:"", surname:"", dateOfReservation:"", noOfPersons:"", email:""});


 return(
    < >
    
   
    <Row className="d-flex-column justify-content-center p-3 pt-5">
        <Card className="max-width-50-rem p-0 bg-primary">
        <Card.Header className="text-center text-white">Form to Reserve a Table</Card.Header>  
        <Row className="p-2">
             <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                <output className="text-white">Name</output>
             </Col>
             <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                 <InputGroup className="mb-3">
                     <InputGroup.Text id="inpName"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                     <Form.Control 
                         type="text"
                         aria-describedby="inpName"
                         placeholder="Name"
                         value={fields.name}
                         onChange={form => setFields({...fields, name: form.target.value})}
                     />
                 </InputGroup>
                
             </Col>      
        </Row>
        <Row className=" p-2">
             <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}> 
                 <output className="text-white">Surname</output>
              </Col>
              <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inpSurName"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                    <Form.Control 
                        type="text"
                        aria-describedby="inpSurName"
                        placeholder="Surname"
                        value={fields.surname}
                        onChange={form => setFields({...fields, surname: form.target.value})}
                    />
                </InputGroup>
                 
              </Col>
          
        </Row>
        <Row className="p-2">
             <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                <output className="text-white">Date Of Reservation</output>
             </Col>
             <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                 <InputGroup className="mb-3">
                     <InputGroup.Text id="inpDate"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                     <Form.Control 
                         type="text"
                         aria-describedby="inpDate"
                         placeholder="Date(YYYY-MM-DD)"
                         value={fields.dateOfReservation}
                         onChange={form => setFields({...fields, dateOfReservation: form.target.value})}
                     />
                 </InputGroup>
                
             </Col>      
        </Row>
        
     


        {/* <Row onSubmit={handleSubmit} className=" p-2">
            <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                <output className="text-white">Date of reservation</output>
            </Col>
            
            <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpDate"><i className="fa fa-calendar" aria-hidden="true"></i></InputGroup.Text>
                        <Col>
                        <ReactDatetimeClass
                          aria-describedby="inpDate"
                         onChange={handleDateChange} 
                         value={fields.dateOfReservation}
                        />
                        </Col>
                       
                        
                        {/* onChange={form => setFields({...fields, dateOfReservation: form.target.value})} 
                       
                        
                    </InputGroup>
                
            </Col>   
          
            
        </Row> */}



        {/* /////// */}
        {/* <Row className=" p-2">
            <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                <output className="text-white">Date of reservation</output>
            </Col>
            <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inpLogin"><i className="fa fa-calendar" aria-hidden="true"></i></InputGroup.Text>
                        <DatePicker 
                        value={fields.dateOfReservation}
                        onChange={form => setFields({...fields, dateOfReservation: form.target.value})}
                        />
                        
                    </InputGroup>
                
            </Col>   
        </Row>
        <Row className="p-2">
            <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>

            <output className="text-white">Time</output>
                 
            </Col>
            <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7} className=".rc-time-picker-clear"> 
                <InputGroup className="mb-3">
                <InputGroup.Text id="inpSurName"><i className ="fa fa-clock" aria-hidden="true"></i></InputGroup.Text>
                <Col>
                <TimePicker
                     placeholder="Select Time"
                     use12Hours
                     showSecond={false}
                     focusOnOpen={true}
                     format="hh:mm A"
                     onChange={e => setTime(e.format('LT'))}
                    />
                </Col>
                    
                  // <Col>  <p>Selected Time: {time || '-'}</p> </Col>
                    
                    
                </InputGroup>
                       
                 
            </Col>
             
        </Row> */}
        <Row className="p-2">
             <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                <output className="text-white">No. Of Persons</output>
             </Col>
             <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                 <InputGroup className="mb-3">
                     <InputGroup.Text id="inpPersons"><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                     <Form.Control 
                         type="text"
                         aria-describedby="inpPersons"
                         placeholder="No of persons"
                         value={fields.noOfPersons}
                         onChange={form => setFields({...fields, noOfPersons: form.target.value})}
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

        <Row className="d-flex p-2 text-white" >
                 
            <Nav.Link
                className="btn btn-justify-content-center"
                onClick={ () => props.fetchReservation(fields.name,fields.surname,fields.dateOfReservation,fields.noOfPersons,fields.email)}
             >
             Submit
            </Nav.Link>        
        </Row>
    </Card>
    </Row>
    
    </>
);
    
}