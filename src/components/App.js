import React,{useState} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import{Container,Nav, Navbar}from "react-bootstrap";


import "../css/sandstone.min.css";
import "../css/fontawesome.all.min.css";
import "../css/style.css";

import Home from "./Home";
import Connection from "./Connection";
import SecurityController from "./SecurityController";
import Reservation from "./Reservation";
import ReservationController from "./ReservationController";
import Carte from "./Carte";
import ReservationForm from "./ReservationForm"




export default function App(){
  
  const [client, setClient] = useState(null);

  function clientName() {
    return client != null ? client.name + " " + client.surname : "";
 }

  return(
    
     <div className="bg">
      
    <BrowserRouter> 

     <header className="text-center ">
        <h1> logo<i className=" "></i></h1>
      </header>

    <Navbar  className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Navbar.Brand className="ms-2">{clientName()}</Navbar.Brand> 
       <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2" /> 
        <Navbar.Collapse> 
        <Nav className="ms-auto me-2 flex-wrap" > 
          <Nav.Link eventKey="1" as={Link} to="/Home"> Home</Nav.Link>
          <Nav.Link  eventKey="2" as={Link} to="/Connection"> Login</Nav.Link> 
         
          
        </Nav>

      </Navbar.Collapse> 

    </Navbar>    
        <Container className=" pt-3">
           <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/Home" element={<Home/>} />
               <Route exact path="/Connection" element={<Connection/>} />
               <Route exact path="/login" element={<SecurityController client={client} setClient={setClient} />} />
               <Route exact path="/Reservation" element={<ReservationController/>}></Route>
               <Route exact path="/Carte" element={<Carte/>}></Route>
               <Route exact path="/ReservationForm" element={<ReservationForm/>}></Route>
               
           </Routes>
        </Container>
    </BrowserRouter>
    </div>  
    
  );

}