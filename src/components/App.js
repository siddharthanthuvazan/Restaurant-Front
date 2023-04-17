import React,{useState} from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import{Container,Nav, Navbar}from "react-bootstrap";


import "../css/sandstone.min.css";
import "../css/fontawesome.all.min.css";
import "../css/style.css";

import Home from "./Home";
import Connection from "./Connection";
import SecurityController from "./SecurityController";
import ReservationController from "./ReservationController";
import Carte from "./Carte";
import RegisterClientController from "./RegistrationClientController"
import CarteController from "./CarteConroller";
import Panier from "./Panier";
import logo from '/Users/Formation/Documents/projet 3/code/Restaurant-react-Front/public/pictures/logo.png';


export default function App(props) {
  const [client, setClient] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
    setClient(null);
    setCartItems([]);
  }

  function clientName() {
    return client != null ? client.nom + " " + client.prenom : "";
  }

  function addToCart(item) {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  }

  return (
    <div className="full-bg">
      <BrowserRouter>
        <header className="text-center">
          <h1><img src={logo} alt="Logo"/></h1>
        </header>

        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Navbar.Brand className="ms-2">{clientName()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2" />
          <Navbar.Collapse>
            <Nav className="ms-auto me-2 flex-wrap">
              <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
             {client != null &&   <Nav.Link eventKey="2" as={Link} to="/Carte">Carte</Nav.Link>}
             
               {client != null && 
               <Nav.Link eventKey="3" as={Link} to="/Panier">Panier</Nav.Link>}
              {isLoggedIn ?
                 (<Nav.Link eventKey="4" onClick={handleLogout}>Déconnexion</Nav.Link>) :
                  (<Nav.Link eventKey="4" as={Link} to="/Connection">Connexion</Nav.Link>)
              }
             
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="pt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Connection" element={<SecurityController client={client} setClient={setClient} setIsLoggedIn={setIsLoggedIn} />} />
            <Route exact path="/Reservation" element={<ReservationController />} />
            {client != null && 
            <Route exact path="/Carte" element={<CarteController addToCart={addToCart} />} />}
            <Route exact path="/RegisterClient" element={<RegisterClientController />} />
         {client != null && 
             <Route path="/panier" element={<Panier cartItems={cartItems} />} />}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}























// export default function App(props) {
//   const [client, setClient] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleLogout() {
//     setIsLoggedIn(false);
//     setClient(null);
//     setCartItems([]);
//   }

//   function clientName() {
//     return client != null ? client.nom + " " + client.prenom : "";
//   }

//   return (
//     <div className="bg">
//       <BrowserRouter>
//         <header className="text-center">
//           <h1>logo</h1>
//         </header>

//         <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <Navbar.Brand className="ms-2">{clientName()}</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2" />
//           <Navbar.Collapse>
//             <Nav className="ms-auto me-2 flex-wrap">
//               <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
//               {/* {client != null &&  */}
//               <Nav.Link eventKey="2" as={Link} to="/Carte">Carte</Nav.Link>
             
//               {/* {client != null && */}
//                <Nav.Link eventKey="3" as={Link} to="/Panier">Panier</Nav.Link>
//               {isLoggedIn ?
//                  (<Nav.Link eventKey="4" onClick={handleLogout}>Déconnexion</Nav.Link>) :
//                   (<Nav.Link eventKey="4" as={Link} to="/Connection">Connexion</Nav.Link>)
//               }
             
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Container className="pt-3">
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/Home" element={<Home />} />
//             <Route exact path="/Connection" element={<SecurityController client={client} setClient={setClient} setIsLoggedIn={setIsLoggedIn} />} />
//             <Route exact path="/Reservation" element={<ReservationController />} />
//             {/* {client != null &&  */}
//             <Route exact path="/Carte" element={<CarteController />} />
//             <Route exact path="/RegisterClient" element={<RegisterClientController />} />
//             {/* {client != null && */}
//              <Route path="/panier" element={<Panier cartItems={cartItems} />} />
//           </Routes>
//         </Container>
//       </BrowserRouter>
//     </div>
//   );
// }
