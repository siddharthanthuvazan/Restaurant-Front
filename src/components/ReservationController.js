import React from "react";
import Reservation from "./Reservation";


export default function ReservationController(props){
    const backUrl = "http://localhost:8081/reservation";

    function fetchReservation(name, surname,dateOfReservation,noOfPersons,email) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name, surname:surname,dateOfReservation:dateOfReservation,noOfPersons:noOfPersons,email:email})
        };
        fetch(backUrl + "/save", requestOptions)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
            // .then(response => response.json())
            // .then(json => props.setReservation({ 
            //     token: json.token,
            //     id: json.Reservation.id,
            //     name: json.Reservation.nom,
            //     surname: json.Reservation.prenom
            // }));
            
    }

    return (
        <Reservation fetchReservation = {(name, surname,dateOfReservation,noOfPersons,email) => fetchReservation(name, surname,dateOfReservation,noOfPersons,email)} />
    )
}

