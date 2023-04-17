import React from "react";
import RegisterClient from "./RegisterClient";


export default function RegisterClientController(props){
    const backUrl = "http://localhost:8081/client";

    function saveClient( nom, prenom, email, password, telephone,
            noAdd,streetName, postalCode, cityName) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  nom:nom, prenom:prenom, email:email, password:password, telephone:telephone,
           addressDto:{noAdd:noAdd, streetName:streetName, postalCode:postalCode, cityName:cityName} })
        };
        fetch(backUrl + "/save", requestOptions)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
          
            
    }

    return (
        <RegisterClient saveClient = {(nom, prenom, email, password, telephone,
            noAdd,streetName, postalCode, cityName) => saveClient(nom, prenom, email, password, telephone,
                noAdd,streetName, postalCode, cityName)} />
    )
}