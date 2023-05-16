import React from "react";
import Reservation from "./Reservation";


export default function ReservationController(props){
    const backUrl = "http://34.155.218.31:8081/reservation";

    function fetchReservation(name, surname,dateOfReservation,timeOfReservation,noOfPersons,email) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name, surname:surname,dateOfReservation:dateOfReservation,timeOfReservation:timeOfReservation,noOfPersons:noOfPersons,email:email})
        };
        fetch(backUrl + "/save", requestOptions)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));            
    }

    return (
        <Reservation fetchReservation = {(name, surname,dateOfReservation,timeOfReservation,noOfPersons,email) => fetchReservation(name, surname,dateOfReservation,timeOfReservation,noOfPersons,email)} />
    )
}

