import React from "react";
import { Nav } from "react-bootstrap";
import App from "./App";


export default function Deconnection(props){
    function handleLogout() {
        const backUrl = "http://localhost:8081/security";
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:"", password:""})
        };
        fetch(backUrl + "/logout", requestOptions)
        .then((response) => console.log(response.data)).setIsLoggedIn(false)
        .catch((error) => console.log(error));
       }

       return(
        <></>
             );
}