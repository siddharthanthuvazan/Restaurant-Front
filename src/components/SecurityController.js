import React from "react";
import Login from "./Connection"


export default function SecurityController(props){
    const backUrl = "http://localhost:8081/security";

    function fetchClient(login, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: login, password: password})
        };
        fetch(backUrl + "/authorize", requestOptions)
            .then(response => response.json())
            .then(json => props.setClient({ 
                token: json.token,
                id: json.client.id,
                nom: json.client.nom,
                prenom: json.client.prenom
            })
            );
    }

    return (
        <Login fetchClient ={(login, password) => fetchClient(login, password)} />
    )
}