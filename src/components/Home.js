import React from "react";
import {Container,Button} from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";


export default function Home(props){
    return(
        <>
         <h1 className="d-md-flex p-2 justify-content-center"> Bienvenue au restaurant de l’Indian !</h1>

            <Container className="d-flex p-2 me-auto justify-content-evenly">

                <Button as={Link} to="/Reservation"> Sur Place</Button>
           

            </Container>
        </>
       
    
    
    );
}