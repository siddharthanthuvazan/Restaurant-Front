import React from "react";


import Connection from "./Connection";

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
                id: json.user.client_id,
                nom: json.user.nom,
                prenom: json.user.prenom,
                
            }));
            
       }

   return(
    <>
    <Connection fetchClient ={(name,password)=>fetchClient(name,password)}/>
    </>
    
   );
}