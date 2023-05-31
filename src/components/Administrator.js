import React from "react";
import { Container , Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Administrator(props){
return(
    <Container className="d-flex p-2 me-auto justify-content-evenly">

                <Button as={Link} to="/Product"> Product </Button>
                <Button as={Link} to="/Carte">carte</Button>

    </Container>
)
}
export default Administrator;