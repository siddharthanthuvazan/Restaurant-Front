import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [reservation, setReservation] = useState({
    name:"", surname:"",dateOfReservation:"",noOfPersons:"",email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/reservation/save", reservation)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Name:</label>
        <input
          type="text"
          name="name"
          value={reservation.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>surname:</label>
        <input
          type="text"
          name="surname"
          value={reservation.surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={reservation.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>date of Reservation:</label>
        <input
          type="text"
          name="dateOfReservation"
          value={reservation.dateOfReservation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>No of persons:</label>
        <input
          type="text"
          name="noOfPersons"
          value={reservation.noOfPersons}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;